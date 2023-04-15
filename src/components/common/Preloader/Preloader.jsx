import React from "react";
import styles from './Preloader.module.css';
import loader from "@static/loader.svg";

const Preloader = (props) => {
    return (
        <div className={styles.container}>
            <img src={loader}/>
        </div>
    )
}



export default Preloader;