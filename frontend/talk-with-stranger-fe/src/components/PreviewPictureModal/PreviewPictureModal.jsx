import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Slide, Stack } from "@mui/material";

const style = {
  borderRadius: "10px",
  p: 2,
  backgroundColor: "white",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  flexDirection: "column",
  width: "500px",
};

const PreviewPictureModal = ({ onClose, onSave, open, src }) => {
  return (
    // <div>
    <Modal
      aria-labelledby="preview-img-modal"
      aria-describedby="img-display"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slide in={open}>
        <Box sx={style}>
          <Avatar
            variant="rounded"
            src={src}
            sx={{ width: "100%", flex: "1" }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            spacing={2}
          >
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onSave}>
              Save
            </Button>
          </Stack>
        </Box>
      </Slide>
    </Modal>
    // </div>
  );
};

export default PreviewPictureModal;
