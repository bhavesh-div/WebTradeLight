import React from "react";
import { Dialog, DialogActions } from "@mui/material";
import Usertabs from "./UserTabs";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogActions sx={{ background: "#2E3034", margin: "" }}>
          <Usertabs />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfile;
