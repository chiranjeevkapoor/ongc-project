const axios = require('axios')
import styles from "../styles/usercard.module.css"
import { useContext } from 'react';
import {Context_data} from 'context/context';
import UpdateUserModal from './UpdateUserModal';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const UserCard = (props) =>{
    const {accessToken} = useContext(Context_data)
    const deleteuser = () =>{
        //sql query to delete a user
        const config = {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }
        // console.log(props.userid)
        
        const sendobj = {
            id:props.userid
        }
        console.log(sendobj)
        // const sql = `DELETE * FROM users.user_info WHERE user_id = ${id};`
        //backend request to deleteuser
        axios.delete('http://localhost:8000/deleteuser', {data:sendobj} ,config).then(()=>{
                console.log('delete request made')
        })
         
        
    }
    const softdeleteuser = () =>{
        //sql query to delete a user
        const config = {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }
        // console.log(props.userid)
        
        const sendobj = {
            id:props.userid
        }
        console.log(sendobj)
        // const sql = `DELETE * FROM users.user_info WHERE user_id = ${id};`
        //backend request to deleteuser
        axios.delete('http://localhost:8000/softdeleteuser', {data:sendobj} ,config).then(()=>{
                console.log('soft delete request made')
        })   
    }
    // const updateuser = () => {
    //     const config = {
    //         headers: {
    //             authorization: `Bearer ${accessToken}`
    //         }
    //     }
    // }
    // const getUserInfo = () => {
    //     console.log('this is running')
    //     const sendobj = {
    //         id:props.userid
    //     }
    //     axios.post('http://localhost:8000/getuserinfo',sendobj).then((res)=>{
    //         console.log(res)
    //     })


    // }
    return <div className={styles.cardcontainer} style={{backgroundColor: "#e5e9f6"}}>
            <div className={styles.namecontainer}>
                <h3 style={{marginLeft:"70px"}}>{props.name}</h3>
            </div>
            <div className={styles.deletebtn}>
                {/* <button onClick={deleteuser}>X</button> */}
                <Button variant="outlined"  startIcon={<DeleteIcon />} onClick={deleteuser}>
  Delete
</Button>
            </div>
            <div className={styles.softdeletebtn}>
                {/* <button  onClick={softdeleteuser}>softdelete</button> */}
                <Button variant="contained" sx={{bgcolor:"#eed202"}} onClick={softdeleteuser}>Softdelete</Button>
            
                
            </div>
            <div className={styles.updatebtn}>
                {/* <button onClick={updateuser}>updateuser</button> */}
                <UpdateUserModal id={props.userid}/>
            </div>
        </div>
}

module.exports = UserCard;