import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css';
import Card from './Card';

export default function Marketplace() {
    const[user, setUser] = useState(null);
    return(
        <div className={styles.marketcontainer}>

            <h3 className={styles.h3}>MarketPlace</h3>

            <section className={styles.section}>

                <Card title="Nasser Al-Khelaïfi le gros zizi"
                      image="https://paris-supporters.fr/wp-content/uploads/2021/06/nasser-al-khelaifi-square.jpg"
                      desc="Nasser, le PDG de ton PDG préféré." price="900"/>

                <Card title="Juan Bernat"
                      image="https://cdn.vox-cdn.com/thumbor/piKtDoRyMv7Z__RzAq62gIPauaY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19278574/1174755203.jpg.jpg"
                      desc="Juanito, le goat des arrière gauche." price="650"/>

                <Card title="Marquinhos"
                      image="https://assets-fr.imgfoot.com/media/cache/1200x1200/marquinhos-61832e4ba1449.jpg"
                      desc="Nasser, le PDG de ton PDG préféré." price="900"/>

                <Card title="Nasser Al-Khelaïfi"
                      image="https://paris-supporters.fr/wp-content/uploads/2021/06/nasser-al-khelaifi-square.jpg"
                      desc="Nasser, le PDG de ton PDG préféré." price="900"/>

                <Card title="Nasser Al-Khelaïfi"
                      image="https://paris-supporters.fr/wp-content/uploads/2021/06/nasser-al-khelaifi-square.jpg"
                      desc="Nasser, le PDG de ton PDG préféré." price="900"/>

            </section>


        </div>
    )

}