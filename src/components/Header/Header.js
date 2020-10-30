import { StylesProvider } from '@material-ui/core'
import React from 'react'
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.container}>
            <h2>COVID-19 Tracker by Muhammad Nasir</h2>
        </div>
    )
}
