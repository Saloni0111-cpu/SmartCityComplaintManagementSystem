import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({message: "No Token"})

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch {
            res.status(401).json({message: "INVALID TOKEN"});
        }
};

export default authMiddleware;