import React from "react";
import { Typography, Container, Box } from "@mui/material";

function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ paddingBottom: "5vh" }}>
      <Box sx={{ fontFamily: "Poppins, sans-serif", mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          fontWeight={700}
          letterSpacing={1.3}
        >
          About Us
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Welcome to Zaperr—where convenience meets innovation in food and
          grocery delivery. We are your trusted partner in bringing the world’s
          best culinary and essential needs right to your doorstep. As a global
          player in the food and grocery delivery industry, Zaperr is on a
          mission to redefine how you shop and dine, offering a seamless,
          efficient, and delightful experience across continents.
        </Typography>
        <Typography variant="h5" paragraph>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At Zaperr, we believe that accessing quality food and groceries should
          be as simple as a tap on your screen. Our mission is to empower
          communities around the world with convenient access to their favorite
          restaurants and essential stores, promoting a hassle-free lifestyle
          and healthier choices through our comprehensive delivery solutions.
        </Typography>
        <Typography variant="h5" paragraph>
          What We Do
        </Typography>
        <Typography variant="body1" paragraph>
          Zaperr provides a vast selection of food and grocery options tailored
          to your preferences. Whether you're craving a gourmet meal from a
          local bistro, need fresh produce for your family, or seeking specialty
          ingredients for a culinary adventure, our platform connects you with a
          diverse array of local vendors. We aim to deliver quality products
          swiftly and safely, ensuring your needs are met with the utmost
          reliability and care.
        </Typography>
        <Typography variant="h5" paragraph>
          Global Reach, Local Touch
        </Typography>
        <Typography variant="body1" paragraph>
          Our operations span across major cities and remote areas alike,
          offering localized solutions that cater to the unique tastes and needs
          of each community. With a robust network of partners, from local farms
          and bakeries to renowned restaurant chains, Zaperr ensures that you
          enjoy the best your city has to offer, no matter where you are in the
          world.
        </Typography>
        <Typography variant="h5" paragraph>
          Innovative Technology
        </Typography>
        <Typography variant="body1" paragraph>
          Leveraging cutting-edge technology, Zaperr provides a user-friendly
          interface that makes ordering quick and effortless. Our advanced
          tracking system keeps you informed every step of the way, from the
          moment you place your order to the instant it arrives at your door.
          With features like real-time updates, personalized recommendations,
          and secure payment options, we prioritize your convenience and peace
          of mind.
        </Typography>
        <Typography variant="h5" paragraph>
          Commitment to Sustainability
        </Typography>
        <Typography variant="body1" paragraph>
          At Zaperr, we are committed to sustainable practices. We partner with
          eco-friendly vendors, use biodegradable packaging, and optimize
          delivery routes to minimize our environmental footprint. Our goal is
          to promote a greener, more sustainable future while delivering
          excellence in service.
        </Typography>
        <Typography variant="h5" paragraph>
          Why Choose Zaperr?
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Wide Selection: Access a broad range of food and grocery items from
            local favorites to international delights.
          </li>
          <li>
            Fast & Reliable: Enjoy timely deliveries that you can track in real
            time.
          </li>
          <li>
            User-Friendly: Experience a seamless and intuitive platform designed
            for ease of use.
          </li>
          <li>
            Sustainable: Support eco-friendly initiatives with every order.
          </li>
          <li>
            Global Presence: Benefit from our expansive network and local
            expertise.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          Join Us on Our Journey
        </Typography>
        <Typography variant="body1" paragraph>
          Zaperr is more than a delivery app; it's a movement towards a more
          convenient and connected world. Join us on our journey as we expand
          our horizons and redefine the future of food and grocery delivery, one
          community at a time.
        </Typography>
        <Typography variant="h5" paragraph>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For more information or support, please visit our website at
          Zaperr.com or reach out to our customer service team at
          support@zaperr.com.
        </Typography>
        <Typography variant="body1" align="center" fontWeight={700}>
          Together, let's make life easier. Zaperr - Your world, delivered.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;
