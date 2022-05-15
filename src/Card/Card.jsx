import React from "react";
import thankYou from "../images/illustration-thank-you.svg";
import rating from "../images/icon-star.svg";
import { useState } from "react";
import { CardContainer } from "./CardContainerStyeld";

function Card({ heading, text, ratings }) {
  const [selected, setSelected] = useState(false);
  const [ratingCount, setRatingCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  const toggleSelect = (rating, e) => {
    if (selected === true) {
      setSelected(false);
      document.querySelector(".selected").classList.remove("selected");
      e.target.classList.add("selected");
      setRatingCount(rating);
      setSelected(true);
    }
    if (selected === false) {
      setSelected(true);
      e.target.classList.add("selected");
      setRatingCount(rating);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (ratingCount === 0) {
      console.log("select ratings");
    } else {
      setSubmit(true);
    }
  };
  return !submit ? (
    <CardContainer>
      <div className="rating star">
        <img src={rating} alt="star" />
      </div>
      <div className="CardHeading">
        <h2> {heading}</h2>
      </div>
      <p> {text}</p>
      <div className="ratings">
        {ratings.map((rating) => {
          return (
            <div
              className={"rating"}
              key={"value" + rating}
              onClick={(e) => toggleSelect(rating, e)}
            >
              <span>{rating}</span>
            </div>
          );
        })}
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </CardContainer>
  ) : (
    <CardContainer>
      <div className="hero-image">
        <img src={thankYou} alt="Thank You" />
      </div>
      <div className="ratingStar">
        <span> You selected {ratingCount} out of 5</span>
      </div>
      <h1>Thank you!</h1>
      <div className="appreciation">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </CardContainer>
  );
}

export default Card;
