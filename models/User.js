import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
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
    unique:true,
  },
  password:{
    type:String,
    required:true
    },
  designation: {
    type: String,
  },
  hospital: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  experience:{
    type:{years:Number,months:Number}
  },
  
  qualification: {
    type: String,

  },
  last_login:{
    type:String,
  },
  patients:{
    type:Array,
    default:[]
  }
});

export default mongoose.model('User', UserSchema);
