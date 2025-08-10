import { Height } from '@mui/icons-material'
import React from 'react'
import { PuffLoader } from 'react-spinners'
function Loader() {
  return (
    <div style={ {Height:"1000px",width:"100%",display:"flex" ,justifyContent:"center", alignItems:"center", padding:100}}>
        <PuffLoader color="#5d93f6" />
    </div>
  )
}

export default Loader