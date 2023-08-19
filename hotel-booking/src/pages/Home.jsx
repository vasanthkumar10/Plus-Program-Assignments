import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { Container, Grid, Pagination } from "@mui/material";
import { HotelCard } from "../components/HotelCard";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [page, setpage] = useState(1);
  const hotelsLimitPerPage = 6;

  const fetchHotels = async () => {
    const { data } = await getHotels();
    // console.log(data);
    setHotels(data);
  };

  const { isLoading } = useQuery("hotels", fetchHotels);
  const startIndex = (page - 1) * hotelsLimitPerPage;
  const endIndex = page * hotelsLimitPerPage - 1;
  const paginatedHotels = hotels.slice(startIndex, endIndex + 1);
  const totalHotels = hotels.length;
  const totalPages = Math.ceil(totalHotels / hotelsLimitPerPage);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {paginatedHotels.map((hotel) => (
            <Grid key={hotel.id} item xs={12} sm={6} md={4} lg={4}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={totalPages}
          page={page}
          sx={{ display: "flex", justifyContent: "flex-end" }}
          onChange={(e, value) => setpage(value)}
        />
      </Container>
    </>
  );
}

export default Home;
