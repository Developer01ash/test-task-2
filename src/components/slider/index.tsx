import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Home.module.css";
import User from "../../assets/images/user.png";
import ArrowRight from "../../assets/images/arrow_right.svg";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";

const CustomSlider = ({ cardContent }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <Container maxWidth="lg">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  obcaecati enim quod nihil quae. Sed vel, id excepturi ad
                  similique enim hic aut?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  obcaecati enim quod nihil quae. Sed vel, id excepturi ad
                  similique enim hic aut?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  obcaecati enim quod nihil quae. Sed vel, id excepturi ad
                  similique enim hic aut?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  obcaecati enim quod nihil quae. Sed vel, id excepturi ad
                  similique enim hic aut?
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
    </Container>
  );
};

export default CustomSlider;
