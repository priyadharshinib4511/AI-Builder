import React from "react";
import { Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Tools = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <AutorenewIcon />
      <FilterAltIcon />
      <Button>Upload</Button>
    </div>
  );
};

export default Tools;
