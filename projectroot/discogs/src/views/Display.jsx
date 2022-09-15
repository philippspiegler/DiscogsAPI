import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MyCard from "../components/MyCard";
// import { useTheme, useThemeUpdate } from "../context/ThemeContext";
// import { FormGroup, FormControlLabel, Switch } from "@mui/material";

function Display({ records }) {
  // console.log("props :>> ", records);

  return (
    <>
      <div>
        <Container>
          <Row>
            {records &&
              records.map((ele, i) => {
                return <MyCard ele={ele} key={i} />;
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Display;
