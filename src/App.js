import {
  Button,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#e3f2fd"
    }
  }
});

const useStyles = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: "2px 2px 2px 2px",
    color: "black"
  },
  output: {
    border: "1px solid gray",
    boxShadow: "2px 2px lightgray",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    display: "flex",
    width: "30%",
    justifyContent: "center",
    marginLeft: "auto",
    marginTop: "20px",
    marginRight: "auto",
    padding: "20px"
  }
});

export default function App() {
  const classes = useStyles();

  useEffect(() => {
    setCalc("");
  }, []);

  const [calc, setCalc] = useState("");

  const handleCalc = () => {
    let answer = "";
    try {
      answer = eval(calc);
    } catch (error) {
      alert("Incorrect use of calculator");
      console.log("Incorrect use of calculator");
    }

    setCalc(String(answer));
  };

  const handleClear = () => {
    setCalc("");
  };

  const handleBackspace = () => {
    setCalc(calc.slice(0, calc.length - 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h2">Calculator</Typography>
        <Grid container spacing={1} className={classes.button}>
          {/* TOP ROW */}
          <Grid item xs={12}>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 7)}
            >
              <strong>7</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 8)}
            >
              <strong>8</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 9)}
            >
              <strong>9</strong>
            </Button>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="secondary"
              onClick={() => setCalc(calc + "-")}
            >
              <strong>-</strong>
            </Button>
          </Grid>

          {/* SECOND ROW */}
          <Grid item xs={12}>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 4)}
            >
              <strong>4</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 5)}
            >
              <strong>5</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 6)}
            >
              <strong>6</strong>
            </Button>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="secondary"
              onClick={() => setCalc(calc + "+")}
            >
              <strong>+</strong>
            </Button>
          </Grid>

          {/* THIRD ROW */}
          <Grid item xs={12}>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 1)}
            >
              <strong>1</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 2)}
            >
              <strong>2</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 3)}
            >
              <strong>3</strong>
            </Button>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="secondary"
              onClick={() => setCalc(calc + "/")}
            >
              <strong>/</strong>
            </Button>
          </Grid>

          {/* BOTTOM ROW */}
          <Grid item xs={12}>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              // onClick={() => setCalc(".")}
            >
              <strong>.</strong>
            </Button>
            <Button
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              variant="contained"
              onClick={() => setCalc(calc + 0)}
            >
              <strong>0</strong>
            </Button>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="primary"
              onClick={() => handleCalc()}
            >
              <strong>=</strong>
            </Button>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="secondary"
              onClick={() => setCalc(calc + "*")}
            >
              <strong>*</strong>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              onClick={handleBackspace}
            >
              <strong>BACKSPACE</strong>
            </Button>
            <Button
              variant="contained"
              style={{ margin: "2px", backgroundColor: "#cecece" }}
              onClick={handleClear}
            >
              <strong>CLEAR</strong>
            </Button>
          </Grid>
        </Grid>
        <hr style={{ marginTop: "50px", marginBottom: "50px", width: "35%" }} />

        <Typography variant="h5" style={{ textDecoration: "underline" }}>
          <strong>OUTPUT</strong>
        </Typography>
        <Typography variant="h6" className={classes.output}>
          <strong>{calc}</strong>
        </Typography>
      </div>
    </ThemeProvider>
  );
}
