import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./bg.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "rgb(0 11 33)"
            }}
          >
            CryptOR - The Crypto Trackor App
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#ffe6e6f2",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Track all your favourite Crypto currencies at only one place
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
