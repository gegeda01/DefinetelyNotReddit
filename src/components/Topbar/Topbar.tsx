import React from 'react';
import styles from './Topbar.module.scss';

const Topbar: React.FC = () =>{
    return(
        
        <div className={styles.container}>
            <div className={styles['text-wrapper']}>
                <div className={styles.text}>
                    File 
                </div>
                <div className={styles.text}>
                    Edit
                </div>
                <div className={styles.text}>
                    Selection
                </div>
                <div className={styles.text}>
                    View
                </div>
                <div className={styles.text}>
                    Go
                </div>
                <div className={styles.text}>
                    Run
                </div>
                <div className={styles.text}>
                    Terminal
                </div>
                <div className={styles.text}>
                    Selection
                </div>
                <div className={styles.text}>
                    
                </div>
                <div className={styles.text}>
                    
                </div>
                <div className={styles.text}>
                    
                </div>
                <div className={styles.text}>
                    
                </div>
                <div className={styles.text}>
                (^･ｪ･^) DefinetelyNotReddit - Visual Studio Code
                </div>
            </div>
        </div>

    )
}

export default Topbar;