import React from 'react'
import rentRideProps, { RideState } from './rentRideProps'

export default function rentChanges() {const inputChanges = (val: { value: string | undefined; name: string }) => {
    setRide((prev) => ({
      ...prev,
      [val.name as keyof typeof prev]: {
        ...prev[val.name as keyof typeof prev],
        value: val.value,
      },
    }));
  };
  

const {ride,setRide, btn,setBtn}=rentRideProps({inputChange:inputChanges})
  return {ride,setRide, btn,setBtn}
}
