const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema(
  {
    entityName: { type: String },
    category: { type: String },
    addressLine: { type: String },
    area: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    country: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    attachments: { type: [String] },
    status: { type: String, default: "Active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Entity', entitySchema);
