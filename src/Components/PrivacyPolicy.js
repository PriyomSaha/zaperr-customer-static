import React from "react";
import { Typography, Container, Box } from "@mui/material";

function PrivacyPolicy() {
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
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Effective Date: 27th June, 2024
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" paragraph>
          Last Updated: 27th June, 2024
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Zaperr. We value your privacy and are committed to
          protecting your personal data. This Privacy Policy outlines how we
          collect, use, share, and protect your information when you use our
          delivery app.
        </Typography>
        <Typography variant="h5" paragraph>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1.1. Personal Information</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information that you provide directly to us,
          including but not limited to:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Contact Information: Name, email address, phone number, and delivery
            address.
          </li>
          <li>
            Payment Information: Credit card details or other financial
            information.
          </li>
          <li>Profile Information: Username, password, and profile photo.</li>
          <li>
            Order Details: Items ordered, delivery instructions, and order
            history.
          </li>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1.2. Automatically Collected Information</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          When you use our Service, we automatically collect:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Device Information: IP address, browser type, operating system, and
            device identifiers.
          </li>
          <li>
            Usage Data: Pages or features accessed, time spent on the app, and
            interaction data.
          </li>
          <li>
            Location Information: Your real-time location to enhance service
            delivery.
          </li>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1.3. Cookies and Tracking Technologies</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies and similar tracking technologies to collect
          information about your interaction with our app. You can manage cookie
          preferences through your device settings.
        </Typography>
        <Typography variant="h5" paragraph>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use your information to:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Provide and Improve the Service: Facilitate orders, process
            payments, and deliver food.
          </li>
          <li>
            Communicate with You: Send order confirmations, updates, and
            promotional offers.
          </li>
          <li>
            Personalize Experience: Tailor content and recommendations based on
            your preferences.
          </li>
          <li>
            Ensure Security: Detect and prevent fraud, and protect against
            unauthorized access.
          </li>
          <li>
            Analyze and Optimize: Understand usage patterns to enhance app
            performance and user experience.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          3. Sharing Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We may share your information with:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Service Providers: Payment processors, delivery partners, and IT
            support.
          </li>
          <li>
            Business Partners: Restaurants and food vendors to fulfill your
            orders.
          </li>
          <li>
            Legal Authorities: If required by law or to protect our legal
            rights.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          4. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, disclosure, or destruction.
          These measures include encryption, secure servers, and access
          controls.
        </Typography>
        <Typography variant="h5" paragraph>
          5. Your Rights and Choices
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Access and Update: Review and update your personal information
            through your account settings.
          </li>
          <li>
            Opt-Out: Unsubscribe from marketing communications through the
            opt-out link in emails.
          </li>
          <li>
            Delete Account: Request deletion of your account and associated data
            by contacting us.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          6. Data Retention
        </Typography>
        <Typography variant="body1" paragraph>
          We retain your information for as long as necessary to provide the
          Service and fulfill the purposes described in this policy. We may also
          retain and use information to comply with legal obligations, resolve
          disputes, and enforce agreements.
        </Typography>
        <Typography variant="h5" paragraph>
          7. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our app may contain links to third-party websites. We are not
          responsible for the privacy practices of these sites. We encourage you
          to review the privacy policies of any third-party services you visit.
        </Typography>
        <Typography variant="h5" paragraph>
          8. Children’s Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our Service is not intended for children under the age of 13. We do
          not knowingly collect personal information from children. If we become
          aware that we have inadvertently collected such information, we will
          take steps to delete it.
        </Typography>
        <Typography variant="h5" paragraph>
          9. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our app and updating
          the effective date. Your continued use of the Service after changes
          are posted constitutes your acceptance of the new policy.
        </Typography>
        <Typography variant="h5" paragraph>
          10. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </Typography>
        <Typography variant="body1" paragraph>
          Zaperr Email: Contact@zaperr.com <br />
          Address: [Your Address] <br />
          Phone: [Your Phone Number]
        </Typography>
      </Box>
    </Container>
  );
}

export default PrivacyPolicy;
