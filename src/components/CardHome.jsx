import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import "./CardHome.module.css";
// import "./CardHome.module.css";

const CardHome = (props) => {
  const navigate = useNavigate();
  return (
    // <Grid
    //   my={4}
    //   sm={12}
    //   md={6}
    //   lg={4}
    //   //   //   gap={2}
    //   //   display="flex"
    //   //   justifyContent="center"
    //   //   key={props.key}
    // >

    <Card
      onClick={() => navigate(`/surah/${props.nomor}`)}
      className="t"
      sx={{
        margin: "16px",
        display: "flex",
        padding: "16px",
        // width: {
        //   md: "300px",
        // },
        maxWidth: "90%",
        minWidth: "80%",
        alignItems: "center",
        cursor: "pointer",
        // minHeight: "300px"
      }}
      key={props.key}
    >
      <div>{props.nomor}.</div>
      <div
        className="div-dua"
        style={{
          flexGrow: "1",
          marginLeft: "27px",
          textAlign: "start",
        }}
      >
        <Typography
          style={{ fontWeight: "bold" }}
        >{`${props.nama_latin} (${props.jumlah_ayat})`}</Typography>
        <Typography>{props.arti}</Typography>
      </div>
      <div
        className="div-tiga"
        style={{ flexGrow: "5", textAlign: "right", fontWeight: "bold" }}
      >
        {props.nama}
        {/* <Button style={{ textTransform: "none"}} variant="contained" color="success" onClick={props.hapus}>
        Delete
      </Button> */}
      </div>
      {/* <button onClick={props.hapus}>delete</button> */}

      {/* <button onClick={() => navigate(`fav/${props.nomor}`)}>favorite</button> */}
    </Card>
  );
};

export default CardHome;
