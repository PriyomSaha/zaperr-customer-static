import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../Logo.png";

const Body = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "90vh",
        minHeight: "90vh",
        maxHeight: "90vh",
        maxWidth: "100vw",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#280157",
          color: "white",
          px: isSmallScreen ? 0.5 : 2,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "50%" },
          textAlign: "center",
        }}
      >
        <Box className="image-container" mb={3}>
          <img src={Logo} alt="logo" className="centered-image" />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "700",
            mb: 2,
            letterSpacing: 2,
            display: isSmallScreen ? "none" : "block",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          PREMIUM DELIVERY SERVICES
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playwrite NG Modern, sans-serif",
            fontWeight: "bold",
            mb: 2,
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Tingle your tastebuds
        </Typography>
        <Typography
          sx={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
          fontSize={isSmallScreen ? 10 : 20}
        >
          Download Our App to get 10% discount on your first order.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFEFE",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          fontFamily={"Poppins, sans-serif"}
          fontSize={isSmallScreen ? 30 : 50}
          sx={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Welcome!!
        </Typography>
        <Typography
          variant="h3"
          fontWeight={200}
          fontFamily={"Poppins, sans-serif"}
          fontSize={isSmallScreen ? 15 : 20}
          sx={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Premium Delivery Service.
        </Typography>
        <TextField
          disabled
          variant="outlined"
          placeholder="Enter your location"
          fullWidth
          sx={{ mt: 2, width: isSmallScreen ? "90vw" : "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" color="secondary" size="small">
                  Locate Me
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Body;
