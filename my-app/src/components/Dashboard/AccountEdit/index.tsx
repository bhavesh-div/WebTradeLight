import {
  Button,
  Box,
  Typography,
  TextField,
  Dialog,
  DialogContent,
  FormLabel,
  Grid,
  FormHelperText,
} from "@mui/material";
import MuiTabs from "../../common/MuiTabs";
import * as yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const profileTabs = ["Profile", "Address Details", "Bank Info", "Verification"];
export default function AccountEdit({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [profileTab, setProfileTab] = useState(0);

  const handleChangeProfileTab = (value: number) => {
    setProfileTab(value);
  };

  return (
    <>
      <Dialog
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialogContent-root": {
            maxWidth: { xs: "100vw", md: "737px" },
          },
        }}
      >
        <DialogContent>
          <MuiTabs
            tabData={profileTabs}
            handleChange={handleChangeProfileTab}
            value={profileTab}
            variant="fullWidth"
          />
          <Typography
            sx={{
              my: "20px",
              fontSize: "22px",
              lineHeight: "27px",
              fontWeight: "500",
              letterSpacing: "-0.01em",
              fontFamily: "Inter",
              fontStyle: "normal",
              color: "white",
            }}
          >
            Personal Details
          </Typography>
          <Box component="form">
            <Grid container spacing={2.75}>
              <Grid item xs={12} lg={6}>
                <FormLabel id="firstName">FIRST NAME</FormLabel>
                <TextField fullWidth id="firstName" name="firstName" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="lastName">LAST NAME</FormLabel>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  type="lastName"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="dateOfBirth">DATE OF BIRTH</FormLabel>
                <DatePicker
                  sx={{ width: "100%", color: "white" }}
                  format="DD/MM/YYYY"
                  maxDate={moment(Date.now())}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="faxNumber">FAX NUMBER</FormLabel>
                <TextField fullWidth id="faxNumber" name="faxNumber" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="phoneNumber">PHONE NUMBER</FormLabel>
                <TextField fullWidth id="phoneNumber" name="phoneNumber" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="countryOfIssuance">
                  COUNTRY OF ISSUANCE OF PASSPORT
                </FormLabel>
                <TextField
                  fullWidth
                  id="countryOfIssuance"
                  name="countryOfIssuance"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <FormLabel id="taxIdentification">
                  TAX IDENTIFICATION NUMBER(TIN)
                </FormLabel>
                <TextField
                  fullWidth
                  id="taxIdentification"
                  name="taxIdentification"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="citizenship">CITIZENSHIP(S)</FormLabel>
                <TextField fullWidth id="citizenship" name="citizenship" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="maritalStatus">MARITAL STATUS</FormLabel>
                <TextField fullWidth id="maritalStatus" name="maritalStatus" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormLabel id="neoCircleId">NEO CIRCLE ID</FormLabel>
                <TextField fullWidth id="neoCircleId" name="neoCircleId" />
              </Grid>
            </Grid>
            <Button
              color="info"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 2.75 }}
            >
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
