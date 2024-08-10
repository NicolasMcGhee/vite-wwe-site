import React from "react";
import "./Information.module.css";
import Logo from "/Logos/WWE_Logo.jpg";

export default function Infomation() {
  return (
    <div>
      {/* Title */}
      <section className="title">
        <h1>Past, Present And Future</h1>
      </section>
      <section className="cards">
        {/* Cards Of Past And Present Of Head Guys */}
        <div className="card">
          <h1>The Founder</h1>
          <img src={Logo} alt="Placeholder Image Of Logo" />
          <div>
            <h2>Vince McMahon Sr.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus commodi neque rem enim dolor eum eos animi consequatur,
              blanditiis repellat molestiae id voluptatibus, illo, voluptate
              natus accusamus perferendis! Asperiores, inventore. Quas quos
              facere amet id! Molestiae similique beatae praesentium quibusdam
              mollitia, sit excepturi magni dicta, sint suscipit quod. Eius,
              libero.
            </p>
          </div>
        </div>
        <div className="card">
          <h1>Mr McMahon</h1>
          <img src={Logo} alt="Placeholder Image Of Logo" />
          <div>
            <h2>Vince McMahon Jr.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus commodi neque rem enim dolor eum eos animi consequatur,
              blanditiis repellat molestiae id voluptatibus, illo, voluptate
              natus accusamus perferendis! Asperiores, inventore. Quas quos
              facere amet id! Molestiae similique beatae praesentium quibusdam
              mollitia, sit excepturi magni dicta, sint suscipit quod. Eius,
              libero.
            </p>
          </div>
        </div>
        <div className="card">
          <h1>Triple H</h1>
          <img src={Logo} alt="Placeholder Image Of Logo" />
          <div>
            <h2>Paul Levesque</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus commodi neque rem enim dolor eum eos animi consequatur,
              blanditiis repellat molestiae id voluptatibus, illo, voluptate
              natus accusamus perferendis! Asperiores, inventore. Quas quos
              facere amet id! Molestiae similique beatae praesentium quibusdam
              mollitia, sit excepturi magni dicta, sint suscipit quod. Eius,
              libero.
            </p>
          </div>
        </div>
      </section>
      {/* Add Cards For Stone Cold: ???, The Rock: Blue, And The Undertaker: Purple */}
      <div className="flexCard-section">
        <h1 className="flexCard-title">
          A Look Back <br />
          At The Past
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          doloremque dolore aspernatur dicta sit culpa. Ab, debitis magnam
          itaque laboriosam odio deleniti odit cum porro molestiae inventore
          quis est sunt.
        </p>
      </div>
      <h1 className="title">Hover Over For More Information</h1>

      <section className="flexCards">
        {/* Stone Cold Steve Austin Card */}
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <div>
                <img
                  className="img"
                  src={Logo}
                  width={200}
                  alt="Picture Of Vince Senior"
                />
              </div>
              <div className="flipCard_Info">
                
                <h2>Name</h2>
                <h1>"Stone Cold" Steve Austin</h1>
                <h2>Nickname</h2>
                <p>The Texas Rattlesnake</p>
                <h2>Billed From</h2>
                <p>Victoria, Texas</p>
              </div>
              
            </div>
            <div className="flipCard_Back Austin">
              <h2>Stats</h2>
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
        
        {/* Dwayne The Rock Johnson Card */}
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <div>
                <img
                  className="img"
                  src={Logo}
                  width={200}
                  alt="Picture Of Vince Senior"
                />
              </div>
              <div>
                <h1>Dwayne "The Rock" Johnson</h1>
                <p>The Phenom</p>
                <p>Death Valley</p>
              </div>
            </div>
            <div className="flipCard_Back TheRock">
              <h2>Stats</h2>
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
        {/* The Undertaker Card */}
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <img
                className="img"
                src={Logo}
                width={200}
                alt="Picture Of Vince Senior"
              />
              <h1>The Undertaker</h1>
              <p>The Phenom</p>
              <p>Death Valley</p>
            </div>
            <div className="flipCard_Back TheUndertaker">
              <h2>Stats</h2>
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <img
                className="img"
                src={Logo}
                width={200}
                alt="Picture Of Vince Senior"
              />
              <h1>The Undertaker</h1>
              <p>The Phenom</p>
              <p>Death Valley</p>
            </div>
            <div className="flipCard_Back TheUndertaker">
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <img
                className="img"
                src={Logo}
                width={200}
                alt="Picture Of Vince Senior"
              />
              <h1>The Undertaker</h1>
              <p>The Phenom</p>
              <p>Death Valley</p>
            </div>
            <div className="flipCard_Back TheUndertaker">
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipCard_Inner">
            <div className="flipCard_Front">
              <img
                className="img"
                src={Logo}
                width={200}
                alt="Picture Of Vince Senior"
              />
              <h1>The Undertaker</h1>
              <p>The Phenom</p>
              <p>Death Valley</p>
            </div>
            <div className="flipCard_Back TheUndertaker">
              <h3>Height: 6 ft 10 in (2.08 m)</h3>
              <h3>Weight: 299 lbs (136 kg)</h3>
              <h3>Years Active: 30 Years</h3>
              <h3>Debut: June 26, 1984</h3>
              <h3>Retired: November 22, 2020</h3>
              <h3>
                Fun Fact: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Possimus fuga non, quas error sint earum!
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="Next">
        <div>
          <h1>NEXT SECTION</h1>
        </div>
      </section>
    </div>
  );
}
