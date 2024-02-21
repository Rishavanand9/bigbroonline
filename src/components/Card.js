import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../utils/customTheme";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: relative;
  box-shadow: none;
  border: 1px solid #659dbd;
  margin: 0px 8px;
  @media (min-width: ${theme.breakpoints.values.md}px) {
    max-width: 500px;
  }
`;

const Blinker = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 10px;
  margin: 8px;
  background-color: ${(props) => props.theme.palette.blinkerBg};
  color: ${(props) => props.theme.palette.blinkerText};
  font-weight: bold;
  border-radius: 40px;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const ResponsiveCard = ({
  title,
  subtitle,
  isLive,
  background1 = "#daad86",
  background2 = "#fff",
  handleNavigate,
}) => {

  return (
    <StyledCard
      style={{
        background: `linear-gradient(to right, ${background1}, ${background2})`,
      }}
    >
      {isLive && (
        <Blinker>
          <Typography variant="caption">Live</Typography>
        </Blinker>
      )}
      <CardContent>
        <Typography variant={"h6"} bold align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center">
          {subtitle}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        sx={{ background: theme.palette.buttonColor, boxShadow: "none" }}
        onClick={handleNavigate}
        disabled={!isLive}
      >
        Play Now
      </Button>
    </StyledCard>
  );
};

export default ResponsiveCard;
