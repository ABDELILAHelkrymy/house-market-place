import { useState } from "react"
import { Link } from "react-router-dom"
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { Toast, toast } from "react-toastify"
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg"

export const ArrowRightIconComponent = () => (
  <img src={ArrowRightIcon} alt="" />
);

const FrogotPassword = () => {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)
  

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not Send reset email')
    }
  }
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input 
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange} 
          />
          <Link className="forgotPasswordLink" to='/sign-in'>Sign In</Link>
    
          <div className="signInBar">
              <p className="signInText">Send Rest Link</p>
              <button className="signInButton">
                <ArrowRightIconComponent />
              </button>
            </div>
        </form>
      </main>
    </div>
  )
}

export default FrogotPassword
