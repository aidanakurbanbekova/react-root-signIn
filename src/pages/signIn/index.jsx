import React from "react";
import styles from './style.module.css'

const SignIn = () => {
    return (
        <div className={styles.signIn}>
            <form>
                <div className={styles.container}>
                    <input type="email"
                           placeholder="email"/>
                    <input type="password"
                           placeholder="password"/>
                    <button>Login</button>
                </div>
            </form>
        </div>


    )
}
export default SignIn;