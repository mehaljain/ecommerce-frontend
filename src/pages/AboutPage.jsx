import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
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
                <h5 className="card-title1 text-center">Books</h5>
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
                <h5 className="card-title1 text-center">RTU paper</h5>
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
                <h5 className="card-title1 text-center">Instruments</h5>
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
                <h5 className="card-title1 text-center">Others</h5>
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
