import React from "react";
import { Footer, Navbar } from "../components";
import "./Pages.css";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          your one-stop destination for all your engineering student essentials.
          We are passionate about simplifying the academic journey for
          engineering students, providing access to quality educational
          materials, and helping you excel in your studies.we understand the
          challenges that engineering students face. Our journey began when a
          group of engineering students came together to create a platform that
          could make the process of acquiring books, accessories, and uniforms
          more convenient and affordable. We have walked in your shoes, and we
          know what it's like to balance coursework, projects, and
          extracurricular activities.Our mission is simple: to empower
          engineering students with the tools and resources they need to succeed
          academically. We strive to offer a wide selection of textbooks,
          high-quality accessories, and comfortable uniforms at competitive
          prices, ensuring that no student is held back by financial constraints
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://m.media-amazon.com/images/I/516KtuwwjML._AC_UF350,350_QL50_.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">BOOKS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://management.ind.in/img/n/RTU-Old-Question-Papers-1.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">RTU PAPERS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://m.media-amazon.com/images/I/710gqZDa+LL._SX569_.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">ACCESSORIES</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src=" https://image.made-in-china.com/202f0j00LbNlkFAcNnoO/Work-Clothing-Men-Women-Work-Jacket-Car-Workshop-Air-Condition-Water-Electricity-Installation-Mechanical-Repairmen-Uniforms-Tops.webp"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">UNIFORMS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
