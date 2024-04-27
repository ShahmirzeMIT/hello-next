import React from 'react'
import homeProps from './homeProps'
import { SearchData } from './types/homePropsTypes';

export default function homeChanges() {
    const inputChnages = (val:{value:string | number| undefined, name:string })=>{
        setSearchData((prev) => ({
            ...prev,
            [val.name as keyof SearchData]: {
                ...prev[val.name as keyof SearchData],
                value: val.value
            }
        }));
    }

    const {searchData,setSearchData,btn}=homeProps({inputChnage:inputChnages})
  return {searchData,setSearchData,btn }
}
