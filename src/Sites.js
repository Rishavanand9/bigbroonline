import React from "react";
import "./App.css"; // Assuming you have a Body.css file for styling
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import casino from './assets/casino.png'
import board from './assets/board.png'
import cricket from './assets/cricket.png'
import football from './assets/football.png'
import hr from './assets/hr.png'

const sites = [
  {
    url: "https://www.bigbroexch.com/login",
    imgUrl:
      "https://dzm0kbaskt4pv.cloudfront.net/v12/static/themes/bigbroexch.com/front/logo.png",
  },
  {
    url: "https://my99exch.com/login",
    imgUrl: "https://my99exch.com/assets/img/my99exch/logo.png",
  },
  {
    url: "https://mytiger247.com/login",
    imgUrl: "https://mytiger247.com/mytiger247.com/images/logo-text.png",
  },
  {
    url: "https://mylaser247.com/#/home",
    imgUrl: "https://mylaser247.com/assets/img/mylaser247/logo.gif",
  },
  {
    url: "https://www.bigbro777.com/",
    imgUrl: "https://sitethemedata.com/sitethemes/bigbro777.com/front/logo.png",
  },
];

const games = [
  {
    url: "https://www.bigbroexch.com/login",
    imgUrl: casino,
  },
  {
    url: "https://my99exch.com/login",
    imgUrl: board,
  },
  {
    url: "https://mytiger247.com/login",
    imgUrl: cricket,
  },
  {
    url: "https://mylaser247.com/#/home",
    imgUrl: football,
  },
  {
    url: "https://www.bigbro777.com/",
    imgUrl: hr,
  },
];

const Sites = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageSize = isMobile ? 200 : 300; // Adjust the sizes as needed

  const handleSiteClick = (e, url) => {
    window.open(url);
  };

  return (
    <>
      <div className="body-content">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? 20 : 45,
            color: "white",
            textShadow: '0px 0px 8px #FFFFFF',
          }}
        >
          VARIOUS PLATFORMS TO TEST YOUR LUCK WITH, SO GO AHEAD & WIN BIG
        </Typography>
        <div className="siteContainer">
          {sites.map((item, index) => (
            <div
            className={'siteItem'}
              onClick={(e) => handleSiteClick(e, item?.url)}
            >
              <img
                key={index}
                src={item.imgUrl}
                alt={`site`}
                style={{
                  width: `${imageSize}px`,
                  maxHeight: 111,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="body-content">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? 20 : 45,
            color: "white",
            textShadow: '0px 0px 8px #FFFFFF',
          }}
        >
          THE FIRST CHOICE OF GAMER'S LIKE YOU
        </Typography>
        <div className="gameContainer">
          {games.map((item, index) => (
           <div className="gameItem">
              <img
                key={index}
                src={item.imgUrl}
                alt={`site`}
                style={{
                  width: `${imageSize}px`,
                  height: 'auto',
                  borderRadius: '10em',
                }}
              />
         </div>
          ))}
        </div>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? 20 : 45,
            color: "white",
            textShadow: '0px 0px 8px #FFFFFF',
          }}
          margin={2}
        >
          YOUR TICKET TO GAMING WORLD OF BIG BRO ONLINE
        </Typography>
        <Button className="WhatsappButton">
          <WhatsAppIcon
            fontSize={isMobile ? "default" : "large"}
            sx={{ color: "#fff", fontSize: 40 }}
          />

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: isMobile ? 20 : 45,
              color: "white",
              marginLeft: 2,
            }}
          >
            +91-8970160000
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Sites;
