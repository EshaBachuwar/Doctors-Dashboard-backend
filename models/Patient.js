import mongoose from 'mongoose';
const { Schema } = mongoose;

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum : ['Male','Female','Non-binary'],
    required:true
  },
  phone: {
    type: Number,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  address:{
    type:String
  },
  symptoms:{
    type:String,
    enum:['depression','anxiety','substanceAbuseDisorder']
  },
  currentlyOnAnyMedication:{
    type:Boolean
  },
  hasDiabetesLiverProblems:{
    type:Boolean
  },
  hasHeartProblems:{
    type:Boolean
  },
  medicalPrescribed:{
    type:String
  },
  date:{
    type:Date,
    required:true,
    default:Date.now
  }
});

export default mongoose.model('Patient', PatientSchema);
