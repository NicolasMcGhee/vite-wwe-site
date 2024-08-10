import React from "react";
//import "./StatCard.css";
import styles from './StatCard.module.css'
//styles.AustinCard
//stats
//desc
export default function StatCard({wrestlerName}) {
  return (
    <div className={styles.flipCard}>
      <h1 className={styles.cardName}>{wrestlerName}</h1>
      <section className={`${styles.flipCard_Inner} ${styles.AustinCard}`}>
        {/* Frontside of Card */}
        <div className={`${styles.flipCard_Front} ${styles.stats}`}>
          <h2>Stats</h2>
          <h3>Height: 6 ft 10 in (2.08 m)</h3>
          <h3>Weight: 299 lbs (136 kg)</h3>
          <h3>Years Active: 30 Years</h3>
          <h3>Debut: June 26, 1984</h3>
          <h3>Retired: November 22, 2020</h3>
          <h3>
            Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Possimus fuga non, quas error sint earum!
          </h3>
        </div>
        {/* Backside Of Card */}
        <div className={`${styles.flipCard_Back} ${styles.desc}`}>
          <h4>Summary</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum non
            hic cupiditate nulla, ex sequi exercitationem nesciunt neque nisi
            eveniet accusantium beatae dolorum reprehenderit soluta doloremque
            accusamus sint et aperiam.
          </p>
          <p>
            In dicta nihil quidem quod esse, quas a amet nam provident modi hic
            quam unde voluptatem atque expedita. Dolore ab soluta, ad facilis
            accusantium veritatis quis ullam sunt perferendis delectus.
          </p>
        </div>
      </section>
    </div>
  );
}
