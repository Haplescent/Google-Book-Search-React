import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import useDeleteABook from "../hooks/useDeleteABook";
import useGetAllBooks from "../hooks/useGetAllBooks";
import usePostABook from "../hooks/usePostABook";
import useSearchForBooks from "../hooks/useSearchForBooks";

const useStyles = makeStyles((theme) => ({
  // overrides: {
  //     gridList:{col:}
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    fullwidth: true,
    // height: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",

    col: 2,
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

// The example data is structured as follows:

export default function AdvancedGridList({ showSaved }) {
  const classes = useStyles();
  const [tileData, setTileData] = useState([]);

  useGetAllBooks(setTileData, showSaved);

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={300}
        spacing={1}
        className={classes.gridList}
        cols={4}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}