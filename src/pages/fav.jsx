// import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
// import CardHome from "../components/CardHome";
// import { getMovieList, searchMovie } from "../service/api";
import CardHome from "../components/CardHome";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardSurah from "../components/CardSurah";
import { useParams } from "react-router-dom";
import CardNamaSurah from "../components/CardNamaSurah";
import Home from "./Home";
import Navbar from "../components/Navbar";
import CardFav from "../components/CardFav";
// import Navbar from "../components/navbar/Navbar";

// const drawerWidth = 280;
const Surah = () => {
  const { nomor } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
      .then((res) => {
        // console.log("res", res.data.articles[0].title);
        console.log(res.data);
        setData(res.data); 
      });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#e9e9e9"}}>
        {/* <Navbar /> */}
      {data !== undefined ? <CardFav data={data} /> : null}
      {/* <Grid container>

        {data &&
          data.ayat.map((e, index) => (
            //   <Grid item lg={6}>
            <Grid item xs={12} sm={12} md={12} lg={12} spacing={4}>
              <CardSurah
                key={index}
                nomor={e.nomor}
                surah={e.surah}
                ar={e.ar}
                idn={e.idn}
                tr={e.tr}
              />
            </Grid>
          ))}
      </Grid> */}
    </div>
  );
};

export default Surah;
