import { ProductType } from "../types/products";
import { isAuthencicate } from "../utils/localstorage";
import instance from "./instance";

// gọi token and user trong localstorage 

const {token, user} = isAuthencicate();

export const addProduct = (product: ProductType) => {
        const url = `/products/${user._id}`;
        return instance.post(url, product,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })


}



export const list = () => {
    const url = '/products';
    return instance.get(url);

}

export const remove = (id:number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}


export const getProductById = (id:number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}


export const update = (product:ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}
