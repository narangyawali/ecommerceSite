
import React from 'react'
import { Children } from 'react';
import { useState, createContext } from "react";

const contextData = createContext()


function Parent() {
    const [present, setPresent] = useState("12")
    
    const updatePresent= (e)=>{
    
        setPresent(e)
    
    }

    
  return (
    <>
    	<contextData.Provider value={{present, updatePresent} }>
			{Children }

        </contextData.Provider>
    </>
  )
}

export default Parent
