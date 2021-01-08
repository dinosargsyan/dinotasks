import react from 'react';
import { useState } from "react";
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import './form.css';
import { validateName , validateLastName ,validatePassword } from "../../utils/validate";

const Form = () => {
    const [fisrtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeFirstName = (e) => {
       setFirstName(e.target.value); 
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
   

    const signUp = () => {

        return(alert("Welcome to our Website " + fisrtName + " " +lastName));

    }
    
   return( 
   <div className="Form">
     <p className="errorText">{validateName(fisrtName)}</p>
     <p className="errorText">{validateLastName(lastName)}</p>
     <p className="errorText">{validatePassword(password)}</p>
    <Input type="text" placeholder="First Name" onChange={onChangeFirstName} value={fisrtName}></Input>
    <Input type="text" placeholder="Last Name" onChange={onChangeLastName} value={lastName}></Input>
    <Input type="email" placeholder="Email" onChange={onChangeEmail} value={email}> </Input>
    <Input type="password" placeholder="Password" onChange={onChangePassword} value={password}> </Input>
    <Button onClick={ signUp }>Sign Up</Button>
    </div>
   )
} 

export default Form;