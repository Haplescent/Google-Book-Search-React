import React, { useEffect } from "react";
import axios from "axios";

function useGetAllBooks(setTileData, showSaved, query) {
  // const getAllbooks = useEffect(() => {

  // });

  useEffect(() => {
    let bookData;
    console.log(showSaved);
    if (showSaved) {
      console.log("getting info from script");
      // bookData = [
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      //   {
      //     img:
      //       "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
      //     title: "Lehninger Principles of Biochemistry",
      //     author: "David L. Nelson, Michael M. Cox",
      //     saved: true,
      //   },
      // ];
      var config = {
        method: "get",
        url: "https://hidden-garden-49902.herokuapp.com/api/all",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          let jsonString = JSON.stringify(response.data);
          let jsonObject = JSON.parse(jsonString);
          jsonObject.forEach((book) => {
            book.saved = true;
            book.img = book.image;
          });
          console.log(jsonObject);
          setTileData(jsonObject);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("getting info from api call");
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then((response) => {
          let jsonString = JSON.stringify(response.data.items);
          let jsonArray = JSON.parse(jsonString);
          // console.log(typeof jsonArray);
          // console.log(jsonArray);
          let bookData = jsonArray.map((item) => {
            let returnObject = {};
            // console.log(item.volumeInfo);
            try {
              returnObject.title = item.volumeInfo.title;
              returnObject.author = item.volumeInfo.authors[0];
              returnObject.link = item.volumeInfo.infoLink;
              returnObject.img = item.volumeInfo.imageLinks.thumbnail;
            } finally {
              return returnObject;
            }
          });
          console.log(bookData);
          setTileData(bookData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setTileData, showSaved, query]);
}

export default useGetAllBooks;
