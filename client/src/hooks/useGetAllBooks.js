import React, { useEffect } from "react";
import axios from "axios";

function useGetAllBooks(setBooks) {
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
    const bookData = [
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg",
        title: "Lehninger Principles of Biochemistry",
        author: "David L. Nelson, Michael M. Cox",
      },
    ];
    setBooks(bookData);
  }, []);
}

export default useGetAllBooks;
