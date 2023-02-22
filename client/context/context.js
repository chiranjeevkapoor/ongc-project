import { createContext, useState } from "react";


export const Context_data = createContext(null);


function Context({children}) {
    const [accessToken, setAccessToken] = useState('');
    const [regiondropdown, setregiondropdown] = useState('')
    const [citydropdown, setcitydropdown] = useState('')

    return (
        <Context_data.Provider value={{accessToken, setAccessToken, regiondropdown, setregiondropdown, citydropdown, setcitydropdown}}>
            {children}
        </Context_data.Provider> 
    )
}

export default Context;