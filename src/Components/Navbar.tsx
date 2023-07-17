
import {AppBar,Toolbar,styled} from '@mui/material'
import {NavLink} from "react-router-dom"

const Header=styled(AppBar)`
background:#000000
`;
const Tabs=styled(NavLink)`
font-size:14px;
margin-right:20px;
color:#FFFFFF;
text-decoration:'none';
`;
const Navbar =()=>{

    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to={'./'}>Shubham's Profile</Tabs>
                <Tabs to={'./view'}>View User</Tabs>
                <Tabs to={'./add'}>Add user</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar