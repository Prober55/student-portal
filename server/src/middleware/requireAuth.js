import jwt from "jsonwebtoken";

export function requireAuth(req,res,next){
    const authHeader=req.headers.authorization || "";

    const token=authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    :null;

    if(!token){
        return res.status(401).json({error:"no token provided"});
    }
    try{
        const decoded=jwt.verify(token,"SECRET123");
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({error:"invalid or expired token"});
    }
}