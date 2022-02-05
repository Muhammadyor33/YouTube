import './App.css'
import React from 'react'
import { Context } from './Context/Authentication'
import { AuthenticatedApp } from './AuthenticatedApp'
import { UnauthenticatedApp } from './UnauthenticatedApp';

function App () {   

    const { token } = React.useContext(Context)
    
    if (token) {
        return <AuthenticatedApp/>
    }else {
        return <UnauthenticatedApp/>
    }
    
};   
export default App;
        