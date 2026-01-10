//Controllers Job is to recieve request -> talk to db -> send response

//import model
//create complaint 
//get complaint
//Think of it as: Form → Auth → Upload → Save → Send back

import complaint from "../models/complaint.js";


export const createComplaint = async(req, res) => {
    const complaint = await complaint.create({
        title:req.body.title,
        description:req.body.description,
        image:req.file?.filename,
        user:req.user.id
    });

    res.json(complaint);
};

export const getComplaint = async(req, res) => {
    const complaints =await complaint.find() ;
    res.json(complaints)

    }
