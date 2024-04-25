import React, { useState } from 'react'
import { FormField, Props } from './types/signTypes'

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
  }
  })
  return {formData, setFormData}
}
