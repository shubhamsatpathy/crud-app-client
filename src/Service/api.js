import axios from "axios";
// const URL = "http://localhost:8000";
const URL = "http://localhost:8000";

export const AddUserApi = async (data) => {
  try {
   return await axios.post(`${URL}/add`,data);
  } catch (err) {
    console.log("ADD USER APi FAILED!!", err);
  }
};

export const GetUsersApi= async ()=>{
  try{
   return await axios.get(`${URL}/view`)

  }catch(err){
    console.log("ERR WHILE GET USER API!!")
  }

}

export const  GetUserForUpdateApi=async(id)=>{
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(err){
    console.log("ERR WHILE CALLING GET USER FOR UPDATE API",err);

  }
}

export const EditUserApi=async(user,id)=>{
  try{
    return await axios.post(`${URL}/${id}`,user)

  }catch(err){
    console.log("ERR WHILE CALLING EDIT USER API",err)
  }
}

export const DeletetUsersApi= async(id)=>{

  try{
    return await axios.delete(`${URL}/${id}`)
  }catch(err){
    console.log("ERR WHILE CALLING DELETE USER API",err)
  }
}