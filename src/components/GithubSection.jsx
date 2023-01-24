// import { Text } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "./Styles/GithubStat.module.css";
// import { Text } from "drei";
const GithubStat = () => {
  return (
    <div className={styles.gitBox} >
      <Fade bottom>
        <p style={{fontSize:"40px",fontWeight:"bold",textDecoration:"underline",
      textDecorationColor:" rgb(177, 54, 6)", color:"rgb(17, 121, 224)" 
      }}>Github Calender and Stats</p>
        {/* <Text color="#383874" textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "3xl" }}>Github Calender and Stats</Text> */}
      <div className={styles.Github}>
        
        <GitHubCalendar username="Rohitsharma7877" className="calender" />
      </div>
      <div className={styles.Github}>
        <a href="https://github.com/Rohitsharma7877" rel="noreferrer" target="_blank">
          <img
          
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=Rohitsharma7877&show_icons=true&theme=react&border_color=61dafb&hide_border=true"
            // height="192px"
          />
          {/* <img src="https://github-readme-stats.vercel.app/api?username=Rohitsharma7877&show_icons=true&theme=react&border_color=61dafb&hide_border=true" /> */}
        </a>



        
        
      </div>
      </Fade>
    </div>
  );
};

export default GithubStat;