import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename:(req, res, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
    }
});

export default multer({storage});

//steps to remember this writing of code
//1. Decide where to store file
//2. Decide what name to give files
//3. Create upload middleware
//Your brain should think like this:
// “I want to accept files → I must tell Multer where → I must tell Multer how → then I export upload.”