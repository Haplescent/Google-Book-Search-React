// we would like to store name, phone, number, address, title,

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Book;
};
