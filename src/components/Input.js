import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

const Control= styled.div`
    margin-bottom:20px;
`
const Label = styled.label`
    color: #000;
    display: block;
    margin-botton:5px
`
const MyInput= styled.input`
    outline:none;
    padding:8px;
    border: solid 1 px #b1b3b4;
    border-radius: 4px;
    width:100%;
    margin-bottom:5px;
`
const ErrorMessage= styled.div`
    color:red
`
const Input = ({label, ...props}) => {
  const [field, meta]= useField(props)
  return (
    <Control>
        <Label>{label}</Label>
        <MyInput {...field} {...props}></MyInput>
        {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>): null }
    </Control>
  )
}

export default Input