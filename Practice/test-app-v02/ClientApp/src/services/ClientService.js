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


export const AddClient = (data) =>{
    try{
        const response = axios.post(Base_API_URL + `/Clients/Add`, data);
        return response;
    }catch(error){
        throw error;
    }
}


export const GetClientById = (id) =>{
    try{
        const response = axios.get(Base_API_URL + `/Clients/` + id);
        return response;

    }catch(error){
        throw error;
    }
}

  export const EditClient = (id, data) => {
    try {
      const response = axios.put(Base_API_URL + `/Clients/Edit/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  };


export const DeleteClient = (id) => {
    try {
      const response = axios.delete(Base_API_URL + `/Clients/Delete/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  