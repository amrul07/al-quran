import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const CardNamaSurah = (props) => {
  return (
    <Grid display="flex" justifyContent="center" my={4}>
      <Card
        sx={{
          // height: "100px",
          marginY: "16px",
          display: "flex",
          padding: "16px",
            width: "100%",
          maxWidth: "85%",
          // alignSelf: "center",
          justifyContent: "space-between",
          // width: {
          //   md: "250px",
          // },
          // alignItems: "center",
        }}
      >
        <Box textAlign="left" fontStyle="italic" >
          <Typography
            variant="h6"
            justifyContent="flex-start"
            fontWeight={"bold"}
          >{`${props.data.nama_latin} - ${props.data.nama}`}</Typography>
          <Typography >
            <FormatListNumberedIcon
              fontSize="2"
              sx={{ marginBottom: "-1px", }}
            />Jumlah Ayat : {props.data.jumlah_ayat}
            
          </Typography>
          <Typography >
           
            <AddLocationAltIcon  fontSize="2" style={{marginLeft: "-3px",}}/>
            Tempat Turun : {props.data.tempat_turun}
          </Typography>
        </Box>
        <Box>{/* <Typography>4</Typography> */}</Box>
        <Stack   >
          <audio controls style={{maxWidth: "calc(100vw - 250px)", marginTop: "15px"}}>
            <source src={props.data.audio}  />
          </audio>
        </Stack>
      </Card>
    </Grid>

    // <Grid display="flex" justifyContent="center">
    //   <Card
    //     sx={{
    //       marginY: "16px",
    //       // display: "flex",
    //       padding: "16px",
    //       // width: {
    //       //   md: "250px",
    //       // },
    //       // alignItems: "center",
    //     }}
    //     style={{ width: "85%" }}
    //     key={props.key}
    //   >
    //     <Box display={"flex"} justifyContent={"space-between"}>
    //       <Typography fontStyle="italic">{`${props.data.nama_latin} - ${props.data.nama}`}</Typography>
    //       <Typography
    //         textAlign="end"
    //         // minWidth="50%"
    //         variant="h5"
    //         fontWeight="bold"
    //       >
    //         <audio controls style={{ width: "200px" }}>
    //           <source src={props.data.audio} />
    //         </audio>
    //       </Typography>
    //     </Box>
    //     <Box maxWidth="50%" textAlign={"star"} >
    //       {/* <Typography fontStyle="italic" maxWidth="50%">
    //         {props.idn}
    //       </Typography> */}
    //       <Typography textAlign={"start"}>
    //         <FormatListNumberedIcon
    //           fontSize="2"
    //           sx={{ marginBottom: "-1px" }}
    //         />
    //         Jumlah Ayat : {props.data.jumlah_ayat}
    //         <AddLocationAltIcon fontSize="2" sx={{ marginLeft: "5px" }} />
    //         Tempat Turun : {props.data.tempat_turun}
    //       </Typography>
    //     </Box>
    //   </Card>
    // </Grid>
  );
};

export default CardNamaSurah;
