import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { GetUsersApi,DeletetUsersApi } from "../Service/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0;

`
const THead=styled(TableRow)`
background:blue;

& > th{
  color:#ffffff;
  font-size:12px;
}
`


const ViewUsers = () => {
  const [allUsersAfterFetch, setAllUsersAfterFetch] = React.useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    const fetchedUsers = await GetUsersApi();
    setAllUsersAfterFetch(fetchedUsers?.data);
    console.log("fetched", fetchedUsers?.data);
  };
const onDeleteBtnClicked= async(id:any)=>{
  console.log("currentid===",id)
  await DeletetUsersApi(id);
  getAllUser();

}
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>FULLNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PH.NUMBER</TableCell>
          <TableCell>AGE</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {allUsersAfterFetch.map((userCollection:any)=>{
          return(
            <>
            <TableRow key={userCollection._id}>
              <TableCell>{userCollection._id}</TableCell>
              <TableCell>{userCollection.fullName}</TableCell>
              <TableCell>{userCollection.email}</TableCell>
              <TableCell>{userCollection.phoneNumber}</TableCell>
              <TableCell>{userCollection.age}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${userCollection._id}`}  >edit</Button>
                <Button variant="contained" color="error" onClick={()=>onDeleteBtnClicked(userCollection._id)}>delete</Button>
              </TableCell>
            </TableRow>
            </>
          )
        })}
      </TableBody>
    </StyledTable>
  );
};
export default ViewUsers;
