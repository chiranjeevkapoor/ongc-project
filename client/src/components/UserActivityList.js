import Toolbar from '@mui/material/Toolbar';
import { useEffect,useState } from 'react';
import Log from '../components/Log'
import { useContext } from 'react';
import {Context_data} from 'context/context';

const axios = require('axios')
const UserActivityList = () => {
    const {accessToken} = useContext(Context_data)
    const [userLogs, setUserLogs] = useState([]);
    const [list, setList] = useState([{name:'fver'},{name:'dttrt'},{name:'rhyrhr'}])
    const [hehe,sethehe] = useState(['gfbvr','sfd v','jnjin'])
    const config = {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }
    //need to make a context to set authorization header for the whole system

    useEffect(()=>{
        axios.get('http://localhost:8000/userslogs',config).then((res)=>{
            setUserLogs(res.data)
            console.log(res.data)
        })
    },[])
    // const logdata = async() => {
    //     axios.get('http://localhost:8000/userslogs',()=>{

    //     })
    // }
   return (<>
    <Toolbar />
    <h1>Userlist</h1>
    {/* <ul>
        {userLogs.map((log)=>{
        return <><Log data={log}/></>})}
    </ul> */}
    {/* <ul>
        {list.map((log)=>{
         return (
        //   <Log data={log}>helo</Log>
             <li >{log.name}</li>
         )
        }
         )
        }
    </ul> */}
    <ul>
        {userLogs.map((log)=>{
         return (
        //  <Log data={log}>helo</Log>
              <li>{log.name}</li>
         )
        }
         )
        }
    </ul>

    </>)
}

module.exports = UserActivityList;