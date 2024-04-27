import React, { useState } from 'react'
import { SearchData } from './types/homePropsTypes'

export default function homeProps({inputChnage}:{inputChnage:(val:{value:string | number| undefined, name:string })=>void})  {
    const [searchData, setSearchData] = useState<SearchData>({
        pick:{
            name:'pick',
            value:'',
            type:'text',
            size:12,
            label:'Pick Up',
            onChange:inputChnage
        },
        drop:{
            name:'drop',
            value:'',
            type:'text',
            size:12,
            label:'Drop',
            onChange:inputChnage
        },
    })

    const [btn,setBtn]=useState({
        text:'Search',
        size:12,
        onClick:()=>{
            
        }
    })
  return {searchData, setSearchData,btn }
}
