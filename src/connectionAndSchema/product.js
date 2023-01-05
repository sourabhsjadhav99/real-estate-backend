const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  propertyType: { type: Array, required: true },
  Negotable: { type: Array },
  price: { type: Number },
  ownership: { type: Array },
  propertyAge: { type: Array },
  propertyApproved: { type: Array },
  properyDescription: { type: String },
  bankLoan: { type: Array },
  length: { type: Number },
  bredth: { type: Number },
  totalArea: { type: Number, required: true },
  areaUnit: { type: Array },
  noOfBhk: { type: Array },
  noOfFloor: { type: Array },
  attached: { type: Array },
  westernToilet: { type: Array },
  furnished: { type: Array },
  carParking: { type: Array },
  lift: { type: Array },
  electricity: { type: String },
  facing: { type: Array },
  name: { type: Array },
  mobile: { type: Number, required: true },
  postedBy: { type: Array },
  saleType: { type: Array },
  featuredPackage: { type: Array },
  ppdPackage: { type: Array },
  image: { data: Buffer, contentType: String },
  email: { type: String },
  city: { type: Array },
  area: { type: Array },
  pincode: { type: Array },
  address: { type: String }, 
  landmark: { type: String },
  lattitude: { type: String },
  longitude: { type: String },
  ppdId:{type: String , unique:true},
  status:{type:String}
  
});
module.exports = mongoose.model("Properties", productSchema);
