import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayStoreIcon from "@mui/icons-material/PlayCircle";
import AppStoreIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#4a148c",
        color: "white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#4a148c",
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: isMediumScreen ? "column" : "row",
          height: isMediumScreen ? "auto" : "5vh",
          // position: "sticky",
          bottom: 0,
          width: "100%",
          borderTop: "0.5px solid white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: isSmallScreen ? 2 : 0,
          }}
        >
          <IconButton color="inherit" href="https://www.zaperr.com/android">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PlayStoreIcon />
              <Typography>Playstore</Typography>
            </Box>
          </IconButton>
          <IconButton color="inherit">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AppStoreIcon />
              <Typography>Appstore</Typography>
            </Box>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textDecoration: "none",
              color: "inherit",
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            <RouterLink
              to="/about-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </RouterLink>
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body2" sx={{ mx: 1 }}>
              |
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              textDecoration: "none",
              color: "inherit",
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            <RouterLink
              to="/terms&condition"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Terms and Conditions
            </RouterLink>
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body2" sx={{ mx: 1 }}>
              |
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              textDecoration: "none",
              color: "inherit",
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            <RouterLink
              to="/privacy-policy"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Privacy Policy
            </RouterLink>
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body2" sx={{ mx: 1 }}>
              |
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              textDecoration: "none",
              color: "inherit",
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            <RouterLink
              to="/refund-policy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Refund Policy
            </RouterLink>
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body2" sx={{ mx: 1 }}>
              |
            </Typography>
          )}
          <Typography variant="body2">
            <RouterLink
              to="/cancellation-policy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cancellation Policy
            </RouterLink>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: isMediumScreen ? "100%" : "auto",
        }}
      >
        <Divider
          sx={{
            width: isMediumScreen ? "100%" : "auto",
            my: 2,
            bgcolor: "white",
          }}
        />
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1,
            py: 1,
          }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <EmailIcon sx={{ mr: 1 }} />
            <Typography>
              Contact Us:
              <a
                href="mailto:contact@zaperr.com"
                style={{
                  color: "inherit", // Inherit the text color from Typography
                  textDecoration: "none", // Remove underline or other default styles
                  cursor: "pointer",
                }}
              >
                &nbsp; contact@zaperr.com
              </a>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <EmailIcon sx={{ mr: 1 }} />
            <Typography>For Support: support@zaperr.com</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography>Contact no: +91 40 35011582</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <HomeIcon sx={{ mr: 1 }} />
            <Typography>
              Address: 0052, Ashok Vihar, G Buil Society, Hyderabad, Telangana
              500048
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
