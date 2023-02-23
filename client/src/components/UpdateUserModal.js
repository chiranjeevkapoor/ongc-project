import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UpdateUserForm from './UpdateUserForm';
const axios = require('axios')

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [dataobject,setdataobject] = React.useState({})


  const handleOpen = () => {
    console.log('jojojoj')
    console.log('this is running')
    const sendobj = {
            id:props.id
    }

    axios.post('http://localhost:8000/getuserinfo',sendobj).then((res)=>{
            console.log(res.data)
            setdataobject(res.data)
    })
    setOpen(true);
    }
  

  return (
    <div>
      <Button variant="contained" sx={{bgcolor:"#14A44D"}} onClick={handleOpen}>UpdateUser</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <form>
            <label>username</label>
            <input></input>
          </form> */}
          
          <UpdateUserForm data={dataobject}/>

        </Box>
      </Modal>
    </div>
  )
        }