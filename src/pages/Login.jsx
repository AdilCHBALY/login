import { Checkbox } from '@mui/material'
import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
const login = () => {
  return (
    <div className='login'>
      <div className="login__content">
      <div className="left">
        <h1>Cygwin</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti nostrum labore debitis laborum fuga velit laudantium! Voluptatum, nisi. Saepe?</p>
        <span>Dont have an account ?</span>
        <button>Register</button>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form action="">
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <div className="profils">
          Choose Your Profile : 
          <div className="inputs">
          <Checkbox
          sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#F2AA4CFF",
            },
          }}
            icon={<AdminPanelSettingsIcon />}
            checkedIcon={<AdminPanelSettingsIcon />}
          />
          <Checkbox
          sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#F2AA4CFF",
            },
          }}
            icon={<SupervisorAccountIcon />}
            checkedIcon={<SupervisorAccountIcon />}
          />
          <Checkbox
           sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#F2AA4CFF",
            },
          }}
            icon={<PersonIcon />}
            checkedIcon={<PersonIcon />}
          />
          <Checkbox
           sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#F2AA4CFF",
            },
          }}
            icon={<SchoolIcon />}
            checkedIcon={<SchoolIcon />}
          />
          </div>
        </div>
        <button type="submit">Login</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default login
