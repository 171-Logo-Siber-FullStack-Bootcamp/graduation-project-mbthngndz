const db = require("../models");
const sequelize = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const logger = require("../../server/logger/index")

// Create and Save a new Category
const createCategory = async(req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  upload.single(req.file.filename)
  const filePath = `${req.protocol}://${req.headers["host"]}/${req.file.filename}`

  // Create a Category
  const category = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: filePath,
    price: req.body.price,
  };
  // Save Category in the database
  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category.",
      });
    });
};

// Retrieve all Categorys from the database.
const getAllCategories = async(req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  Category.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorys.",
      });
    });
};

// Find a single Category with an id
const getOneCategory = async(req, res) => {
  const id = req.params.id;
  Category.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id,
      });
    });
};

// Update a Category by the id in the request
const updateCategory = async(req, res) => {
  const id = req.params.id;
  Category.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};
// Delete a Category with the specified id in the request
const deleteCategory = async(req, res) => {const id = req.params.id;
    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id
        });
      });};


module.exports = { createCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory };
