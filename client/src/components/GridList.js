import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';

import DeleteABook from "../hooks/useDeleteABook";
import useGetAllBooks from "../hooks/useGetAllBooks";
import PostABook from "../hooks/usePostABook";
// import useSearchForBooks from "../hooks/useSearchForBooks";

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
  bottomBar:{
    subtitle: {
      overflowWrap: "normal"
    }
  }
  
}));

export default function AdvancedGridList({ showSaved, query }) {
  const classes = useStyles();
  const [tileData, setTileData] = useState([]);

  useGetAllBooks(setTileData, showSaved, query);

  const showFavoriteButton = (tile) => {
    return (
      <IconButton
        aria-label={`star ${tile.title}`}
        className={classes.icon}
        onClick={() => {
          PostABook(tile);
        }}
      >
        <StarBorderIcon />
      </IconButton>
    );
  };

  const showDeleteButton = (tile) => {
    return (
      <IconButton
        aria-label={`delete ${tile.title}`}
        className={classes.icon}
        onClick={() => {
          DeleteABook(tile);
          setTileData(tileData.filter((eachTile) => eachTile.id !== tile.id));
        }}
      >
        <DeleteIcon />
      </IconButton>
    );
  };

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={500}
        spacing={1}
        className={classes.gridList}
        cols={2}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={1} rows={1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                tile.saved ? showDeleteButton(tile) : showFavoriteButton(tile)
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            <GridListTileBar
              className={classes.bottomBar}
              titlePosition="bottom"
              subtitle={<span>by: {tile.author}  <p>{tile.description}</p> </span>}
              actionIcon={
                <Link aria-label={`info about ${tile.title}`} className={classes.icon} href={tile.link}>
                  <InfoIcon />
                </Link>
              }
              actionPosition="right"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
