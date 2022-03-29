module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
    });
    return Category;
  };