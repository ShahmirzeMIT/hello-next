export interface Props{
    inputChnage:(val:{value:string | number| undefined, name:string })=>void
}
export interface FormField {
  name:{
    size: number;
    value: string | undefined ; 
    onChange: (value: { name: string; value:string | undefined  }) => void;
    name: string;
    label: string;
    type?: string;
  },
  email:{
    size: number;
    value: string | undefined ;  
    onChange: (value: { name: string; value:  string | undefined  }) => void;
    name: string;
    label: string;
    type?: string;
  },
  number:{
    size: number;
    value: number | undefined ; 
    onChange: (value: { name: string; value: number | undefined  }) => void;
    name: string;
    label: string;
  },
  password:{
    size: number;
    value: string | undefined ; 
    onChange: (value: { name: string; value: string | undefined  }) => void;
    name: string;
    label: string;
    type?: string;
  },
  reTypePass:{
    size: number;
    value: string | undefined ; 
    onChange: (value: { name: string; value: string  | undefined  }) => void;
    name: string;
    label: string;
    type?: string;  
  }
  }
  
  