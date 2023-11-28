import React from "react";
import styles from "./style.module.css"
const Home = () => {
    return(
        <div className={styles.text}>
            React Hooks
            Хуки позволяют использовать состояние и другие возможности React без написания классов.

            Построение пользовательских хуков позволяет помещать логику компонента в повторно используемые функции.
        </div>
    )
}
export default  Home;