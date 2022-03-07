import { Card, CardContent, CardHeader, Typography } from "@mui/material";
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
    <Card>
      <CardHeader title={movieName}></CardHeader>
      <CardContent>
        <Typography>{description}</Typography>
        <Typography>{calculatedRating}</Typography>
      </CardContent>
    </Card>
  );
}
