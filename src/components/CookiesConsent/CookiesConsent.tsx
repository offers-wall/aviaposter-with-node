import CookieConsent from "react-cookie-consent";
import { useTheme } from "@mui/material/styles";
import { cookiesConsent } from "./cookiesConsentData";

export default function CookiesConsent() {
  const theme = useTheme();

  return (
    <CookieConsent
      buttonText={cookiesConsent.button}
      buttonStyle={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "4px",
        fontSize: "16px",
      }}
      cookieName="user_preferences"
      expires={30}
      location="bottom"
      style={{
        background: theme.palette.text.secondary,
        color: theme.palette.text.primary,
      }}
      onAccept={() => {}}
    >
      {cookiesConsentData.text}
    </CookieConsent>
  );
}
