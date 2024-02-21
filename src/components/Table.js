import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Checkbox,
  Alert,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../utils/customTheme";
import styled from "@emotion/styled";

const AnimatedAlert = styled(Alert)`
  position: fixed;
  top: 8em;
  right: 20px;
  animation: fade-in 0.5s;
  border: 2px solid #000;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function BetDisplay({ bets, onDelete }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectAll = () => {
    setIsSelectAll(!isSelectAll);
    setSelectedRows(isSelectAll ? [] : bets.map((_, index) => index));
  };

  const handleSelectRow = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((i) => i !== index)
        : [...prevSelectedRows, index]
    );
  };

  const handleDeleteSelected = () => {
    // const selectedBets = selectedRows.map((index) => bets[index]);
    // onDelete(selectedBets);
    setSelectedRows([]);
    setIsSelectAll(false);
    setShowAlert(true);
  };

  const totalAmount = bets.reduce((total, bet) => {
    return Number(total) + Number(bet.amount);
  }, 0);

  return (
    <div
      style={{
        marginTop: 20,
        textShadow: "0px 0px 8px #FFFFFF",
        background: "white",
        maxHeight: 300,
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ margin: 2 }}>
          Bet Details
          {selectedRows.length > 0 && (
            <IconButton onClick={handleDeleteSelected}>
              <DeleteIcon />
            </IconButton>
          )}
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ textAlign: "right", marginRight: 20 }}
          >
            Total: {totalAmount.toFixed(2)}
          </Typography>
        </div>
      </div>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead style={{ background: "#e0e0e0" }}>
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={isSelectAll}
                  onChange={handleSelectAll}
                  color="primary"
                />
              </TableCell>
              <TableCell>Sl No</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bets.map((bet, index) => (
              <TableRow
                key={bet.slNo}
                onClick={() => handleSelectRow(index)}
                style={{
                  cursor: "pointer",
                  background: selectedRows.includes(index)
                    ? theme.palette.primary.main
                    : "transparent",
                }}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
                    color="secondary"
                  />
                </TableCell>
                <TableCell>{bet.slNo}</TableCell>
                <TableCell>{bet.number}</TableCell>
                <TableCell>{bet.amount}</TableCell>
                <TableCell>{bet.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {showAlert && (
        <AnimatedAlert severity="success" onClose={() => setShowAlert(false)}>
          Selected rows deleted successfully
        </AnimatedAlert>
      )}
    </div>
  );
}

export default BetDisplay;
