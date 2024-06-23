import React from "react";
import { Typography, Container, Box } from "@mui/material";

function TermsAndConditions() {
  return (
    <Container maxWidth="md" sx={{ paddingBottom: "20vh" }}>
      <Box sx={{ fontFamily: "Poppins, sans-serif", mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          fontWeight={700}
          letterSpacing={1.3}
        >
          Terms and Conditions
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Effective Date: 27th June, 2024
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" paragraph>
          Last Updated: 27th June, 2024
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Zaperr. By downloading, accessing, or using our delivery
          app ("Service"), you agree to comply with and be bound by these Terms
          and Conditions ("Terms"). Please read them carefully.
        </Typography>
        <Typography variant="h5" paragraph>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By using our Service, you agree to these Terms, as well as our Privacy
          Policy. If you do not agree, please do not use our Service. We reserve
          the right to modify these Terms at any time. Your continued use of the
          Service after any changes constitutes acceptance of the new Terms.
        </Typography>
        <Typography variant="h5" paragraph>
          2. Use of the Service
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2.1. Eligibility</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          You must be at least 18 years old to use our Service. By using the
          Service, you represent and warrant that you are of legal age to form a
          binding contract and meet all eligibility requirements.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2.2. Account Registration</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          To access certain features, you must register an account. You agree
          to:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>Provide accurate, current, and complete information.</li>
          <li>
            Maintain the security of your account by not sharing your password.
          </li>
          <li>
            Promptly update your account information to keep it accurate and
            current.
          </li>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2.3. Prohibited Activities</strong>
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Use the Service for any unlawful purpose or in violation of any
            applicable laws.
          </li>
          <li>
            Impersonate any person or entity or falsely state your affiliation
            with any person or entity.
          </li>
          <li>
            Disrupt or interfere with the security or functionality of the
            Service.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or
            other users’ accounts.
          </li>
        </Typography>
        <Typography variant="h5" paragraph>
          3. Orders and Payments
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3.1. Placing Orders</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          When you place an order through our app, you agree to provide accurate
          details and pay the listed price, including any applicable taxes and
          fees. Orders are subject to acceptance by us and the respective
          restaurant.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3.2. Payments</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          All payments must be made through the payment methods available on the
          app. We may use third-party payment processors to handle transactions
          securely. By submitting payment information, you authorize us to
          charge the specified amount.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3.3. Cancellations and Refunds</strong>
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            <strong>Cancellations:</strong> Orders can be canceled only if the
            restaurant has not yet begun preparing your order. Cancellation
            policies may vary by restaurant.
          </li>
          <li>
            <strong>Refunds:</strong> Refunds are at our discretion and may be
            issued for incorrect or unsatisfactory orders. Refunds may be in the
            form of app credits or original payment method. Refunds take a time
            of 3 to 4 days to be reflected in the customer’s original mode of
            payment.
          </li>
        </Typography>

        <Typography variant="h5" paragraph>
          4. Delivery
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.1. Delivery Time</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          We strive to deliver orders within the estimated time but do not
          guarantee delivery times. Delays may occur due to factors beyond our
          control.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.2. Delivery Address</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          You are responsible for providing an accurate delivery address. We are
          not liable for orders delivered to incorrect addresses provided by
          you.
        </Typography>

        <Typography variant="h5" paragraph>
          5. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>5.1. Ownership</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          The Service, including all content, features, and functionality, is
          the exclusive property of [App Name] and its licensors. You are
          granted a limited, non-exclusive, non-transferable license to use the
          Service for personal use only.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>5.2. Restrictions</strong>
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>
            Reproduce, modify, distribute, or create derivative works from the
            Service.
          </li>
          <li>
            Use any data mining, robots, or similar data gathering or extraction
            tools on the Service.
          </li>
        </Typography>

        <Typography variant="h5" paragraph>
          6. User Content
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>6.1. User Submissions</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          You may submit reviews, comments, and other content ("User Content").
          By submitting User Content, you grant us a non-exclusive,
          royalty-free, worldwide, perpetual license to use, modify, and display
          such content.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>6.2. Prohibited Content</strong>
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>Offensive, defamatory, or otherwise inappropriate.</li>
          <li>
            Infringing on the rights of any third party, including intellectual
            property rights.
          </li>
        </Typography>

        <Typography variant="h5" paragraph>
          7. Disclaimers and Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>7.1. Disclaimers</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          The Service is provided "as is" and "as available" without warranties
          of any kind. We do not warrant that the Service will be uninterrupted,
          error-free, or free from viruses or other harmful components.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>7.2. Limitation of Liability</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          To the fullest extent permitted by law, we disclaim all liability for
          any indirect, incidental, or consequential damages, loss of profits,
          data, or goodwill, and damages exceeding the total amount you paid to
          us in the past six months.
        </Typography>

        <Typography variant="h5" paragraph>
          8. Indemnification
        </Typography>
        <Typography variant="body1" paragraph>
          You agree to indemnify and hold harmless [App Name], its affiliates,
          and its licensors from any claims, damages, liabilities, and expenses
          arising out of your use of the Service or violation of these Terms.
        </Typography>

        <Typography variant="h5" paragraph>
          9. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms are governed by and construed in accordance with the laws
          of [State/Country], without regard to its conflict of law principles.
        </Typography>

        <Typography variant="h5" paragraph>
          10. Dispute Resolution
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>10.1. Informal Resolution</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          You agree to attempt to resolve any dispute informally by contacting
          us before seeking formal legal action.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>10.2. Arbitration</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          If a dispute cannot be resolved informally, it shall be settled by
          binding arbitration in accordance with the rules of the [Arbitration
          Association]. The arbitration shall take place in [Location], and the
          language of arbitration shall be [Language].
        </Typography>

        <Typography variant="h5" paragraph>
          11. Miscellaneous
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>11.1. Entire Agreement</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          These Terms constitute the entire agreement between you and [App Name]
          regarding the Service and supersede all prior agreements.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>11.2. Severability</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions shall remain in full force and
          effect.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>11.3. Waiver</strong>
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          Our failure to enforce any right or provision of these Terms shall not
          constitute a waiver of such right or provision.
        </Typography>

        <Typography variant="h5" paragraph>
          12. Contact Information
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          For questions or concerns about these Terms, please contact us at:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>ZAPERR Email: Contact@zaperr.com</li>
          <li>
            Address: 0052, Ashok Vihar, G Buil Society, Hyderabad, Telangana
            500048
          </li>
          <li>Contact no: (give office landline number)</li>
        </Typography>
      </Box>
    </Container>
  );
}

export default TermsAndConditions;
