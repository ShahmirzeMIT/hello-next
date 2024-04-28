import React, { useState } from 'react';

export interface RideState {
  name: string;
  value: string | undefined;
  label: string;
  type: string;
  onChange: (val: { value: string | undefined; name: string }) => void;
}

interface ButtonState {
  text: string;
  onClick: () => void;
}

interface RentRideProps {
  inputChange: (val: { value: string | undefined; name: string }) => void;
}

export default function rentRideProps({ inputChange }: RentRideProps) {
  const [ride, setRide] = useState<{
    from: RideState;
    to: RideState;
    distance: RideState;
    time: RideState;
    amount: RideState;
    tip: RideState;
  }>({
    from: {
      name: "from",
      value: "",
      label: "From",
      type: "text",
      onChange: inputChange,
    },
    to: {
      name: "to",
      value: "",
      label: "To",
      type: "text",
      onChange: inputChange,
    },
    distance: {
      name: "distance",
      value: "",
      label: "Distance",
      type: "text",
      onChange: inputChange,
    },
    time: {
      name: "time",
      value: "",
      label: "Time",
      type: "text",
      onChange: inputChange,
    },
    amount: {
      name: "amount",
      value: "",
      label: "Amount",
      type: "text",
      onChange: inputChange,
    },
    tip: {
      name: "tip",
      value: "",
      label: "Tip",
      type: "text",
      onChange: inputChange,
    },
  });

  const [btn, setBtn] = useState<{
    bookRide: ButtonState;
    goBack: ButtonState;
  }>({
    bookRide: {
      text: "Book a Ride",
      onClick: () => {},
    },
    goBack: {
      text: "Go Back",
      onClick: () => {},
    },
  });

  return { ride, setRide, btn, setBtn };
}
