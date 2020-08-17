import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",
      marginLeft: theme.spacing(20),
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
}));

export default function TextButtons({ setshowSaved }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={() => {
          setshowSaved(true);
        }}
        variant="contained"
      >
        Saved
      </Button>
    </div>
  );
}
