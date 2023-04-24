import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FormLabel, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {
  LoginFormContainer,
  LoginFormGrid,
  LoginFormSignInButton,
} from "./Login.styles";

const Login = () => {
  return (
    <>
      <LoginFormContainer maxWidth="xl">
        <LoginFormGrid
          container
          justifyContent="center"
          alignItems="center"
          color="primaryLight"
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              background: "#191B20",
              padding: { xs: "16px", md: "24px", lg: "44px 45px" },
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                background: "#292b2f",
                padding: "48px 34px",
                borderRadius: "4px",
              }}
            >
              <Grid item xs={12} sx={{ marginBottom: "13px" }}>
                <div style={{ display: "flex" }}>
                  <FormLabel
                    sx={{ lineHeight: "37px", textTransform: "uppercase" }}
                  >
                    Email
                  </FormLabel>
                </div>

                <TextField
                  sx={{
                    "@media (max-width: 600px)": {
                      width: "100%", // Set width to 100% for smaller screens
                    },
                  }}
                  className="maininput"
                  type="email"
                  name="email"
                  fullWidth
                  label=""
                />
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex" }}>
                  <FormLabel
                    sx={{
                      lineHeight: "30px",
                      textTransform: "uppercase",
                    }}
                  >
                    Password
                  </FormLabel>
                </div>

                <TextField
                  sx={{
                    "@media (max-width: 600px)": {
                      width: "100%", // Set width to 100% for smaller screens
                    },
                  }}
                  className="maininput"
                  type="email"
                  name="email"
                  fullWidth
                  label=""
                />
              </Grid>
              <Typography
                sx={{
                  lineHeight: "30px",
                  fontSize: "15px",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  marginBottom: "15px",
                  color: "white",
                }}
              >
                Forgot your password?
              </Typography>
              <LoginFormSignInButton variant="contained">
                <Typography variant="h1">Sign In</Typography>
              </LoginFormSignInButton>
            </Box>
            <Box>
              <Typography
                sx={{
                  lineHeight: "30px",
                  fontSize: "14px",
                  display: "flex",
                  paddingTop: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15px",
                  color: "white",
                }}
              >
                Don't have an account ?
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  marginTop: "12px",
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    fontSize: "12px",
                    width: "115px",
                    height: "50px",
                    textTransform: "inherit",
                    border: "1px solid #fff",
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    fontSize: "12px",
                    width: "115px",
                    height: "50px",
                    textTransform: "inherit",
                    border: "1px solid #fff",
                  }}
                >
                  Try Demo
                </Button>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "12px",
                    width: "115px",
                    height: "50px",
                    textTransform: "inherit",
                    background: "#009CD6",
                  }}
                >
                  Copy Trading
                </Button>
              </Stack>
            </Box>
          </Grid>
        </LoginFormGrid>
      </LoginFormContainer>
    </>
  );
};

export default Login;
