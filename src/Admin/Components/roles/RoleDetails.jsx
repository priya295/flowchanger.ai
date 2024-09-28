import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const Main = () => {
  return (
    <div className='absolute top-[95px] pl-[240px] w-[100%]'>
      <Link to="/" className='bg-indigo-500  p-2'> <AddIcon/> New Role</Link>
    </div>
  )
}

export default Main;