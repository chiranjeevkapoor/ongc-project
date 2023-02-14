import Toolbar from '@mui/material/Toolbar';
import { useEffect,useState } from 'react';
import Log from '../components/Log'

const axios = require('axios')
const UserActivityList = () => {
    const [userLogs, setUserLogs] = useState([]);
    const [list, setList] = useState([{name:'fver'},{name:'dttrt'},{name:'rhyrhr'}])
    const [hehe,sethehe] = useState(['gfbvr','sfd v','jnjin'])

    useEffect(()=>{
        axios.get('http://localhost:8000/userslogs').then((res)=>{
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