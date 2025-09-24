import clsx from "clsx"
import { resetUserBonusCode, userApplyBonusCode, userResetReferralCode, userUpdateReferralCode, useUserState } from "../presale-gg/stores/user.store"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"
import { api } from "../presale-gg/api"

let scrolled = false

/**
 * @param {object} props 
 * @param {string} props.label
 * @param {string} props.appliedText
 * @param {(code: string) => Promise<void>} props.onApply
 * @param {() => void} props.onChange
 * @param {string} props.urlKey
 */
export const CodeInput = ({ label, appliedText, onApply, onChange, urlKey, ...others }) => {
  const { t } = useTranslation()
  const [code, setCode] = useState('')
  const [hasUrlCode, setHasUrlCode] = useState(false)
  const [loading, setLoading] = useState(false)

  const apply = async () => {
    if (!code) return toast.error("Invalid code")
    if (loading) return
    setLoading(true)
    try {
      await onApply(code)
      toast.success("Successfully applied code")
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error applying code"))
    }
    setLoading(false)
  }

  let ref = useRef()

  useEffect(() => {
    const urlCode = new URL(window.location.href).searchParams.get(urlKey)
    if (!urlCode) return
    setCode(urlCode)
    setHasUrlCode(true)
    if (scrolled) return
    ref.current?.scrollIntoView({block: "center", behaviour: "smooth"})
  }, [])


  return (
    <div {...others} className={clsx("flex relative z-[1]", others.classNameName)} ref={ref}>
      <input
        type="text"
        className={clsx("h-[44px] w-[100%] px-2 outline-none rounded-l", {"text-[#269e3c] font-[500]": appliedText !== null})}
        value={appliedText ?? code}
        placeholder={label}
        onChange={(e) => {
            setCode(e.target.value)
        }}
        readOnly={appliedText !== null}
      />
      <button
        className={clsx("flex h-[44px] w-[80px] px-0 items-center text-white rounded-r space-y-3 bg-black", {"animate-pulse": hasUrlCode})}
        onClick={() => {
          if (appliedText === null) apply()
          else onChange()
        }} 
        style={{"animationIterationCount": "5"}}
      >
        <p className="text-[12px] text-whites font-[700] text-center">
          {appliedText === null ? t("ProductDetails.card-body-Bonus-code-apply") : "Change"}
        </p>
      </button>
    </div>
  )
}

export const BonusCodeInput = (others) => {
  const userData = useUserState()
  return (
    <CodeInput
      {...others}
      label="Bonus Code"
      appliedText={userData.appliedBonusCode ? `Applied bonus code (+${userData.appliedBonusCode}%)` : null}
      onApply={userApplyBonusCode}
      onChange={resetUserBonusCode}
      urlKey="bonus_code"
    />
  )
}

export const ReferralCodeInput = (others) => {
  const userData = useUserState()

  return (
    <CodeInput
      {...others}
      label="Referral Code"
      appliedText={userData.user?.referred_by ? "Applied referral code" : null}
      onApply={userUpdateReferralCode}
      onChange={userResetReferralCode}
      urlKey="referral_code"
    />
  )
}