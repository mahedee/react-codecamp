import axios from "axios";
import { Base_API_URL } from "../utils/BaseURL";

export const GetAllPackage = () =>{
    try{
        const response = axios.get(Base_API_URL + `/Packages/GetAll`);
        return response;

    }catch(error){
        throw error;
    }
}


export const AddPackage = (data) =>{
    try{
        const response = axios.post(Base_API_URL + `/Packages/Add`, data);
        return response;
    }catch(error){
        throw error;
    }
}


export const GetPackageById = (id) =>{
    try{
        const response = axios.get(Base_API_URL + `/Packages/` + id);
        return response;

    }catch(error){
        throw error;
    }
}

  export const EditPackages = (id, data) => {
    try {
      const response = axios.put(Base_API_URL + `/Packages/Edit/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  };


export const DeletePackage = (id) => {
    try {
      const response = axios.delete(Base_API_URL + `/Packages/Delete/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  