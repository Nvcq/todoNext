import React from "react";
import Image from "next/image";
import styles from '../styles/Card.module.css';

export default function Card(props) {
    return(
        <section>
            <div className={styles.cardcontainer}>
                <img
                    width='100%'
                    src={props.image} alt=""/>
                <p className={styles.title}>{props.title}</p>
                <hr className={styles.hr} />
                <p className={styles.desc}>{props.desc}</p>
                <h2 className={styles.price}>{props.price} €</h2>
                <button className={styles.buy}>💶</button>
            </div>
        </section>
    )}