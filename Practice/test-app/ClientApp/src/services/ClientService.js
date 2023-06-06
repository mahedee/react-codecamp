import axios from "axios";
import { Base_API_URL } from "../utils/BaseURL";

export const GetAllClient = () =>{
    try{
        const response = axios.get(Base_API_URL + `/Clients/GetAll`);
        return response;

    }catch(error){
        throw error;
    }
}


export const AddItemToCart = (data) =>{
    try{
        const response = axios.post(Base_API_URL + `/Cart/AddItemToCart`, data);
        return response;
    }catch(error){
        throw error;
    }
}


export const GetUsersCart = () =>{
    try{
        const response = axios.get(Base_API_URL + `/Cart/GetUsersCart`);
        return response;

    }catch(error){
        throw error;
    }
}

  export const EditCartItem = (id, data) => {
    try {
      console.log("input data", data);
      const response = axios.put(Base_API_URL + `/Cart/Edit/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  };


export const DeleteCartItem = (id) => {
    try {
      const response = axios.delete(Base_API_URL + `/Cart/Delete/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  