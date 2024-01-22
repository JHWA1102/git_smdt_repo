import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import './loginCred.css'

const Signup = () => {
  return (
    <div>
      <Header />
      <form className="loginCredForm">
        <h2>Sign Up</h2>
        <section className="inputSection">
          <div className="inputContainer">
            <label>Username:</label>
            <input></input>
          </div>
          <div className="inputContainer">
            <label>Password:</label>
            <input></input>
          </div>
          <button>SUBMIT</button>
          <div className="options">
            <Link to="/">Log In</Link>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Signup
