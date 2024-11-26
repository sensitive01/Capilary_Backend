const reqModel = require("../models/reqModel");

const addReqForm = async (req, res) => {
  try {
    console.log("Welcome to add req", req.body);
    const orderData = req.body;
    const newOrder = new reqModel(orderData);
    await newOrder.save();
    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({
      message: "Error creating order",
      error: err.message,
    });
  }
};

module.exports = {
  addReqForm,
};
