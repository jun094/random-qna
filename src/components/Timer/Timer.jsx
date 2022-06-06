import React from "react";
import cn from 'classnames';
import styles from "./Timer.module.scss";

export default function Timer(props) {
    return (
        <div className={styles.timer}>
            <span className={styles.digits}>
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className={styles.digits}>
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className={cn(styles.digits, styles.miliSec)}>
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div >
    );
}
