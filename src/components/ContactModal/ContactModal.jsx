import { useState } from "react"
import Modal from "../Modal"
import classes from "./ContactModal.module.css"
import toast from "react-hot-toast"
import { api } from "../../presale-gg/api"
import { useAccount } from "wagmi"
import clsx from "clsx"

/** @param {Omit<import("../Modal").ModalProps, "title">} others */
const ContactModal = (others) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [loading, setLoading] = useState(false)
  const accountData = useAccount()

  const submit = async () => {
    if (loading) return
    if (!name) return toast.error("Name must be provided")
    if (!email) return toast.error("Email must be provided")
    if (!email.includes("@")) return toast.error("Email is invalid")
    setLoading(true)
    try {
      await api.postLeads({
        email,
        name,
        mobile: mobile ? mobile : undefined,
        wallet_address: accountData.address
      })
      toast.success("Successfully submitted details")
      others.onClose()
    } catch (err) {
      const msg = api.getApiErrorMessage(err, "Error submitting details")
      if (msg.toLowerCase() === "user details already exist") {
        toast(msg)
        others.onClose();
        return
      }
      toast.err(msg)
    }
    setLoading(false)
  }

  return (
    <Modal {...others} title="Stay in touch" className={classes["modal"]}>
      <p className={classes['input-label']}>Enter your details below to stay up to date with the latest Dreamcars news</p>
      <div className={classes["input-container"]}>
        <p className={classes['input-label']}>Name</p>
        <input value={name} onInput={(e) => setName(e.target.value)} placeholder="John Smith" />
      </div>
      <div className={classes["input-container"]}>
        <p className={classes['input-label']}>Email</p>
        <input value={email} onInput={(e) => setEmail(e.target.value)} placeholder="john.smith@gmail.com" />
      </div>
      <div className={classes["input-container"]}>
        <p className={classes['input-label']}>Mobile (optional)</p>
        <input value={mobile} onInput={(e) => setMobile(e.target.value)} placeholder="+1 (800) 555-0199" />
      </div>
      <button
        className={clsx('bgcolor hover:bg-[transparent] hover:border hover:border-[#FFD02F] font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[18px]', classes['button'])}
        onClick={submit}
        disabled={loading}
      >
        {loading ? "Submiting..." : "Submit"}
      </button>
    </Modal>
  )
}

export default ContactModal