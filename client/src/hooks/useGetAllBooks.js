import React, { useEffect } from "react";
import axios from "axios";

function useGetAllBooks(setBooks, showSaved, query) {
  // const getAllbooks = useEffect(() => {
  //   var config = {
  //     method: "get",
  //     url: "https://hidden-garden-49902.herokuapp.com/api/all",
  //     headers: {},
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       let jsonString = console.log(JSON.stringify(response.data));
  //       let jsonObject = JSON.parse(jsonString);
  //       setBooks(jsonObject);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  useEffect(() => {
    let bookData;
    if (showSaved) {
      bookData = [
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
          title: "Lehninger Principles of Biochemistry",
          author: "David L. Nelson, Michael M. Cox",
          saved: true,
        },
      ];
      setBooks(bookData);
    } else {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then((response) => {
          let jsonString = JSON.stringify(response.data.items);
          let jsonArray = JSON.parse(jsonString);
          console.log(typeof jsonArray);
          console.log(jsonArray);
          bookData = jsonArray.map((item) => {
            // console.log(item.volumeInfo);
            return {
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors[0],
              img: item.volumeInfo.imageLinks.thumbnail,
              link: item.volumeInfo.infoLink,
            };
          });
          console.log(bookData);
          setBooks(bookData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setBooks, showSaved, query]);
}

export default useGetAllBooks;
