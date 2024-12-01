const CreateNewReq = require("../models/createNewReqSchema");
const empModel = require("../models/empModel");
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

const postComments = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const empData = await empModel.findOne({ _id: data.senderId }, { name: 1, empId: 1 });

    const commentData = {
      senderId: data.senderId,
      senderName: empData.name,
      message: data.message,
      topic: data.topic,
      timestamp: new Date(),
    };

    const updatedRequest = await CreateNewReq.findByIdAndUpdate(
      { _id: id },
      { $push: { commentLogs: commentData } },
      { new: true }
    );

    if (updatedRequest) {
      res.status(200).json({
        message: "Comment added successfully",
        updatedRequest,
      });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error in posting the comments", error: err.message });
  }
};


const getAllChats = async (req, res) => {
  try {
    console.log("Welcome to fetch chats", req.params);

    
    const chatData = await CreateNewReq.findOne(
      { _id: req.params.id },
      { commentLogs: 1 } 
    );
    
    console.log(chatData);


    res.status(200).json({ message: "Chat data fetched successfully", chatData });

  } catch (err) {
    console.log("Error in fetching chats", err);
    res.status(500).json({ message: "Error in fetching chats", error: err.message });
  }
};



module.exports = {
  addReqForm,
  postComments,
  getAllChats
};
