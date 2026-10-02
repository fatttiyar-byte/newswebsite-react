import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827",
        color: "#fff",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* Logo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Nova News
            </Typography>

            <Typography color="grey.400" style={{direction:"rtl"}}>
              آخرین اخبار جهان، فناوری، ورزش، سلامت و تجارت را در سریع‌ترین
              زمان ممکن دنبال کنید.
            </Typography>
          </Grid>



          {/* Social */}
         <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "left", ml: "auto" }}>
            <Typography variant="h6" gutterBottom>
              ما را دنبال کنید
            </Typography>

            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>

            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>

            <IconButton color="primary">
              <TelegramIcon />
            </IconButton>

            <IconButton color="primary">
              <LanguageIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "grey.700" }} />

        <Typography
          align="center"
          color="grey.500"
        >
           2026 Nova News | Designed with React & Material UI | By Fatyar
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;