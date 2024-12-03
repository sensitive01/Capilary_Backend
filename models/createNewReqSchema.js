const mongoose = require('mongoose');

// Existing schemas
const commentSchema = new mongoose.Schema({
  senderId: { type: String },
  senderName: { type: String },
  department: { type: String },
  message: { type: String },
  topic:{ type: String },
  timestamp: { type: Date, default: Date.now },
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



const procurementsSchema = new mongoose.Schema({
  competitiveQuotations: { type: [] },
  poValidityTo: { type: Date },
  poExpiryDate: { type: Date },
  poValidityFrom: { type: Date },
  quotationNumber: { type: String },
  vendor: { type: String },
  remarks: { type: String, default: "" },
  quotationCopy:{type:String},
  quotationDate:{ type: Date }
});

const serviceSchema = new mongoose.Schema({
  description:{type:String},
  productName: { type: String },
  quantity: { type: String },
  price: { type: String },
});

const suppliesSchema = new mongoose.Schema({
  remarks: { type: String, default: "" },
  services: { type: [serviceSchema] },
  totalValue: { type: Number },
});

const complianceSchema = new mongoose.Schema({
  agreementCompliances: {
    type: Map,
    of: Boolean,
  },
});

// New approvals schema
const approvalSchema = new mongoose.Schema({
  departmentName: { type: String }, 
  nextDepartment:{type:String},
  status: { type: String, default: "Pending" }, 
  approverName: { type: String }, 
  approvalId:{type:String},
  approvalDate: { type: Date,default: Date.now() }, 
  remarks: { type: String, default: "" }, 
});


const createnewReqSchema = new mongoose.Schema({
  reqid: { type: String },
  userId: { type: String },
  userName: { type: String },
  commercials: { type: commercialsSchema },
  procurements: { type: procurementsSchema },
  supplies: { type: suppliesSchema },
  status: { type: String, default: "Pending" },
  commentLogs: [commentSchema],
  complinces: { type: complianceSchema },
  approvals: { type: [approvalSchema], default: [] }, 
});

const CreateNewReq = mongoose.model('CreateNewReq', createnewReqSchema);

module.exports = CreateNewReq;
