import React from "react";

export default function Movie({ movie }) {
  const {
    movieName,
    description,
    actors,
    generes,
    ratings,
    reviews,
    calculatedRating,
  } = movie;
  return (
    <div>
      <div>{movieName}</div>
      <div>{description}</div>
      <div>{calculatedRating}</div>
      {/* <div>{movieName}</div>
      <div>{movieName}</div>
      <div>{movieName}</div> */}
    </div>
  );
}
