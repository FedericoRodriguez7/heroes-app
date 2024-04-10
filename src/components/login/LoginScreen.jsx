import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../auth/AuthContext"
import { types } from '../../types/types';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )
    const [name, setName] = useState('');


    const handleLogin = () => {

        if (name.trim() === '') {
            alert('El campo nombre es obligatorio');
            return;
          }
          
        const action = {
            type: types.login,
            payload: { name: name }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate( lastPath, {
            replace: true
        });
    }

    const handleInputChange = (event) => {
        setName(event.target.value);
      }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <div>
      <input required type="text" value={name} onChange={handleInputChange} placeholder="Usuario" />
      
    </div>

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}