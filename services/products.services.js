const { product } = require("../models/products.model");
const fs = require('fs');

async function createProduct(params, callback) {

  const productModel = new product(params);
  productModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getProducts(params, callback) {
  const productName = params.productName;
  var condition = productName
    ? { productName: { $regex: new RegExp(productName), $options: "i" } }
    : {};

  product
    .find(condition)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getProductById(params, callback) {
  const productId = params.productId;

  product
    .findById(productId)
    .then((response) => {
      if (!response) callback("Not found Product with id " + productId);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function updateProduct(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndUpdate(productId, params, { useFindAndModify: false })
    .then((response) => {
      if (!response) callback(`Cannot update Tutorial with id=${productId}. Maybe Tutorial was not found!`);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function deleteProduct(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndRemove(productId, (err, res) => {
      var imageResponse = res.productImage;
      var imgurl = imageResponse.replace('http://localhost:5000', '');
      console.log(imageResponse);
      fs.unlink("D:/Deployment/project annam/api" + imgurl, (err) => {
        if (err) throw err;
        console.log('successfully deleted file');
      });
    })
    .then((response) => {
      if (!response) callback(`Cannot delete Product with id=${productId}. Maybe Product was not found!`);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
