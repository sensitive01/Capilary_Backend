const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  senderId: { type: String, required: true }, 
  senderName: { type: String, required: true },  
  department: { type: String, required: true }, 
  comment: { type: String, required: true },  
  timestamp: { type: Date, default: Date.now }  
});



const paymentTermSchema = new mongoose.Schema({
  percentageTerm: { type: String },
  percentageAmount: { type: String, default: "" },
  paymentType: { type: String },
  paymentTerm: { type: String },
});

const commercialsSchema = new mongoose.Schema({
  amount: { type: String },
  billTo: { type: String },
  city: { type: String },
  costCentre: { type: String },
  currency: { type: String },
  department: { type: String },
  entity: { type: String },
  paymentTerms: { type: [paymentTermSchema] },
  paymentType: { type: String },
  shipTo: { type: String },
  site: { type: String },
});

const competitiveQuotationSchema = new mongoose.Schema({
  name: { type: String },
  lastModified: { type: Number },
  lastModifiedDate: { type: Date },
  webkitRelativePath: { type: String, default: "" },
  size: { type: Number },
});

const procurementsSchema = new mongoose.Schema({
  competitiveQuotations: { type: [competitiveQuotationSchema] },
  expectedDeliveryDate: { type: Date },
  poExpiryDate: { type: Date },
  quotationDate: { type: Date },
  quotationNumber: { type: String },
  vendor: { type: String },
  remarks: { type: String, default: "" },
});

const serviceSchema = new mongoose.Schema({
  productName: { type: String },
  quantity: { type: String },
  price: { type: String },
});

const suppliesSchema = new mongoose.Schema({
  remarks: { type: String, default: "" },
  services: { type: [serviceSchema] },
  totalValue: { type: Number },
});


const createnewReqSchema = new mongoose.Schema({
  reqid: { type: String, required: true },
  userId: { type: String, required: true },
  userName: { type: String },
  commercials: { type: commercialsSchema },
  procurements: { type: procurementsSchema },
  supplies: { type: suppliesSchema },
  status: { type: String, default: "Pending" },
  commentLogs: [commentSchema],  
});

const CreateNewReq = mongoose.model('CreateNewReq', createnewReqSchema);

module.exports = CreateNewReq;
