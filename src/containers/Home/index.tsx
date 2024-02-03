import styles from "@/styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BannerImg from "../../assets/images/banner.jpg";
import ImageList from "@mui/material/ImageList";
import CapLogo from "../../assets/images/cap_logo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Channel from "../../assets/images/channel.png";
import GoodFirm from "../../assets/images/goodfirms.png";
import Softwaresuggest from "../../assets/images/softwaresuggest.png";
import Tech from "../../assets/images/tech.png";
import Price from "../../assets/images/price.png";
import Hotel from "../../assets/images/hotels.png";
import ArrowRight from "../../assets/images/arrow_right.svg";
import CustomSlider from "@/components/slider";
import Testimonials from "../Testimonials";
import Slider from "react-slick";
import User from "../../assets/images/user.png";

const HomePage = () => {
  const theme = useTheme();
  const itemData = [
    {
      img: CapLogo,
      title: "Capterra",
    },
    {
      img: GoodFirm,
      title: "GoodFirms",
    },
    {
      img: Softwaresuggest,
      title: "Software Suggest",
    },
    {
      img: Tech,
      title: "Techjockey",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box className={styles.bannerBg}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  paddingTop: "100px",

                  [theme.breakpoints.up("md")]: {
                    paddingTop: "0px",
                  },
                }}
              >
                <Typography>Free open source</Typography>
                <h1>Reservation and booking system for hotels</h1>
                <Typography className={styles.onlinePara}>
                  Take your Hotel Business Online with the help of us
                </Typography>
                <Button variant="contained" className={styles.bgBtn}>
                  View Demo {">"}
                </Button>
                <Button variant="outlined" className={styles.borderBtn}>
                  Download
                </Button>
              </Box>
            </Grid>
            <Grid item lg={8} md={8} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Image src={BannerImg} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.featureBg}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item lg={9} md={10} xs={12}>
              <Box
                sx={{
                  backgroundColor: "#FFF2DF",
                  borderRadius: "30px",
                  marginTop: "-60px",
                  padding: "20px 20px 0px",
                  [theme.breakpoints.down("md")]: {
                    marginTop: "40px",
                  },
                }}
              >
                <h2>We got featured!</h2>
                <Typography>
                  We got mentioned and listed on various platforms. You can find
                  us here.
                </Typography>

                <ImageList
                  sx={{ width: "100%", margin: 0, paddingBottom: 0 }}
                  cols={4}
                >
                  {itemData.map((item) => (
                    <>
                      <Image src={item.img} alt="" width={150} height={100} />
                    </>
                  ))}
                </ImageList>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.counter}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item lg={9} md={10} xs={12}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Grid item md={4} xs={12}>
                  <Box
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        marginBottom: "40px",
                      },
                    }}
                  >
                    <h4>25,000+</h4>
                    <span style={{ background: "#ff00004f" }}></span>
                    <p>Downloads</p>
                  </Box>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Box
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        marginBottom: "40px",
                      },
                    }}
                  >
                    <h4>120+</h4>
                    <span
                      style={{ background: "rgb(255 235 59 / 54%)" }}
                    ></span>
                    <p>Countries</p>
                  </Box>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Box>
                    <h4>10,000+</h4>
                    <span style={{ background: "#00bcd470" }}></span>
                    <p>Users</p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.channel}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid item lg={8} md={10} xs={12}>
              <h2>Channel Manager</h2>
              <Typography className={styles.mainPara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, doloremque magnam? Enim itaque, ullam saepe
                perferendis quasi cumque nihil maxime labore nostrum quidem.
              </Typography>
              <a href="#">
                Read more <Image src={ArrowRight} alt="" />
              </a>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item md={8} xs={12}>
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Grid item md={5} xs={12}>
                  <Card className={styles.card}>
                    <CardActionArea>
                      <CardContent>
                        <Box>
                          <Image src={Channel} alt="" width={50} height={50} />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={styles.heading}
                        >
                          Multi Channel integration
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam obcaecati enim quod nihil quae. Sed vel,
                          id excepturi ad similique enim hic aut?
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item md={5} xs={12}>
                  <Card
                    className={styles.card}
                    sx={{
                      marginTop: "30px",
                      [theme.breakpoints.down("md")]: {
                        marginTop: "20px",
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Box>
                          <Image src={Price} alt="" width={50} height={50} />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={styles.heading}
                        >
                          Manage Prices & Inventory
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam obcaecati enim quod nihil quae. Sed vel,
                          id excepturi ad similique enim hic aut?
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item md={5} xs={12}>
                  <Card
                    className={styles.card}
                    sx={{
                      marginTop: "-30px",
                      [theme.breakpoints.down("md")]: {
                        marginTop: "20px",
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Box>
                          <Image src={Price} alt="" width={50} height={50} />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={styles.heading}
                        >
                          Manage channels & bookings
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam obcaecati enim quod nihil quae. Sed vel,
                          id excepturi ad similique enim hic aut?
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item md={5} xs={12}>
                  <Card
                    className={styles.card}
                    sx={{
                      marginTop: "10px",
                      [theme.breakpoints.down("md")]: {
                        marginTop: "20px",
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Box>
                          <Image src={Hotel} alt="" width={50} height={50} />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={styles.heading}
                        >
                          Manage multiple hotels
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam obcaecati enim quod nihil quae. Sed vel,
                          id excepturi ad similique enim hic aut?
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.testimonial}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid item lg={8} md={10} xs={12}>
              <h2>Testimonials</h2>
              <Typography className={styles.mainPara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, doloremque magnam? Enim itaque, ullam saepe
                perferendis quasi cumque nihil maxime labore nostrum quidem.
              </Typography>
              <a href="#">
                Read more <Image src={ArrowRight} alt="" />
              </a>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "15px" }}>
            <Slider {...settings}>
              <div>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardContent>
                      <Box className={styles.mediaBox}>
                        <Image src={User} alt="" width={50} height={50} />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.para}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam obcaecati enim quod nihil quae. Sed vel, id
                        excepturi ad similique enim hic aut?
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.heading}
                      >
                        John Doe
                      </Typography>
                      <Typography className={styles.designation}>
                        Marketing Head
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardContent>
                      <Box className={styles.mediaBox}>
                        <Image src={User} alt="" width={50} height={50} />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.para}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam obcaecati enim quod nihil quae. Sed vel, id
                        excepturi ad similique enim hic aut?
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.heading}
                      >
                        John Doe
                      </Typography>
                      <Typography className={styles.designation}>
                        Marketing Head
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardContent>
                      <Box className={styles.mediaBox}>
                        <Image src={User} alt="" width={50} height={50} />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.para}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam obcaecati enim quod nihil quae. Sed vel, id
                        excepturi ad similique enim hic aut?
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.heading}
                      >
                        John Doe
                      </Typography>
                      <Typography className={styles.designation}>
                        Marketing Head
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardContent>
                      <Box className={styles.mediaBox}>
                        <Image src={User} alt="" width={50} height={50} />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.para}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam obcaecati enim quod nihil quae. Sed vel, id
                        excepturi ad similique enim hic aut?
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.heading}
                      >
                        John Doe
                      </Typography>
                      <Typography className={styles.designation}>
                        Marketing Head
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Slider>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
