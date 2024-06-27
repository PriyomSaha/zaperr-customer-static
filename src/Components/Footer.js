import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayStoreIcon from "@mui/icons-material/PlayCircle";
import AppStoreIcon from "@mui/icons-material/Apple";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#4a148c",
        color: "white",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: isSmallScreen ? "column" : "row",
        height: isSmallScreen ? "auto" : "5vh",
        position: "fixed",
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
        <IconButton color="inherit">
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
        <Typography variant="body2">
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
  );
};

export default Footer;
