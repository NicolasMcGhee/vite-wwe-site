import React from "react";
import "./BretHart.css";

export default function BretHart() {
  return (
    <div className="flipCard">
      {/* <h1 className="cardName">{wrestlerName}</h1> */}
      <section className="flipCard_Inner AustinCard">
        {/* Frontside of Card */}
        <div className="flipCard_Front stats">
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
        <div className="flipCard_Back desc">
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
