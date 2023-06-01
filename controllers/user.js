import User from "../models/User.js"

export const getAUser =async (req,res,next)=>{
    try {
        const UserById=await User.findById(req.params.id)
        res.status(200).json(UserById)
    } catch (error) {
        next(error)
    }
}

export const getAllUsers =async (req,res,next)=>{
    try {
        const allUsers=await User.find()
        res.status(200).json(allUsers)
    } catch (err) {
        next(err)
    }
}
export const updateUser=async (req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{ $set: req.body },{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}