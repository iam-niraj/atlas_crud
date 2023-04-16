const productsServices = require("../services/products.services");
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");

      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        name: req.body.name,
        stockprice: req.body.stockprice,
        realtimesp: req.body.realtimesp,
        industry: req.body.industry,
        size: req.body.size,
        impact: req.body.impact,
        products: req.body.products,
        revenue: req.body.revenue,
        icon: req.body.icon,
        NonRenewableEnergy: req.body.NonRenewableEnergy,
        RenewableEnergy: req.body.RenewableEnergy,
        WaterPollution: req.body.WaterPollution,
        AirPollution: req.body.AirPollution,
        LandPollution: req.body.LandPollution,
        Recycling: req.body.Recycling
      };

      productsServices.createProduct(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
    }
  });
};

// Retrieve all Products from the database.
exports.findAll = (req, res, next) => {
  var model = {
    productName: req.query.productName,
  };

  productsServices.getProducts(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Find a single Tutorial with an id
exports.findOne = (req, res, next) => {
  var model = {
    productId: req.params.id,
  };

  productsServices.getProductById(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Update a Product by the id in the request
exports.update = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");

      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        name: req.body.name,
        stockprice: req.body.stockprice,
        realtimesp: req.body.realtimesp,
        industry: req.body.industry,
        size: req.body.size,
        impact: req.body.impact,
        products: req.body.products,
        revenue: req.body.revenue,
        icon: req.body.icon,
        NonRenewableEnergy: req.body.NonRenewableEnergy,
        RenewableEnergy: req.body.RenewableEnergy,
        WaterPollution: req.body.WaterPollution,
        AirPollution: req.body.AirPollution,
        LandPollution: req.body.LandPollution,
        Recycling: req.body.Recycling
      };

      console.log(model);

      productsServices.updateProduct(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
    }
  });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res, next) => {
  var model = {
    productId: req.params.id,
  };

  productsServices.deleteProduct(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
