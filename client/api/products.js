import { axios } from "./auth"

export const allProductsAPI = (query)=>{
    return axios.get('/products', {params : {...query}});
}