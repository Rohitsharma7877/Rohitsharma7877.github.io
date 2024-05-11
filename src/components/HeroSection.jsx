import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"
import  ReactTyped  from "react-typed";
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiDownloadLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"
import cv from '.././components/photo/ROHIT_KUMAR_Resume.pdf'




const useStyles = makeStyles({
  contactBtn: {
    color: "black",

    backgroundColor: "#ef9a9a" ,
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "rgb(17, 121, 224)",
      color:"white",
    },
  },
  linkedInIcon: {
    fontSize: "40px",

    color: "rgb(8, 111, 143)",
    "&:hover": {
      backgroundColor: "rgb(17, 155, 197)",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",

    "&:hover": {
      backgroundColor: "rgb(100, 100, 100)",
    },
  },
  a: {
    textDecoration: "none",
  },
})
export function HeroSection() {
  const classes = useStyles()

  const onButtonClick = async () => {


    try{
      // console.log(cv)
      const a = document.createElement('a');
      
      a.href = "https://drive.google.com/file/d/1LWNbkksHQ1elp9WDPvBf2s1st8p6WB0B/view?usp=drive_link";
      // a.download = 'ROHIT_KUMAR_Resume.pdf';
      a.target="_blank"
      a.click();
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi, 👋</p>
          <p>
            I am <span>Rohit Kumar</span>{" "}
          </p>
          <p> <ReactTyped 
          strings={[
            'Full Stack',
            'Web Developer ',
            'MERN Stack'
            
            ]}
            typeSpeed={40}
            backSpeed={50}
            // attr="placeholder"
            loop
            />
            </p>
          <a
          //  https://drive.google.com/file/d/1UZZSDi78iPkruFMLcR3HFLCsN_mJU0O9/view?usp=sharing
            // target="_blank"
            download
            href={cv}
            // rel="noopener noreferrer"
          >
            <Button onClick={onButtonClick } variant="contained"
             className={classes.contactBtn}>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a>
        </div>

        <div className={styles.photoCont}>
          <img
            src="https://www.itaims.com/static/assets/images/gif/home-banner.webm"
            alt=""
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/rohit-kumar-5a7b00225/"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Rohitsharma7877"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
      </Fade>
    </div>
  )
}
