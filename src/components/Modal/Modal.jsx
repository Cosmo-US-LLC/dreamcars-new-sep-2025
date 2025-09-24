import clsx from 'clsx'
import classes from './Modal.module.css'
import { ReactComponent as CloseIcon } from '../../assects/icons/close.svg'
import { createPortal } from 'react-dom'

/**
 * @typedef {object} BaseModalPros
 * @property {boolean} BaseModalProps.open
 * @property {() => void} BaseModalProps.onClose
 * @property {title} [BaseModalProps.title]
 * 
 * @typedef {import("react/jsx-runtime").JSX.HTMLAttributes<HTMLDivElement> & BaseModalProps} ModalProps
 */

/** @param {ModalProps} props */
const Modal = ({ open, onClose, title, ...others }) => {

  return createPortal(
    <div
      className={clsx(classes['modal-container'], { [classes["open"]]: open })}
    >
      <div className={classes['modal-backdrop']} onClick={onClose} />
      <div {...others} className={clsx(classes['modal'], others.classNameName)}>
        <button aria-label="Close modal" onClick={onClose} className={classes['close-button']}>
          <CloseIcon />
        </button>
        {title && (
          <p className={classes['title']}>
            {title}
          </p>
        )}
        {others.children}
      </div>
    </div>,
    document.getElementById("modals")
  )
}

export default Modal
