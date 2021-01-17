import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { addUser } from "../store/actions/register.action";
import './RegisterUserInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const RegisterUserInput = () => {
    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch({type: 'ADD_USER', payload: {id: 1, username: inputValue}})
        dispatch(addUser(inputValue))
        setInputValue('')
    }
    
    return (
        <form onSubmit = {submitHandler}>
            <fieldset>
                <legend> <FontAwesomeIcon icon={faUser} /> &nbsp; Registeration Form</legend>
                <input type='text' onChange={handleChange} value={inputValue} placeholder="Username..."/>
                <button>Register</button>
            </fieldset>
        </form>
        
    )
}

export default RegisterUserInput;