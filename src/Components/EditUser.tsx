import { FormControl, FormGroup,InputLabel,Input,Select,MenuItem, Typography,styled, Button } from "@mui/material";
import { useState,useEffect } from "react";
import React from "react";
import { EditUserApi, GetUserForUpdateApi } from "../Service/api";
import { useNavigate,useParams } from "react-router-dom";

const Container=styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
    margin-top:20px;
}
`

const EditUser =()=>{

  const defaultValue={
    fullName:'',
    email:'',
    phoneNumber:'',
    age:'',
  }
  const [userValue,setUserValue]=React.useState(defaultValue);
  const navigate=useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    getUserDetailsForUpdateFunc()
  },[])

    const getUserDetailsForUpdateFunc=async()=>{
      const response:any=  await GetUserForUpdateApi(id);
      console.log("heheheh",response.data)
   response.data.map((val:any)=>{
        setUserValue(val);
      })
    }
  
   const onValueChange=(e:any)=>{
    console.log(userValue.fullName)
    console.log(e.target.name,e.target.value);
    setUserValue({...userValue,[e.target.name]:e.target.value})
    console.log("hello====",userValue)

   }
  
   const onEditUserBtnClicked=()=>{

        console.log("hello",userValue,id);
        EditUserApi(userValue,id);
        setTimeout(()=>{
          navigate('/view')
        },3000)
        
        
   }

 
    return(
       
        <>
       
        <Container>
            <Typography variant="h5" >Edit User</Typography>
            <FormControl>
                    <InputLabel>Full Name</InputLabel>
                    
                    <Input onChange={(e)=>{onValueChange(e)}} name={'fullName'} value={userValue.fullName}/>
            </FormControl>
            <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>{onValueChange(e)}} name={'email'} value={userValue.email}/>
            </FormControl>
            <FormControl>
           
                    <InputLabel>Phone No</InputLabel>
                    <Input type="number" onChange={(e)=>{onValueChange(e)}} name={'phoneNumber'} value={userValue.phoneNumber} />
            </FormControl>
            <FormControl>
           
           <InputLabel>Age</InputLabel>
           <Input type="number" onChange={(e)=>{onValueChange(e)}} name={'age'} value={userValue.age} />
   </FormControl>
            
      <FormControl>
        <Button variant="contained" onClick={()=>onEditUserBtnClicked()}>Edit User</Button>
      </FormControl>
        </Container>
        </>
    )
}

export default EditUser