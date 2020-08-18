import React, { useEffect } from "react";
const axios = require("axios");
const qs = require("qs");

function DeleteABook(tile) {
  let config = {
    method: "delete",
    url: `https://hidden-garden-49902.herokuapp.com/api/delete/${tile.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default DeleteABook;
