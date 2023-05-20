import { User } from "../models/User.mjs"


export const authMiddleware = async (req,res,next)=> {
    try{
        let user = await User.findById(req.sesion.userID)
        
        if(!user) {
            return res.redirect("/login")
        }
    }catch(err){
        if(err){
            return res.redirect("/login")
        }
    }
    next();
}