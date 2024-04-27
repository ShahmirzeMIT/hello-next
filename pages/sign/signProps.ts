import React, { useState } from 'react'
import { FormField, Props } from '../../public/sign/types/signTypes'

export default function signProps({inputChnage}:{inputChnage:(val:{value:string | number| undefined, name:string })=>void})  {

const [formData, setFormData] = useState<FormField>({
    name:{
      size:12,
      value:undefined,
      onChange:inputChnage,
      name:'name',
      label:'Name',
      
    },
    email:{
      size:12,
      value:undefined,
      onChange:inputChnage,
      name:'email',
      label:'Email',
      type:'email'
  },
  number:{
    size:12,
    value:undefined,
    onChange:inputChnage,
    name:'number',
    label:'Number',
  },
  password:{
    size:12,
    value:undefined,
    onChange:inputChnage,
    name:'password',
    label:'Password',
    type:'password'
  },
  reTypePass:{
    size:12,
    value:undefined,
    onChange:inputChnage,
    name:'reTypePass',
    label:'Retype Password',
    type:'password'
  },
  btn:{
    size:12,onClick:()=>{},text:"Sign"
  },
  createAccount:{
    text:'Already have an account',url:'/sign/login'
  },
  dontHaveAccount:{
    text:'Dont have an account',url:'/sign/sign'
  },
  login:{
    size:12,onClick:()=>{},text:"Login"
  },
  confirm:{
    size:12,onClick:()=>{},text:"Confirm"
  },
  
  })
  return {formData, setFormData}
}
