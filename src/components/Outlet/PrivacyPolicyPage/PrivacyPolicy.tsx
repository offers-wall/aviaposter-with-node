import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';
import Container from '@/components/Outlet/Container';
import { footer } from '@/components/Layout/Footer/footerData';
import meta from '@/constants/meta';
import * as generalClasses from '@/styles/general';

export default function PrivacyPolicy() {
  return (
    <Box
      css={generalClasses.outletPadding}
      sx={{ backgroundColor: (theme: Theme) => theme.palette.text.secondary }}>
      <Container>
        <Typography
          variant='h3'
          gutterBottom>
          {meta.title} Privacy Policy
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or
          make a purchase from {meta.title} (the “Site”).
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          PERSONAL INFORMATION WE COLLECT
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          When you visit the Site, we automatically collect certain information about your device, including information
          about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          Additionally, as you browse the Site, we collect information about the individual web pages or products that
          you view, what websites or search terms referred you to the Site, and information about how you interact with
          the Site. We refer to this automatically-collected information as “Device Information”.
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          We collect Device Information using the following technologies:
        </Typography>
        <ol>
          <li>
            Cookies: data files that are placed on your device or computer and often include an anonymous unique
            identifier. For more information about cookies, and how to disable cookies, visit
            <a
              href='http://www.allaboutcookies.org'
              target='_blank'
              rel='noopener noreferrer'>
              http://www.allaboutcookies.org
            </a>
          </li>
          <li>
            Log files: track actions occurring on the Site, and collect data including your IP address, browser type,
            Internet service provider, referring/exit pages, and date/time stamps.
          </li>
          <li>
            Web beacons, tags, and pixels: electronic files used to record information about how you browse the Site.
          </li>
        </ol>
        <Typography
          variant='body1'
          paragraph>
          Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain
          information from you, including your name, billing address, shipping address, payment information (including
          credit card numbers, email address, and phone number). We refer to this information as “Order Information”.
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information
          and Order Information.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          HOW DO WE USE YOUR PERSONAL INFORMATION?
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          We use the Order Information that we collect generally to fulfill any orders placed through the Site
          (including processing your payment information, arranging for shipping, and providing you with invoices and/or
          order confirmations). Additionally, we use this Order Information to:
        </Typography>
        <ol>
          <li>Communicate with you</li>
          <li>Screen our orders for potential risk or fraud</li>
          <li>
            When in line with the preferences you have shared with us, provide you with information or advertising
            relating to our products or services
          </li>
        </ol>
        <Typography
          variant='body1'
          paragraph>
          We use the Device Information that we collect to help us screen for potential risk and fraud (in particular,
          your IP address), and more generally to improve and optimize our Site (for example, by generating analytics
          about how our customers browse and interact with the Site, and to assess the success of our marketing and
          advertising campaigns).
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          SHARING YOUR PERSONAL INFORMATION
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          Finally, we may also share your Personal Information to comply with applicable laws and regulations, to
          respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise
          protect our rights.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          BEHAVIOURAL ADVERTISING
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          As described above, we use your Personal Information to provide you with targeted advertisements or marketing
          communications we believe may be of interest to you. For more information about how targeted advertising
          works, you can visit the Network Advertising Initiative’s (“NAI”) educational page.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          DO NOT TRACK
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track
          signal from your browser.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          DATA RETENTION
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          When you place an order through the Site, we will maintain your Order Information for our records unless and
          until you ask us to delete this information.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          CHANGES
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices
          or for other operational, legal or regulatory reasons.
        </Typography>
        <Typography
          variant='h6'
          gutterBottom>
          CONTACT US
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          For more information about our privacy practices, if you have questions, or if you would like to make a
          complaint, please contact us by e‑mail at {footer.contactsBlock.contacts[2].text} or by mail using the details
          provided below:
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          {meta.title}
          <br />
          [Re: Privacy Compliance Officer]
          <br />
          {meta.title} {footer.contactsBlock.contacts[0].text}
        </Typography>
      </Container>
    </Box>
  );
}
