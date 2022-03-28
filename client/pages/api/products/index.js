import Product from "../../../models/Product";
import dbConnect from "../../../config/dbConfig";

const count = 12;
const productHandler = async(req,res)=>{

  if (req.method==='GET') {
    await dbConnect();
    const {page,category,brand} = req.query;
    console.log(page);
    let currentPage = page || 1;
    let filters = {};
    if (category) filters = {...filters,category}
    if (brand) filters = {...filters,brand}
    try {
      const productList = await Product.find({...filters}).skip(count*(currentPage-1)).limit(count).exec();
      if (productList.length) {
        return res.json({
          state : true,
          data : productList
        });
      }
      else {
        return res.json({
          state : false
        })
      }
    }catch(err) {
      console.log(err)
      return res.status(404).json({message : 'Something went wrong!'});
    }  
  }
}

export default productHandler;