const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema(
  {
    entityName: { type: String }, // Entity Name
    category: { type: String },  // Category
    addressLine: { type: String }, // Address Line
    area: { type: String },      // Area
    city: { type: String },      // City
    state: { type: String },     // State/Province
    pincode: { type: String },   // Postal/Zip Code
    country: { type: String },   // Country
    landmark: { type: String },                  // Landmark
    latitude: { type: Number },  // Latitude
    longitude: { type: Number }, // Longitude
    attachments: { type: [String] },            // File attachments (array of file paths or URLs)
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

module.exports = mongoose.model('Entity', entitySchema);
