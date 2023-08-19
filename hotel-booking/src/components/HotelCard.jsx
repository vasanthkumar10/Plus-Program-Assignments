import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function HotelCard({ hotel }) {
  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardMedia component="img" height="300" image={hotel.thumbnail} />
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>{hotel.address}</Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          ${hotel.pricePerNight} night
        </Typography>
      </CardContent>
    </Card>
  );
}
