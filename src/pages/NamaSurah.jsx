// // import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
// // import CardHome from "../components/CardHome";
// // import { getMovieList, searchMovie } from "../service/api";
// import CardHome from "../components/CardHome";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Grid } from "@mui/material";
// import CardSurah from "../components/CardSurah";
// import { useParams } from "react-router-dom";
// import CardNamaSurah from "../components/CardNamaSurah";
// import Home from "./Home";
// // import Navbar from "../components/navbar/Navbar";

// // const drawerWidth = 280;
// const Surah = () => {
//   const { nomor } = useParams();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
//       .then((res) => {
//         // console.log("res", res.data.articles[0].title);
//         setData(res.data);
//       });
//   }, []);

//   return (
//     <div className="App">

//       {/* <CardNamaSurah /> */}
     
//       <Grid container>
//         {data.map((e, index) => (
//           //   <Grid item lg={6}>
//           <Grid item xs={12} sm={12} md={12} lg={12} spacing={4}>
//             <CardNamaSurah
//               key={index}
//               nama_latin={e.nama_latin}
//               nama={e.nama}
//               jumlah_ayat={e.jumlah_ayat}
//               tempat_turun={e.tempat_turun}
//               audio={e.audio}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Surah;
