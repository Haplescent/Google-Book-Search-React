import React, { useEffect } from "react";
import axios from "axios";

function useGetAllBooks(setTileData, showSaved, query) {
  // const getAllbooks = useEffect(() => {

  // });

  useEffect(() => {
    setTileData([]);
    let bookData;
    // console.log(showSaved);
    if (showSaved) {
      // console.log("getting info from script");

      var config = {
        method: "get",
        url: "https://hidden-garden-49902.herokuapp.com/api/all",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          let jsonString = JSON.stringify(response.data);
          let jsonObject = JSON.parse(jsonString);
          // console.log(jsonObject);
          bookData = [];
          jsonObject.forEach((book) => {
            let bookDataObject = {};
            bookDataObject.id = book.id;
            bookDataObject.author = book.authors;
            bookDataObject.title = book.title;
            bookDataObject.img = book.image;
            bookDataObject.link = book.link;
            bookDataObject.saved = true;
            bookData.push(bookDataObject);
          });
          console.log(bookData);
          setTileData(bookData);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // console.log("getting info from api call");
      setTileData([]);
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then((response) => {
          let jsonString = JSON.stringify(response.data.items);
          let jsonArray = JSON.parse(jsonString);
          // console.log(typeof jsonArray);
          // console.log(jsonArray);
          bookData = jsonArray.map((item) => {
            let returnObject = {};
            console.log(item.volumeInfo);
            try {
              returnObject.title = item.volumeInfo.title;
              returnObject.author = item.volumeInfo.authors[0];
              returnObject.link = item.volumeInfo.infoLink;
              returnObject.img = item.volumeInfo.imageLinks.thumbnail;
            } finally {
              return returnObject;
            }
          });
          // console.log(bookData);
          setTileData(bookData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setTileData, showSaved, query]);
}

export default useGetAllBooks;
