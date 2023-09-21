// import React from "react";

// const Home = () => {
//   return (
//     <>
//       <div className="hero border-1 pb-3">
//         <div className="card bg-dark text-white border-0 mx-3">
//           <img
//             className="card-img img-fluid"
//             src="./assets/main.png.jpg"
//             alt="Card"
//             height={500} 
//             />
//           <div className="card-img-overlay d-flex align-items-center">
//             <div className="container">
//               <h5 className="card-title fs-1 text fw-lighter">New Semester books and accessories Arrivals</h5>
//               <p className="card-text fs-5 d-none d-sm-block ">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Navbar.css';
export default function App() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
  
      {
        url: "https://wallpaperaccess.com/full/1209411.jpg",
        caption:"BOOKS",
      },
      {
        url: "https://img.freepik.com/free-photo/architecture-concept-with-blank-page-clipboard_23-2147813103.jpg?t=st=1694374352~exp=1694374952~hmac=9b4fd69041421a4abcd2cee249223c9450e439e706910d6178174d60d6e0a9b2",
        caption:"ENGINEERING ACCESSORIES",
        },
      {
        url: "https://img.freepik.com/free-photo/close-up-still-life-hard-exams_23-2149314038.jpg?w=826&t=st=1694374644~exp=1694375244~hmac=5a829b1c9ead05257c74a9ef4f23ba7d043a20a2cc9b2b2ffe5f1ffeb6737ba5",
        caption:"R.T.U. PAPERS",
        },
      {                               
        url: "https://img.freepik.com/free-photo/front-view-male-doctor-protective-suit-with-mask-just-sitting-with-smile-white-space_140725-84391.jpg?w=826&t=st=1694374696~exp=1694375296~hmac=d20da11a208f5cb93e1806f5a1851f7fb76c57af5dfb4c73ec2eb2186d92c955",
        caption:"UNIFORMS",
        },
    
  ];
  return (
      <div>
      
        <SimpleImageSlider
            width={1485}
            height={680}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            // onClickBullets={} 
            onStartSlide = {(index, length) => {
              setImageNum(index);
              
            }}
              autoPlayDelay = {2.5}
              
        />
      
        <div className="caption-container">
  <p className="caption-text">
    {sliderImages[imageNum - 1]?.caption}
  </p>
</div>
        <div className="card-img-overlay d-flex align-items-center">
          <h5 className="card-title1 fs-1 text fw-lighter">New Season Arrivals</h5>
        <div className="container">
          {/* <p className="card-text1 fs-5 d-none d-sm-block">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p> */}
        </div>
      </div>
      </div>
  );
}
