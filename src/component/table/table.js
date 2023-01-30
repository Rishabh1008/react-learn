import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const { handleClose, tableData, tableHead } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ background: "#fff" }} />
            {tableHead.map((tableHead) => (
              <TableCell align="right">
                {tableHead.heading}
                <br />
                {tableHead.subHeading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tableData) => (
            <TableRow key={tableData.label}>
              <TableCell component="th" scope="row">
                {tableData.label}
              </TableCell>
              {tableData.value.map((tableData) => (
                <TableCell>
                  {tableData.val.map((tableData) => (
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <List>
                            {tableData.v1.map((tableData) => (
                              <ListItem>{tableData.list}</ListItem>
                            ))}
                          </List>
                        </TableCell>
                        <TableCell>
                          <List>
                            {tableData.v2.map((tableData) => (
                              <ListItem>{tableData.list}</ListItem>
                            ))}
                          </List>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={handleClose}>close</button>
    </TableContainer>
  );
}
