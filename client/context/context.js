import { createContext, useState } from "react";


export const Context_data = createContext(null);


function Context({children}) {
    const [accessToken, setAccessToken] = useState('');

    return (
        <Context_data.Provider value={{accessToken, setAccessToken}}>
            {children}
        </Context_data.Provider> 
    )
}

export default Context;