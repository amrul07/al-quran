import { Box, Card, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser";

const CardSurah = (props) => {
  return (
    <Grid display="flex" justifyContent="center">
      <Card
        sx={{
          marginY: "16px",
          // display: "flex",
          padding: "16px",
          // width: {
          //   md: "250px",
          // },
          alignItems: "center",
        }}
        style={{ width: "85%" }}
        key={props.key}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontStyle="italic" >{`${props.surah} : ${props.nomor}`}</Typography>
          <Typography textAlign="end" maxWidth="90%" variant="h5" fontWeight="bold">{props.ar}</Typography>
        </Box>
        <Box  display={"flex"} justifyContent={"space-between"}>
          <Typography fontStyle="italic"  maxWidth="50%">{props.idn}</Typography>
          <Typography >{parse(props.tr)}</Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardSurah;
