
import { Link } from "react-scroll";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "./Styles/Navbar.module.css";
import cv from ".././components/photo/ROHIT_KUMAR_Resume.pdf"

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log("cv",cv)
  const onButtonClick = async () => {


    try{
      // console.log(cv)
      const a = document.createElement('a');
      
      a.href = "https://drive.google.com/file/d/1Y7MwtWzQGWtqGDT_dNpKnT4IJMQolI63/view?usp=sharing";
      // a.download = 'ROHIT_KUMAR_Resume.pdf';
      a.target="_blank"
      a.click();
    }catch(err){
        console.log(err)
    }
 

    // fetch('ROHIT_KUMAR_Resume.pdf').then(response => {
    //     response.blob().then(blob => {
        
    //         const fileURL = window.URL.createObjectURL(blob);
    //         // Setting various property values
    //         let alink = document.createElement('a');
    //         alink.href = fileURL;
    //         alink.download = 'ROHIT_KUMAR_Resume.pdf';
    //         alink.click();
    //     })
    // })
}

const Reload = () => {
  window.location.reload();
};


  return (
    <>
      <Box
        bg={useColorModeValue("#eaf8f8", "#eaf8f8")}
        px={4}
        className={styles.mainBox}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            justifyContent={{ base: "center", md: "space-between" }}
            w={"100%"}
            p={4}
            spacing={8}
            alignItems={"center"}
          >
            <Box  className={styles.myLogo} onClick={Reload}>
              <p> R.K </p>
              {/* <Avatar
               onClick={Reload}
               boxSize={["10","12","14","16"]}
               borderRadius="full"
               className={styles.myLogo}
              //  mt={['3','4','4','4']}
              //  ml={['1','1','1','2']}
                size={"md"}
                src="final logo.png"
              /> */}
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
             
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Home</div>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>About</div>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Skills</div>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Projects</div>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Contact</div>
              </Link>
              {/* <Link
                to="resume"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={onButtonClick }
              >
                <div className={styles.nav}>Resume</div>


              </Link> */}
              <a download='Rohit_Kumar_Resume.pdf' href={cv}  onClick={onButtonClick } > <div className={styles.nav}>Resume</div></a>



            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Home</div>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>About</div>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Skills</div>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Projects</div>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Contact</div>
              </Link>
              {/* <Link
                href="resume"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={onButtonClick }
              >
                <div className={styles.nav}>Resume</div>
              </Link> */}

              <a download='Rohit_Kumar_Resume.pdf' href={cv}  onClick={onButtonClick } > <div className={styles.nav}>Resume</div></a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
