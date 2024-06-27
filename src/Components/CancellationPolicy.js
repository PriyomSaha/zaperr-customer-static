import React from "react";
import { Typography, Container, Box } from "@mui/material";

function CancellationPolicy() {
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
          Cancellation Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Zaperr! We aim to provide a seamless and enjoyable food
          delivery experience. To ensure clarity and transparency, we have
          outlined our cancellation policy below. Please read carefully before
          placing your order.
        </Typography>
        <Typography variant="h5" paragraph>
          1. Order Cancellation by the Customer
        </Typography>
        <Typography variant="h6" paragraph>
          1.1 Before Order Acceptance
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Free Cancellation:</strong> Customers can cancel their orders
          at no charge if the cancellation is made before the restaurant accepts
          the order. No fees will be charged, and a full refund will be issued.
        </Typography>
        <Typography variant="h6" paragraph>
          1.2 After Order Acceptance
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Partial Refund:</strong> Once the restaurant has accepted the
          order, cancellation may be possible within a short time frame
          (typically 5 minutes after acceptance). A partial refund will be
          issued, deducting a cancellation fee to cover preparation costs.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>No Refund:</strong> If the cancellation request is made after
          the restaurant has started preparing the food or after the delivery
          personnel has picked up the order, no refund will be issued.
        </Typography>
        <Typography variant="h5" paragraph>
          2. Order Cancellation by Zaperr
        </Typography>
        <Typography variant="h6" paragraph>
          2.1 Reasons for Cancellation
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Restaurant Unavailability:</strong> If the restaurant is
          unable to fulfill the order due to unforeseen circumstances (e.g.,
          closed for maintenance, out of stock), Zaperr will cancel the order
          and issue a full refund.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Fraudulent Activity:</strong> Orders suspected of fraudulent
          activity will be canceled without prior notice, and no refund will be
          issued. Accounts involved in fraudulent activity may be suspended or
          banned.
        </Typography>
        <Typography variant="h5" paragraph>
          3. Changes to the Order
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Modification Requests:</strong> Customers wishing to modify
          their order after placement should contact customer support
          immediately. Modifications may not be possible once the restaurant has
          accepted the order.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Additional Charges:</strong> If modifications result in a
          higher order value, customers will be charged the difference. If the
          order value is lower, the difference may be refunded, subject to
          restaurant policies.
        </Typography>
        <Typography variant="h5" paragraph>
          4. Refund Process
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Processing Time:</strong> Refunds for eligible cancellations
          will be processed within 3-5 business days and credited back to the
          original payment method.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Notification:</strong> Customers will receive an email
          confirmation upon successful cancellation and refund initiation.
        </Typography>
        <Typography variant="h5" paragraph>
          5. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Customer Support:</strong> For any questions or assistance
          with cancellations, please contact Zaperr customer support through the
          app or via email at contact@zaperr.com.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Operating Hours:</strong> Our support team is available 24/7
          to assist you with any inquiries.
        </Typography>
        <Typography variant="h5" paragraph>
          6. Policy Updates
        </Typography>
        <Typography variant="body1" paragraph>
          Zaperr reserves the right to update or modify this cancellation policy
          at any time without prior notice. Changes will be effective
          immediately upon posting on the app. Customers are encouraged to
          review the policy regularly to stay informed.
        </Typography>
        <Typography variant="body1" paragraph>
          By placing an order with Zaperr, you agree to comply with the terms
          and conditions outlined in this cancellation policy.
        </Typography>
      </Box>
    </Container>
  );
}

export default CancellationPolicy;
