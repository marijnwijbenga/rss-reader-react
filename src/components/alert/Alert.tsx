import {ReactNode} from "react";
import clsx from "clsx";

import styles from './Alert.module.css';
function Alert({variant = 'info', children}: {variant: 'info' | 'error' | 'warning', children: ReactNode}) {
    return(
        <div className={clsx(styles.alert, styles[`alert--${variant}`])}>
            {children}
        </div>
    )
}

export default Alert;