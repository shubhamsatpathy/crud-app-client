import { FormControl, FormGroup,InputLabel,Input,Select,MenuItem, Typography,styled, Button } from "@mui/material";
import { useState, } from "react";
import React from "react";
import { AddUserApi } from "../Service/api";
import { useNavigate } from "react-router-dom";

const Container=styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
    margin-top:20px;
}
`

const AddUser =()=>{

  const defaultValue={
    fullName:'',
    email:'',
    phoneNumber:'',
    age:'',
  }
  const [userValue,setUserValue]=React.useState(defaultValue);
  const navigate=useNavigate();

  
   const onValueChange=(e:any)=>{
    console.log(e.target.name,e.target.value);
    setUserValue({...userValue,[e.target.name]:e.target.value})
    console.log("hello====",userValue)

   }
  
   const onAddUserBtnClicked=()=>{

        console.log("hello",userValue);
        AddUserApi(userValue);
       setTimeout(()=>{
        navigate('/view')
       },3000) ;
   }

 
    return(
        <Container>
            <Typography variant="h5" >Add User</Typography>
            <FormControl>
                    <InputLabel>Full Name</InputLabel>
                    <Input onChange={(e)=>{onValueChange(e)}} name={'fullName'}/>
            </FormControl>
            <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>{onValueChange(e)}} name={'email'}/>
            </FormControl>
            <FormControl>
           
                    <InputLabel>Phone No</InputLabel>
                    <Input type="number" onChange={(e)=>{onValueChange(e)}} name={'phoneNumber'} />
            </FormControl>
            <FormControl>
           
           <InputLabel>Age</InputLabel>
           <Input type="number" onChange={(e)=>{onValueChange(e)}} name={'age'} />
   </FormControl>
            
      <FormControl>
        <Button variant="contained" onClick={()=>onAddUserBtnClicked()}>Add User</Button>
      </FormControl>
        </Container>
    )
}

export default AddUser