import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";

export const login=async(req,res,next)=>{
    try {
        const { email, password } = req.body;

  // Find the doctor with the given email
  const doctor =  await User.findOne({ email: req.body.email });

  if (doctor && bcrypt.compare(password, doctor.password)) {
    // Update the last_login variable
    doctor.last_login = new Date();

    res.status(200).json({ message: 'Login successful', doctor });
  }
  else {
    res.status(401).json({ message: 'Incorrect email or password' });
    
  }
    } catch (err) {
        next(err)
    }
}

export const register = async (req, res, next) => {
    try {
        const {
            name,
            age,
            gender,
            phone,
            email,
            password,
            designation,
            hospital,
            city,
            state,
            qualification,
          } = req.body.formData;
        
          // Check if the email or phone number is already in use
          const emailExists = false
            const phoneExists =false;
            console.log(req.body);
        
          if (emailExists || phoneExists) {User.
            res.status(401).json({ message: 'Email or phone number already in use' });
          } else {
            // Hash the password
            const hashedPassword = bcrypt.hashSync(password, 10);
        
            // Create a new doctor object
            const newDoctor = new User({
              name:name,
              age:age,
              gender:gender,
              phone:phone,
              email:email,
              password: hashedPassword,
              designation:designation,
              hospital:hospital,
              city:city,
              state:state,
              qualification: qualification,
              last_login: null,
            });
        
            // Add the doctor to the data store
            // await newDoctor.save();
            const data= await User.create(newDoctor)
        
            res.status(201).json(data);
          }
    } catch (err) {
      next(err);
      console.log(err);
    }
  };