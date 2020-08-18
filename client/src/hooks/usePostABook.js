import React, { useEffect } from "react";
const axios = require("axios");
const qs = require("qs");

function PostABook(tile) {
  let data = qs.stringify({
    title: tile.title,
    authors: tile.author,
    image: tile.img,
    link: tile.link,
  });
  let config = {
    method: "post",
    url: "https://hidden-garden-49902.herokuapp.com/api/new",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default PostABook;
