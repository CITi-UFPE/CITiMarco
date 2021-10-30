// @ts-nocheck
import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import TextField from '@material-ui/core/TextField';
import CenterName from '../SideBar/assets/name.png';
import { ReactComponent as PigImage} from '../../assets/Porquinho.svg';

function LoginPage() {

  return (
    
      <div className="Background">
        
          <div className="img-Name-Login">
            <img src={CenterName}/>
          </div>
          <PigImage className="PigImage"/>
          

          <div>
              <form className='form-component'>
                <p>Login</p>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="E-mail" />
                </form>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Senha" />
                </form>
                <Link className='Button-default' to="/trainees" >Entrar</Link>
              </form>
          </div>
        
      </div>
    
  );
}

export default LoginPage;
