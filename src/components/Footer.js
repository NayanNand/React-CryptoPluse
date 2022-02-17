import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { makeStyles } from "@material-ui/core";
  
  const useStyles = makeStyles(() => ({
    footer: {
      marginTop: 50,
      height: 75,
      textAlign: "center",
      color: "gray",
      fontFamily: "Montserrat"
    },
    icons: {
      color: "#4eabcf"
    },
    icondiv: {
      marginTop: 7,
      display: "flex",
      gap: 15,
      justifyContent: "center"
    }
  }));
  const Footer = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.footer}>
        <p>Made with ❤️ & 🍵 by Nayan</p>
        <div className={classes.icondiv}>
          <a
            className={classes.icons}
            href="https://www.linkedin.com/in/nayan-nand-9a3801214/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className={classes.icons}
            href="https://twitter.com/NandNayan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className={classes.icons}
            href="https://github.com/NayanNand"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className={classes.icons}
            href="https://www.instagram.com/nayan_nand/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
  