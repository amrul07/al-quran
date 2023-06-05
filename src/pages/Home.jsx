// import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
// import CardHome from "../components/CardHome";
// import { getMovieList, searchMovie } from "../service/api";
import CardHome from "../components/CardHome";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/Header/HeaderHome";
import { useParams } from "react-router-dom";
// import TextField from "@mui/material";

import TextField from "@mui/material/TextField";
// import { Filter } from "@mui/icons-material";
// import Navbar from "../components/navbar/Navbar";

// const drawerWidth = 280;
const Home = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const hapusData = [...data];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://quran-api.santrikoding.com/api/surah").then((res) => {
      // console.log("res", res.data.articles[0].title);
      setData(res.data);
      setFullData(res.data);
    });
  };

  const handleSearch = (e) => {
    // setSearch(e.)
    const value = e.target.value;

    const filter = fullData.filter(
      (item) =>
        `${item.nama_latin} ${item.arti}`
          .toString()
          .toLowerCase()
          .indexOf(value.toLowerCase()) > -1
    );

    setData(filter);
    // setData(filter1);

    // console.log(filter);
  };

  return (
    <div style={{ backgroundColor: "#e9e9e9", textAlign: "center" }}>
      <Navbar />
      <HeaderHome />
      <Box
        maxWidth={"calc(100vw - 80px)"}
        margin={"0 auto"}
      >
        <TextField
          fullWidth
          sx={{ marginTop: "20px", margin: " center", backgroundColor: "white"}}
          onChange={handleSearch}
          label="Ketik nama surah..."
          variant="outlined"
        />
      </Box>

      {/* <button onClick={() => nav}>Lihat Favorit</button> */}
      <Grid container>
        {data.map((e, index) => (
          /* <Grid item lg={6}> */
          <Grid
            display="flex"
            justifyContent="center"
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <CardHome
              key={index}
              nomor={e.nomor}
              nama_latin={e.nama_latin}
              jumlah_ayat={e.jumlah_ayat}
              nama={e.nama}
              arti={e.arti}
              audio={e.audio}
              // hapus={() => {
              //   // const d = [...data];
              //   p.splice(index, 1);
              //   console.log(data);
              //   setData(p);
              // }}
              hapus={() => {
                hapusData.splice(index, 1);
                setData(hapusData);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
