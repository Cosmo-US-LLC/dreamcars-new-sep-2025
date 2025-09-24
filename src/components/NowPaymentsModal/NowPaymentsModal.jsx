import { QRCodeCanvas } from '@akamfoad/qrcode'
import clsx from 'clsx'
import { refetchUserData } from '../../presale-gg/stores'
import { parseNum, waitForNextTransaction, zeroPad } from '../../presale-gg/util'
import { capitalize } from '../../presale-gg/util'
import { useAccount } from '../../presale-gg/web3'
import toast from 'react-hot-toast'
import Modal from '../Modal'
import classes from './NowPaymentsModal.module.css'
import { ReactComponent as CheckCircleIcon } from '../../assects/icons/check-circle.svg'
import { ReactComponent as ClockIcon } from '../../assects/icons/clock.svg'
import { ReactComponent as ErrorIcon } from '../../assects/icons/error.svg'
import { useEffect, useMemo, useRef, useState } from 'react'

const EXPIRES_IN_MS = 60 * 60 * 1000

/**
 * @typedef {import("../../presale-gg/api/api.types.d.ts").API.Transaction} Transaction
 * @param {Omit<import("../Modal/Modal").ModalProps, "title"> & {transaction: Transaction}} props 
 * @returns 
 */
const NowpaymentsModal = ({ transaction, ...others }) => {
  const [qrRef, setQrRef] = useState(null)
  const [status, setStatus] = useState('unpaid')
  const [completedTransaction, setCompletedTransaction] = useState(null)
  const accountData = useAccount()
  const [expiresInMs, setExpiresInMs] = useState(EXPIRES_IN_MS)
  const [createdAt, setCreatedAt] = useState(Date.now() - 1000)

  const timeStr = useMemo(() => {
    console.log("EXPIRES IN ", expiresInMs / 1000)
    const mins = Math.floor(expiresInMs / (60 * 1000))
    const secs = Math.floor((expiresInMs - mins * 60 * 1000) / 1000)
    return `${zeroPad(Math.floor(mins), 2)}:${zeroPad(Math.floor(secs), 2)}`
  }, [expiresInMs])

  useEffect(() => {
    if (!others.open) return
    const func = () => {
      const diff = Math.max(createdAt + EXPIRES_IN_MS - Date.now(), 0)
      if (diff === 0 && status === 'unpaid') setStatus('expired')
      setExpiresInMs(diff)
    }
    func()
    const interval = setInterval(func, 1000)
    return () => clearInterval(interval)
  }, [status, createdAt, others.open])

  useEffect(
    () => {
      setStatus('unpaid')
      setCreatedAt(Date.now() - 1000)
    },
    [transaction.payment_id]
  )

  useEffect(() => {
    if (!accountData.address || !others.open) return
    const abortController = new AbortController()
    waitForNextTransaction(accountData.address ?? '', createdAt, {
      signal: abortController.signal
    }).then((trx) => {
      refetchUserData().finally(() => {
        if (abortController.signal.aborted) return
        setStatus('paid')
        setCompletedTransaction(trx)
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          "event": "purchase",
          data: {
              ecommerce: {
                value: parseNum(transaction.price_amount),
                currency: 'USD',
                transaction_id: trx.id
              }
            }
        })
      })
    })
    return () => abortController.abort()
  }, [accountData.address, createdAt])

  useEffect(() => {
    if (!qrRef) return
    new QRCodeCanvas(transaction.pay_address).draw(qrRef)
  }, [transaction.pay_address, qrRef])

  const statusCols = {
    paid: '#269e3c',
    unpaid: '#fff',
    expired: '#f54545'
  }

  return (
    <Modal
      {...others}
      className={clsx(classes['transaction-modal'], classes[`status-${status.replace('_', '-')}`])}
      title="Transaction"
      style={{ '--status-col': statusCols[status] }}
    >
      <div className={classes['payment-status']}>
        <div className={classes['status-text-container']}>
          <div className={classes['status-label']}>
            {status === 'paid' && <CheckCircleIcon />}
            {status === 'unpaid' && <ClockIcon />}
            {status === 'expired' && <ErrorIcon />}
            {capitalize(status)}
          </div>
          {status === 'unpaid' && <p className={classes['status-time']}>Expires in {timeStr}</p>}
        </div>
        <div
          className={classes['status-bar']}
          style={{ '--frac': `${1 - expiresInMs / EXPIRES_IN_MS}` }}
        />
      </div>
      {status === 'unpaid' && (
        <>
          <div className={classes['payment-details']}>
            <canvas ref={setQrRef} className={classes['qr']} />
            <div className={classes['payment-values']}>
              <NumberValue
                value={transaction.pay_amount}
                label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
              />
              <NumberValue value={transaction.payment_id} label={`Payment ID`} />
            </div>
          </div>
          {transaction.payin_extra_id && (
            <>
              <NumberValue value={transaction.payin_extra_id} label="Destination Tag" />
              <p className={classes['hint-text']}>
                You <span className={classes['bold']}>must include</span> the destination tag in the
                transaction or you will not receive your tokens
              </p>
            </>
          )}
          <NumberValue value={transaction.pay_address} label={`Payment address`} />
          <p className={classes['hint-text']}>
            Pay <span className={classes['bold']}>{transaction.pay_amount}</span> of{' '}
            <span className={classes['bold']}>{transaction.pay_currency.toUpperCase()}</span> on
            the <span className={classes['bold']}>{transaction.network.toUpperCase()}</span>{' '}
            network
            {transaction.payin_extra_id ? (
              <>
                , with the destination tag of{' '}
                <span className={classes['bold']}>{transaction.payin_extra_id}</span>
              </>
            ) : (
              ''
            )}{' '}
            to the address above to confirm the payment.
          </p>
          <p className={classes['hint-text']}>
            The tokens will automatically be deposited upon received payment. Note that it can take
            between 10 minutes and 1 hour for transactions to go through.
          </p>
          <p className={classes['hint-text']}>Refresh the page to check your balance.</p>
        </>
      )}
      {status === 'expired' && (
        <>
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className={classes['hint-text']}>
            This transaction has expired, do not send any more tokens as they may be lost. To try
            again create a new transaction.
          </p>
        </>
      )}
      {status === 'paid' && (
        <>
          <NumberValue
            value={transaction.pay_amount}
            label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
          />
          <NumberValue
            value={completedTransaction()?.tokens_bought ?? '0'}
            label={`You Received ($DCARS)`}
            noCopy
          />
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className={classes['hint-text']}>
            This transaction has completed successfully, do not send any more tokens as they may be
            lost. To try again create a new transaction.
          </p>
        </>
      )}
    </Modal>
  )
}

export default NowpaymentsModal

/**
 * @param {object} props 
 * @param {string | number} props.value
 * @param {string} props.label
 * @param {boolean} [props.noCopy]
 */
export const NumberValue = (props) => {
  const copy = () => {
    try {
      navigator.clipboard.writeText(props.value.toString())
      toast('Copied text')
    } catch (_) {
      toast('Error copying text, copy manually')
    }
  }
  
  return (
    <div className={classes['number-value']}>
      <p className={classes["number-value-label"]}>{props.label}</p>
      <div
        style={{ '--padding-right': '0.375rem' }}
        className={classes["input-container"]}
      >
        <input
          className={classes["input"]}
          size={1} 
          readOnly
          value={props.value}
          onInput={(e) => (e.currentTarget.value = props.value.toString())}
        />
        {!props.noCopy && (
          <button onClick={copy} size="xs" color="white" className={classes["copy-button"]}>
            Copy
          </button>
        )}
      </div>
    </div>
  )
}
