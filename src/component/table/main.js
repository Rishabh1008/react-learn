import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import MainContent from "./maincontent";
import CustomizedTables from "./table";
import tableHead from "./tablehead";
import tableData from "./tabledata";
import Content from "./content";

function MyTable() {
  const [open, setOpen] = useState(false);





  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen}>Table view</button>
      <div>
        <MainContent Content={Content}/>
      </div>
      <Modal open={open} >
        <CustomizedTables handleClose={handleClose} tableData={tableData} tableHead={tableHead}/>
      </Modal>
    </div>
  );
}

export default MyTable;
