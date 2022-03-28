import { allProductsAPI } from "../../api/products";
import { PRODUCT_ACTIONS } from "../actionTypes";

export const fillProducts = (query, products)=>async(dispatch)=>{
    try {
        if (products) {
            dispatch({
                type : PRODUCT_ACTIONS.FILL_PRODUCTS,
                payload : products
            });
            return;
        }
        const res = await allProductsAPI(query);
        const fetchedProducts = res.data.data;
        dispatch({
            type : PRODUCT_ACTIONS.FILL_PRODUCTS,
            payload : fetchedProducts
        });
    }catch(err) {
        console.log(err);
    }
}