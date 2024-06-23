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
        maxHeight: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#4a148c",
          color: "white",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "50%" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "900",
            fontStyle: "italic",
            mb: 3,
            letterSpacing: 3,
          }}
        >
          Zaperr
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "700",
            mb: 2,
            letterSpacing: 2,
            display: isSmallScreen ? "none" : "inherit",
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
          }}
        >
          Tingle your tastebuds
        </Typography>
        <Typography>
          Download Our App to get 10% discount on your first order.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFEFE",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        {/* Add content for the white side */}
        <Typography
          variant="h4"
          fontWeight={600}
          fontFamily={"Poppins, sans-serif"}
          fontSize={50}
        >
          Welcome!!
        </Typography>
        <Typography
          variant="h3"
          fontWeight={200}
          fontFamily={"Poppins, sans-serif"}
          fontSize={20}
        >
          Premium Delivery Service.
        </Typography>
        <TextField
          disabled
          variant="outlined"
          placeholder="Enter your location"
          fullWidth
          sx={{ mt: 2 }}
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
