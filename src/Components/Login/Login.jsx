import './Login.scss';
import React from 'react';

import { YouTubeLogo } from '../Lib/YouTube_logo'

import { Context as AuthenContext } from '../../Context/Authentication';
import { Context as ContextThemes } from '../../Context/Themes';
import { Themes } from '../../Localization/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

const Login = function() {
    
    const {theme, setTheme} = React.useContext(ContextThemes)

    const {setToken} = React.useContext(AuthenContext)

    const handleSubmit = evt => {
        evt.preventDefault()
        
        const {user_email, user_password} = evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify ({
                email: user_email.value.trim(),
                password: user_password.value.trim(),
            }),
        })
        .then(response => response.json())
        .then(data => setToken(data?.token))
    }
    
    return (
        
        <>
            <div className={`${theme === 'light'? 'login_box' : 'login_boxw'}`}>
                <div className='login_box_is'>
                    <a href={'https://www.youtube.com/'}>
                        <YouTubeLogo color={Themes[theme].darkColors}/>
                    </a>
                    <div>
                        <FormControl sx={{width: 100}} value={theme} onChange={(evt) => setTheme(evt.target.value)}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Theme
                        </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value='light'>
                                    Light
                                </option>
                                <option value='dark'>
                                    Dark
                                </option>
                        </NativeSelect>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <h1 className={`${theme === 'light'? 'login_h1' : 'login_h1w'}`}>
                        YouTube
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input className={`${theme === 'light'? 'login_input' : 'login_inputw'}`} defaultValue='eve.holt@reqres.in' type="email" name='user_email' placeholder='Enter The Email !'/>
                        <input className={`${theme === 'light'? 'login_input' : 'login_inputw'}`} defaultValue='cityslicka' type="password" name='user_password' placeholder='Enter The Password !'/>
                    <Button sx={{padding: 2, marginBottom: 4}} size='large' type='submit' variant='contained'  color='error' fullWidth>
                        Log in
                    </Button>
                    </form>
                </div>
                <div className='login_link_box'>
                    <a href={'https://www.youtube.com/'} target={'blank'} className={`${theme === 'light'? 'login_link' : 'login_linkw'}`}>
                        YouTube link
                    </a>
                    <a href={'https://www.youtube.com/'} target={'blank'} className={`${theme === 'light'? 'login_link' : 'login_linkw'}`}>
                        YouTube link
                    </a>
                </div>
            </div>
        </>
        
    );
};
export {Login};