// LoginFormStyles.js

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FormLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const LoginFormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#2E3034",
  minHeight: "100vh",
  "@media (max-width: 600px)": {
    // Apply styles for screens up to 600px width (mobile)
    backgroundColor: "#191b20",
  },
}));

export const LoginFormGrid = styled(Grid)(({ theme }) => ({
  height: "100vh",
}));

export const LoginFormBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#191B20",
  p: "60px 45px",
  width: "484px",
  "@media (max-width: 600px)": {
    // Apply styles for screens up to 600px width (mobile)
    backgroundColor: "#191b20", // Set background color to black for mobile devices
  },
}));

export const LoginFormInputLabel = styled(FormLabel)(({ theme }) => ({
  color: "#979EB2",
  textTransform: "uppercase",
  lineHeight: "37px",
}));

export const LoginFormTextField = styled(TextField)(({ theme }) => ({
  background: "#191B20",
  border: "1px solid #3F4555",
  borderRadius: "2px",
}));

export const LoginFormForgotPasswordLabel = styled(FormLabel)(({ theme }) => ({
  color: "#979EB2",
  lineHeight: "37px",
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  marginBottom: "15px",
}));

export const LoginFormSignInButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "51px",
  background: " #009CD6",
  border: "1px solid #69C2E3",
  borderRadius: "4px",
  padding: "18px",
}));
