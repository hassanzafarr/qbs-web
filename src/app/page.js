"use client"

import Image from "next/image";
import SAPprojectsNum from '../../components/SAPprojectsNum';
import WEBnAPPprojectsNum from '../../components/WEBnAPPprojectsNum';
import EnterpriseProjects from '../../components/EnterpriseProjects';
import TotalClients from '../../components/TotalClients';
import { useState } from 'react';


export default function Home() {

  const videoSource = '/bg_video.mp4';
  const [selectedCountry, setSelectedCountry] = useState("UAE");

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };


  const imageMapping = {
    "Pakistan": "PAK.png",
    "Saudi Arabia": "KSA.png",
    "UAE": "UAE.png",
    "Bahrain": "Bahrain.png",
    "Oxford": "Oxford.png",
    "Austin": "Austin.png"
  };


  return (

    <div className="home_page_container">


      <div className="home_banner">

        <div className="services_provided_container">

          <div className="services_provided_holder">
            <h1 className="services_provided_heading">WE PROVIDE <span className="services_provided">SAP</span> SOLUTIONS</h1>
          </div>

        </div>

        <div className="call_to_action_button_container">

          <div className="call_to_action_button_holder">

            <h3 className="call_to_action_button_text"><span className="elevate_text">Elevate</span> Your Business</h3>
            <Image className="rise_image" src="/rise_icon.png" alt="Rise icon" width={30} height={30} />

          </div>

        </div>
      </div>

      <div className="video_container">

        <video muted loop autoPlay>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      <div className="all_charts_container">
        <div className="all_charts_child_container">
          <EnterpriseProjects />
          <SAPprojectsNum />
          <WEBnAPPprojectsNum />
          <TotalClients />
        </div>
      </div>


      <div className="about_us_container">

        <div className="about_us_heading_container">
          <div className="about_us_heading_holder">
            <h1 className="about_us_heading">
              <span style={{ color: "#4DB35D" }}>Welcome to QBS CO</span> - Where Digital Excellence Meets Boundless Possibilities!
            </h1>
          </div>
        </div>

        <div className="about_us_content_container">


          <div className="about_us_content_holder">

            <div className="about_us_content">
              <p>
                <span className="since_S_style">Across 4 countries and 2 cities,</span> <span className="about_us_highlight"> we&apos;re spearheading global transformation</span>
              </p>
            </div>


            <div className="about_us_explore_button_container">
              <div className="about_us_circle">
                <button className="about_us_explore_button">
                  Unveil Our Tale
                  <Image className="about_us_explore_button_img" alt="about-us-explore-button-icon" src={"/up-right-arrow.png"} width={20} height={20} />
                </button>
              </div>
            </div>


            <div className="about_us_mvo_container">
              <div className="about_us_vision_holder">
                <h1 className="about_us_mvo_all_h_tags">Vision</h1>
                <p className="about_us_mvo_all_p_tags">Transforming lives with cutting-edge digital innovations.</p>
              </div>
              <div className="about_us_mission_holder">
                <h1 className="about_us_mvo_all_h_tags">Mission</h1>
                <p className="about_us_mvo_all_p_tags">Empowering enterprises through superior digital solutions.</p>
              </div>
              <div className="about_us_objective_holder">
                <h1 className="about_us_mvo_all_h_tags">Objective</h1>
                <p className="about_us_mvo_all_p_tags">Tailored success: enhancing user experience, security, and privacy.</p>
              </div>
            </div>
          </div>


          <div className="about_us_countries_holder">
            <div className="about_us_countries_circle">
              <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                <title>Circular Text Path</title>
                <defs>
                  <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
                </defs>
                <g className="textcircle">
                  <text textLength="1140">
                    <textPath xlinkHref="#textcircle" aria-label="CSS & SVG are awesome" textLength="940">
                      <tspan onClick={() => handleCountryClick("Pakistan")} className={`country1 ${selectedCountry === "Pakistan" ? "active" : ""}`}>Pakistan</tspan>
                      <tspan className="country">●</tspan>
                      <tspan onClick={() => handleCountryClick("Saudi Arabia")} className={`country2 ${selectedCountry === "Saudi Arabia" ? "active" : ""}`}>Saudi Arabia</tspan>
                      <tspan className="country">●</tspan>
                      <tspan onClick={() => handleCountryClick("UAE")} className={`country3 ${selectedCountry === "UAE" ? "active" : ""}`}>UAE</tspan>
                      <tspan className="country">●</tspan>
                      <tspan onClick={() => handleCountryClick("Bahrain")} className={`country4 ${selectedCountry === "Bahrain" ? "active" : ""}`}>Bahrain</tspan>
                      <tspan className="country">●</tspan>
                      <tspan onClick={() => handleCountryClick("Oxford")} className={`country5 ${selectedCountry === "Oxford" ? "active" : ""}`}>Oxford</tspan>
                      <tspan className="country">●</tspan>
                      <tspan onClick={() => handleCountryClick("Austin")} className={`country6 ${selectedCountry === "Austin" ? "active" : ""}`}>Austin</tspan>
                      <tspan className="country">●</tspan>
                    </textPath>
                  </text>
                </g>

                <image
                  href={`/${imageMapping[selectedCountry]}`}
                  width="250"
                  height="250"
                  x="125"
                  y="125"
                  clipPath="url(#textcircle)"
                />
              </svg>
            </div>
          </div>



        </div>

      </div>



      {/* <div className="services_container">

        <div className="services_holder">

          <div className="services_heading_holder">
            <h1 className="about_us_heading">
              <span style={{ color: "#4DB35D" }}>Elevating Your Digital Presence</span> - with Endless Services!
            </h1>
          </div>

          <div className="services_cards_holder">
              <div className="services_card">
                  <div className="services_card_detail_section">
                    
                      <div className="services_card_punch_line_holder">
                          <h2 className="services_card_punch_line">Streamlining Advancements Proficiently — with SAP</h2>
                      </div>
                      
                      <div className="services_card_detail_holder">
                          <p className="services_card_detail">At our company, we offer unparalleled SAP services designed to transform your business operations. With our expertise in SAP implementation, customization, and support, we empower organizations to optimize processes, enhance efficiency, and unlock their full potential.</p>
                      </div>
                  </div>  

                  <div className="services_card_call_to_action_section">
                     
                     <div className="services_card_call_to_action_image_and_text_holder">
                        <div className="">

                        </div>

                     </div>


                  </div>

              </div>

          </div>



        </div>

      </div> */}


    </div>

  );
}



// =============================   DUMP MOUSE MOTION DETECTION CODE  =============================

{/* <div
      className="container"
      onMouseMove={handleMouseMove}
    >

      <div
        className="background"
        style={{
          backgroundPosition: `${offsetX}% ${offsetY}%`
        }}
      >

      </div>
</div> */}


// const [offsetX, setOffsetX] = useState(0);
// const [offsetY, setOffsetY] = useState(0);

// const handleMouseMove = (event) => {
//   const container = event.currentTarget;
//   const containerWidth = container.offsetWidth;
//   const containerHeight = container.offsetHeight;
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   const percentX = (mouseX / containerWidth) * 100;
//   const percentY = (mouseY / containerHeight) * 100;
//   const newOffsetX = (percentX - 50) * 2;
//   const newOffsetY = (percentY - 50) * 2;
//   setOffsetX(newOffsetX);
//   setOffsetY(newOffsetY);
// };





