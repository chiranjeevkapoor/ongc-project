const axios = require('axios')
import styles from "../styles/usercard.module.css"
import { useContext } from 'react';
import {Context_data} from 'context/context';

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
    return <div className={styles.cardcontainer}>
        <div className={styles.namecontainer}>
            <h3 style={{marginLeft:"70px"}}>{props.name}</h3>
        </div>
        <div className={styles.deletebtn}>
            <button style={{marginLeft:"270px"}} onClick={deleteuser}>X</button>
        </div>
        </div>
}

module.exports = UserCard;