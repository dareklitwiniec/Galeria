import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';

const Modul = () => {
    return (
        <div>
            <div className={styles.grid}>

                <Link href=" /plants">
                    <div className="ramka plants">
                        <h2 className='title'>
                            Plants
                        </h2>
                    </div>
                </Link>
                <Link href="/birds">
                    <div className="ramka birds">
                        <h2 className='title'>
                            Birds
                        </h2>
                    </div>
                </Link>
                <Link href="/stories">
                    <div className="ramka fairy">
                        <h2 className='title'>
                            Stories
                        </h2>
                    </div>
                </Link>
                <Link href="/people">
                    <div className="ramka people">
                        <h2 className='title'>
                            People
                        </h2>
                    </div>
                </Link>







            </div>

        </div>
    )
}

export default Modul