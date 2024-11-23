const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema(
  {
    firstName: { type: String },        // Vendor's First Name
    lastName: { type: String },         // Vendor's Last Name
    streetAddress: { type: String },    // Street Address
    streetAddress2: { type: String },   // Street Address Line 2
    city: { type: String },             // City
    state: { type: String },            // State/Province
    postalCode: { type: String },       // Postal/Zip Code
    country: { type: String },          // Country
    phoneNumber: { type: String },      // Phone Number
    email: { type: String },            // Email Address
    textarea: { type: String }, 
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

module.exports = mongoose.model('Vendor', vendorSchema);
