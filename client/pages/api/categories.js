import dbConnect from "../../config/dbConfig"
import Category from "../../models/Category"

const categoryHandler = async(req,res)=>{
    await dbConnect();
    if (req.method==='GET') {
        try { 
        const {limit} = req.query;
        let categories = [];
        if (limit) {
            categories = await Category.find({}).limit(limit).exec();
        }
        else {
            categories = await Category.find({}).exec()
        }
        return res.json({
            state : true,
            data : categories
        })
    }catch(err) {
        console.log(err);
        res.status(500).json({message : 'Something went wrong'})
    }

        return;
    }
}

export default categoryHandler;