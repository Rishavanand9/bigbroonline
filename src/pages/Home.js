import React from "react";
import { useSelector } from "react-redux";
import ResponsiveCard from "../components/Card";
import { Grid } from "@mui/material";
import { useNavigate  } from 'react-router-dom';

const Home = () => {
  const navigate  = useNavigate ();
  const data = useSelector((state) => state.gamesReducer); // Assuming 'data' is a key in your Redux state

  return (
    <Grid container spacing={2}>
      {data.map((i) => {
        return (
          <Grid item md={3} xs={12} lg={3}>
            <ResponsiveCard
              title={i.gameName}
              subtitle={"-XX-"}
              isLive={i.isLive}
              handleNavigate={() => navigate(`/game/${i.gameid}`)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
