import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import User from "../../assets/images/user.png";
import ArrowRight from "../../assets/images/arrow_right.svg";

const Testimonials = () => {
  return (
    <>
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
              obcaecati enim quod nihil quae. Sed vel, id excepturi ad similique
              enim hic aut?
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
              obcaecati enim quod nihil quae. Sed vel, id excepturi ad similique
              enim hic aut?
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
              obcaecati enim quod nihil quae. Sed vel, id excepturi ad similique
              enim hic aut?
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
    </>
  );
};

export default Testimonials;
