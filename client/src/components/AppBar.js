import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextButtons from "./Button.js";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexDirection: "row",
    // marginLeft: theme.spacing(20),
    alignItems: "flex-start",
    justifyContent: "space-around",
    display: "flex",
  },
  search: {
    alignSelf: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: 15,
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: `100%`,
    "&:focus": {
      width: `100%`,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
  toolbar: {
    minHeight: 100,
    flexDirection: "column",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

export default function SearchAppBar({ setshowSaved, setQuery }) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowSaved(false);
    setQuery(searchText);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Google Book Search
            <TextButtons
              setshowSaved={setshowSaved}
              className={classes.saveButton}
            />
          </Typography>

          <form className={classes.search} onSubmit={handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onInput={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
