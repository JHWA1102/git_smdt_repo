import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./loginCred.css";


const Login = () =>{

    return (
        <div>
            <Header/>
            <form className="loginCredForm">
                <h2>
                    LOG IN
                </h2>
                <section className="inputSection">
                    <div className="inputContainer">
                        <label>
                            Username: 
                        </label>
                        <input></input>
                    </div>
                    <div className="inputContainer">
                        <label>
                            Password: 
                        </label>
                        <input></input>
                    </div>
                    <button>SUBMIT</button>
                </section>
            </form>
        </div>
    )
};

export default Login;