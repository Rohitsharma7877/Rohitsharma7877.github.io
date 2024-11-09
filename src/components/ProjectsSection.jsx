import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiStyledcomponents } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  
  {
    name: "TheBrandBee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFV2tUMf_snS0T0eeYNtHmYB-GCES_zG21Pw&s",
      
    link: "https://brandbee.vercel.app/",
      
    git: "https://github.com/Rohitsharma7877/BRANDBEE",
    about:`The Brand Bee is a full-service strategic brand consulting, digital marketing and web solutions agency, providing customised brand building solutions for a diverse spectrum of industries worldwide.`,
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      // <SiRedux className={styles.stackIcon} />,
      // <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />
    ],
  },
  {
    name: "InstaClone",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/d5d900124186413.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png",
    link:"https://instaclone-ltm8.onrender.com/login",
      
    git:"https://github.com/Rohitsharma7877/InstaClone",
    about:`  LYST Website clone. It is a platform for online shopping of variety of Clothing. User can easily search for the desired products using dynamic search bar. User can add multiple products to the cart and can buy with discounts also. Authentication is also required for purchase. `,
    
    stacks: [
      
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />
    ],
  },
  {
    name: "MailChimp Project",
    img: "https://user-images.githubusercontent.com/101381281/204876988-7f3ce8d3-ac0a-469a-ac4b-c30838f461aa.png",
    link:"celadon-brigadeiros-e7bbff.netlify.app",
      
    git:"https://github.com/Rohitsharma7877/Mailchimp.com_Project",
    about:`This project is a replica of Mailchimp.com website. It features some of the webpages from the original website.`,
    
    stacks: [
      
    
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
      <SiStyledcomponents className={styles.stackIcon} />
    ],
  },
  {
    name: "Gusto Project",
    img: "https://pageflows.com/media/videos/Onboarding_Gusto_Desktop_Web.mp4-screenshot-.jpg",
    link: "https://gusto-rohitsharma7877.vercel.app/",

    git: "https://github.com/Rohitsharma7877/Gusto-Clone.com",
    about:`Gusto is an easy-to-use, all-in-one human resources (HR) platform that helps small businesses handle payroll, employee benefits, hiring, onboarding, time and attendance, and compliance.`,
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      // <SiNodedotjs className={styles.stackIcon} />,
      // <SiExpress className={styles.stackIcon} />,
      // <SiMongodb className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  }
  
  
 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
