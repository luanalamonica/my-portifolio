import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";


const Hero = () =>{

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: '#363636',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{
            paddingTop: "100px"
        }
        
    }))

    const StyledImg = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%",
        border: "1px solid white"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box position="relative">
                        <Box position="absolute" width={"100%"} top={-100} right={0}>
                            <AnimatedBackground>

                            </AnimatedBackground>
                        </Box>
                        <Box position="absolute" textAlign="center">
                            <StyledImg  src={Avatar}/>
                        </Box>
                    </Box>
                    <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Luana Lamonica</Typography>
                    <Typography color="white"  variant="h2" textAlign="center">I'm an IT support intern</Typography>

                    <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                <StyledButton>
                                    <FileDownloadIcon/>
                                        <Typography>
                                            Download CV
                                        </Typography>
                                </StyledButton>
                        </Grid>

                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon/>
                                        <Typography>
                                            Contact me
                                        </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  