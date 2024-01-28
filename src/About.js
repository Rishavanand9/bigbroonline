import React from "react";
import "./App.css";
import { Divider, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import img10 from "./assets/10.png";

const gridContent = [
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic1-150x150.png",
    text1: "ONLINE ID",
    text2:
      "Get your online cricket/sports id with us and instantly start Playing. Message us to get your ID now.",
  },
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic2-150x150.png",
    text1: "24 /7 SUPPORT",
    text2:
      "We have a team of experts who available 24/7 to guide you through our whatsApp chats.",
  },
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic3-150x150.png",
    text1: "100% TRUSTED SERVICE",
    text2:
      "Transparency and accuracy is the most important for us and for our customer. We deal in the most transparent way.",
  },
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic4-150x150.png",
    text1: "INSTANT WITHDRAWAL & REFILL",
    text2:
      "The Kalyan Book provides instant service of id withdrawal & refilling with min to max amount.",
  },
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic5-150x150.png",
    text1: "AVAILABLE PAYMENT METHODS",
    text2:
      "Multiple methods are available for Paymetns. Customer can pay via Net Banking, Bank Transfer, Paytm, Google pay, IMPS, PhonePe etc.",
  },
  {
    img: "https://kalyanbook.com/wp-content/uploads/2023/01/ic6-150x150.png",
    text1: "HIGH SECURITY",
    text2:
      "Security is our Top priority and hence your data and imformation is safe and is not shared at any Point!",
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageSize = isMobile ? 90 : 150; // Adjust the sizes as needed

  return (
    <div className="body-content">
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 25 : 60,
          color: "white",
          textShadow: "0px 0px 8px #FFFFFF",
        }}
        margin={2}
      >
        Why BIG BRO BOOK ?
      </Typography>
      <div className={isMobile ? "aboutContainer1m" : "aboutContainer1"}>
        {gridContent?.map((item) => (
          <div className="abt">
            <img
              alt="someTExt"
              src={item.img}
              style={{
                width: `${imageSize}px`,
                height: "auto",
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? 20 : 40,
                textShadow: "0px 0px 8px #FFFFFF",
              }}
            >
              {item.text1}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? 10 : 25,
                color: "#fff",
              }}
            >
              {item.text2}
            </Typography>
          </div>
        ))}
      </div>
      <Divider />

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 15 : 30,
          color: "#FFFFFF",
          padding: 6,
          background: "#00000096",
        }}
      >
        THE ONLY ONLINE BOOK TRUSTED BY THE ACROSS THE WORLD
      </Typography>
      <Divider />

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 10 : 20,
          padding: 6,
          color: "#FFFFFF",
          background: "#000",
        }}
      >
        FOR THOSE WHO ARE HUNGRY FOR WINNING, SO HOP ON THIS JOURNEY AND FEED
        YOUR HUNGER. Our Book, Kalyan Book offers the most user-friendly gaming
        platforms, we only provide those platforms which are tried, tested &
        most importantly trusted by the legends of online gaming world. Not only
        that our key is to help you win & that is why we offer INSTANT
        WITHDRAWAL SERVICE IN UNDER 5 MINUTES{" "}
      </Typography>
      <Divider />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 15 : 30,
          color: "#FFFFFF",
          padding: 1,
          background: "#fff",
        }}
      >
        <img
          alt="someTExt"
          src={img10}
          style={{
            width: isMobile ? 200 : 600,
            height: "auto",
          }}
        />
      </Typography>
      <Divider />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 15 : 30,
          color: "#FFFFFF",
          padding: 6,
          background: "#00000096",
        }}
      >
        WE TAKE PRIDE IN TAKING AMAZING CARE OF OUR GAMER'S
      </Typography>
      <Divider />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 10 : 20,
          padding: 6,
          color: "#FFFFFF",
          background: "#000",
        }}
      >
        Our support team is always on standby for taking care of each & one of
        our players, just drop a message on below number to get the
        best-in-class support 24*7 SUPPORT NUMBER ALWAYS ON STANDBY
      </Typography>
    </div>
  );
};

export default About;
