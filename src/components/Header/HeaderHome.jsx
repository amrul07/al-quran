import { Box, Typography } from "@mui/material";
import LogoHeader from "../../assets/logo-header.png";
// import Favorite from "../CardFav";


const HeaderHome = () => {
  return (
    <Box
      py={4}
      sx={{
        backgroundColor: "#dfffe0",
      }}
    >
      <img
        style={{
          backgroundColor: "#43a047",
          border: "5px solid #ffc107",
          borderRadius: "50%",
        }}
        src={LogoHeader}
        alt=""
        width={150}
        height={150}
      />
      <Typography fontStyle="italic"  my={2} variant="h3" fontWeight="400" >
        Al-Qur'an Online
      </Typography>
      <Typography fontStyle="italic" >Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah.</Typography>


      {/* <Favorite /> */}
    </Box>
  );
};

export default HeaderHome;
