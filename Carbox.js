import React from "react";
import { Link } from "react-router-dom";
import FakeData from "../../FakeData/FakeData";
import "./Carbox.css";

const Carbox = () => {
  const carData = FakeData;

  return (
    <section className="carbox-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="info-text pb-5">
            <h2>Choose The Car That Fits Best For You</h2>
            <p>
              We have varitey of cars at our place . Choose the best suitable
              for you .
            </p>
          </div>
          </div>
        </div>
        <div className="row">
          {carData.map((data) => {
            return (
              <div className="col-md-6 col-lg-4">
                <div className="car-box">
                  <div class="card card-box-inner">
                    <img src={data.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{data.name}</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="extra-info">
                        <span className="car-model">Car Model </span>
                      </div>
                      <div className="card-bottom">
                        <span class="car-price">Price : $ {data.Price}</span>
                        <Link to={`/order/${data.id}`}>
                        <button className="btn btn-primary">
                          Ask For Rent
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carbox;
