import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Divider,
  Typography,
  Button,
  TextField,
  Grid,
  Alert,
} from "@mui/material";
import CustomDropdown from "../components/Dropdown";
import theme from "../utils/customTheme";
import BetDisplay from "../components/Table";

const Wrapper = styled.div`
  min-height: 30vh;
  background-color: ${(props) => props.theme.palette.bgColor};
  padding: 20px;
`;

const Blinker = styled.div`
  padding: 2px 10px;
  margin: 8px;
  background-color: ${(props) => props.theme.palette.blinkerBg};
  color: ${(props) => props.theme.palette.blinkerText};
  font-weight: bold;
  border-radius: 40px;
  max-width: fit-content;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const Timer = styled.div`
  background-color: ${(props) => props.theme.palette.primary.variant1};
  padding: 8px;
  display: flex;
  align-items: baseline;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const AnimatedAlert = styled(Alert)`
  position: fixed;
  top: 8em;
  right: 20px;
  animation: fade-in 0.5s;
  border: 2px solid #000;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Game() {
  const { gameId } = useParams();
  const gameData = useSelector((state) => state.gamesReducer);
  let currGame = gameData.find((i) => i.gameid === gameId);

  const { gameName, isLive, lockTimeInSeconds, gameTypes, activeBets } =
    currGame;

  const [timer, setTimer] = useState(lockTimeInSeconds);
  const [selectedGameType, setSelectedGameType] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedVal, setSelectedVal] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLive, number, amount]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    // Handle form submission logic
  };

  const handleClear = () => {
    setSelectedGameType("");
    setNumber("");
    setAmount(0);
  };

  const handleIncrement = (e, type) => {
    if (type === "odds") {
      setNumber((prevNumber) => Number(prevNumber) + 1);
    } else {
      setAmount((prevAmount) => Number(prevAmount) + selectedVal);
    }
  };

  const handleDecrement = (e, type) => {
    if (type === "odds") {
      setNumber((prevNumber) =>
        Number(prevNumber) - 1 < 0 ? 0 : Number(prevNumber) - 1
      );
    } else {
      setAmount((prevAmount) =>
        Number(prevAmount) - selectedVal < 0
          ? 0
          : Number(prevAmount) - selectedVal
      );
    }
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleSelectValue = (value) => {
    setSelectedVal(value);
  };

  const amountButtons = [100, 500, 1000, 2000, 2500, 5000, 7500, 10000, 15000];

  return (
    <>
      <Wrapper>
        {/**
         * Header Render
         */}
        <Header>
          <Typography
            sx={{ display: "flex", alignItems: "center", color: "#fff" }}
          >
            {gameName}
            {isLive && (
              <Blinker>
                <Typography variant="caption">Live</Typography>
              </Blinker>
            )}
          </Typography>
          {!timer && (
            <Timer>
              <Typography variant="caption">Time Limit Reached</Typography>
            </Timer>
          )}

          {timer ? (
            <Timer>
              <Typography>{String(hours).padStart(2, "0")}</Typography>
              <Typography sx={{ margin: "0px 4px" }}>:</Typography>
              <Typography>{String(minutes).padStart(2, "0")}</Typography>
              <Typography sx={{ margin: "0px 4px" }}>:</Typography>
              <Typography>{String(seconds).padStart(2, "0")}</Typography>
            </Timer>
          ) : (
            <></>
          )}
        </Header>
        <Divider sx={{ background: "#fff" }} />

        {/**
         * Game Place Logic Render
         */}
        <div style={{ marginTop: 10 }}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} xs={12} />
            <Grid item lg={6} md={6} xs={12}>
              <CustomDropdown
                label="Game Type"
                value={selectedGameType}
                options={gameTypes || []}
                onChange={(e) => setSelectedGameType(e.target.value)}
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <Button onClick={(e) => handleDecrement(e, "odds")}>-</Button>
                <TextField
                  sx={{ margin: "20px 0px", background: "#fff" }}
                  label="Number"
                  type="number"
                  fullWidth
                  value={number}
                  onChange={(e) =>
                    Number(e.target.value) && setNumber(e.target.value)
                  }
                />
                <Button onClick={(e) => handleIncrement(e, "odds")}>+</Button>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button onClick={handleDecrement}>-</Button>
                <TextField
                  sx={{ margin: "8px 0px", background: "#fff" }}
                  label="Amount"
                  type="number"
                  fullWidth
                  value={amount}
                  onChange={handleAmountChange}
                />
                <Button onClick={handleIncrement}>+</Button>
              </div>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                style={{ margin: "8px 0px" }}
              >
                {amountButtons.map((value) => (
                  <Grid item key={value}>
                    <Button
                      variant="outlined"
                      onClick={() => handleSelectValue(value)}
                      sx={{
                        background:
                          value === selectedVal
                            ? theme.palette.primary.main
                            : "transparent",
                        color: "#fff",
                      }}
                    >
                      {value}
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <Divider sx={{ background: "#fff", margin: "10px 0px" }} />
              <Grid container spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleClear}
                    sx={{ background: theme.palette.clear, color: "white" }}
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ background: theme.palette.submit, color: "white" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3} md={3} xs={12} />
          </Grid>
        </div>

        {/**
         * Bet display Logic Render
         */}
        <BetDisplay bets={activeBets} />
      </Wrapper>
      {showAlert && (
        <AnimatedAlert severity="success" onClose={() => setShowAlert(false)}>
          Success
        </AnimatedAlert>
      )}
    </>
  );
}

export default Game;
