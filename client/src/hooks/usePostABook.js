import React, { useEffect } from "react";
const axios = require("axios");
const qs = require("qs");

function PostABook({title, author, img, link, description}) {
  console.log({title, author, img, link, description})
  console.log(author)
  console.log(typeof author)
  let data = qs.stringify({
    title: title,
    author: author,
    image: img,
    link: link,
    description: description,
  });
  console.log(data)
  let config = {
    method: "post",
    url: "https://hidden-garden-49902.herokuapp.com/api/new",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default PostABook;
