import React from "react";
import styles from './Subtitle.module.css'

const Subtitle = ({sub}) => {
    return(
        <div className={styles.container}>
            <div className={styles.ret}></div>
            <h3 className={styles.fundo}>{sub}</h3>
        </div>
    )
}

export default Subtitle