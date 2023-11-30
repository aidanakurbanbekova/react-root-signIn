import React, {useState} from "react";
import styles from "./style.module.scss"

const Home = () => {
    const [theme,setTheme] = useState('light')
    return (
        <div className={styles.text}>
            <p>
                <h1>React Hooks</h1>
                React Hooks
                Хуки позволяют использовать состояние и другие возможности React без написания классов.
                Построение пользовательских хуков позволяет помещать логику компонента в повторно используемые функции.
            </p>
        </div>
    )
}
export default Home;