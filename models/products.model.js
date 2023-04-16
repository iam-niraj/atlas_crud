const mongoose = require("mongoose");

const product = mongoose.model(
  "products",
  mongoose.Schema(
    {
      "name": String,
      "stockprice": Number,
      "realtimesp": Number,
      "industry": String,
      "size": String,
      "impact": String,
      "products": String,
      "revenue": Number, 
      "icon": String,
      "NonRenewableEnergy": Number,
      "RenewableEnergy":Number,
      "WaterPollution":Number,
      "AirPollution":Number,
      "LandPollution":Number,
      "Recycling":Number

    },
    { timestamps: true }
  )
);

module.exports = {
  product,
};
