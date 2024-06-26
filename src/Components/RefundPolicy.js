import React from "react";
import { Typography, Container, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function RefundPolicy() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth="md"
      sx={{ paddingBottom: isSmallScreen ? "50vh" : "20vh" }}
    >
      <Box sx={{ fontFamily: "Poppins, sans-serif", mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          fontWeight={700}
          letterSpacing={1.3}
        >
          Refund Policy
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Effective Date: 25th June, 2024
        </Typography>
        <Typography variant="body1" paragraph>
          At Zaperr, we strive to provide you with the best food delivery
          experience. We understand that sometimes things may not go as planned.
          Our Refund Policy outlines the conditions under which refunds may be
          granted to ensure clarity and fairness for both our customers and our
          partner restaurants.
        </Typography>
        <Typography variant="h5" paragraph>
          1. Scope of the Policy
        </Typography>
        <Typography variant="body1" paragraph>
          This policy applies to all orders placed through the Zaperr app.
        </Typography>
        <Typography variant="h5" paragraph>
          2. Eligibility for Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds may be considered in the following situations:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Order Issues: If you receive an incorrect, incomplete, or damaged
            order.
          </li>
          <li>
            Quality Issues: If the food is unsatisfactory due to quality or
            safety concerns.
          </li>
          <li>
            Delivery Issues: If the order is significantly delayed beyond the
            estimated delivery time without prior notification.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          3. Refund Request Process
        </Typography>
        <Typography variant="h6" paragraph>
          3.1. Reporting an Issue
        </Typography>
        <Typography variant="body1" paragraph>
          To request a refund, please follow these steps:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Contact Support: Reach out to Zaperr customer support via the app
            within [24 hours] of receiving your order.
          </li>
          <li>
            Provide Details: Include your order number, a detailed description
            of the issue, and any supporting photos (if applicable).
          </li>
        </Typography>
        <Typography variant="h6" paragraph>
          3.2. Assessment
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Initial Review:</strong> Our customer support team will review
          your request and may contact you for further information.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Decision:</strong> We aim to resolve all refund requests
          within [3 business days]. If your request is approved, the refund will
          be processed according to the payment method used.
        </Typography>
        <Typography variant="h5" paragraph>
          4. Refund Methods
        </Typography>
        <Typography variant="h6" paragraph>
          4.1. Original Payment Method
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds will generally be issued to the original payment method used
          for the order.
        </Typography>
        <Typography variant="h6" paragraph>
          4.2. Zaperr Credits
        </Typography>
        <Typography variant="body1" paragraph>
          In some cases, refunds may be provided as Zaperr credits, which can be
          used for future orders on the app.
        </Typography>
        <Typography variant="h5" paragraph>
          5. Non-Refundable Situations
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds will not be granted in the following situations:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Change of Mind: If you decide to cancel an order after it has been
            confirmed by the restaurant or during delivery.
          </li>
          <li>
            Incorrect Address: If you provide an incorrect or incomplete
            delivery address.
          </li>
          <li>
            Late Reporting: If you report an issue beyond the [24 hours] window
            after delivery.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          6. Cancellations
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Customer-Initiated:</strong> If you wish to cancel your order,
          you must do so before it is confirmed by the restaurant. Once
          confirmed, cancellation is not guaranteed.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Zaperr-Initiated:</strong> Zaperr reserves the right to cancel
          orders due to factors like restaurant availability, operational
          issues, or fraudulent activity. In such cases, a full refund will be
          issued.
        </Typography>
        <Typography variant="h5" paragraph>
          7. Additional Considerations
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Repeat Refund Requests:</strong> Excessive refund requests may
          lead to a review of your account and potential restrictions.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Policy Updates:</strong> Zaperr reserves the right to update
          this Refund Policy at any time. Changes will be effective immediately
          upon posting to our app and website.
        </Typography>
        <Typography variant="h5" paragraph>
          8. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions or further assistance regarding our Refund Policy,
          please contact Zaperr customer support via:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: [Contact@zaperr.com]
        </Typography>
      </Box>
    </Container>
  );
}

export default RefundPolicy;
