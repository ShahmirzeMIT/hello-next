export interface SearchData {
    pick: {
      name: string;
      value: string  | undefined;
      type: string;
      size: number;
      label: string;
      onChange: (val: { value: string  | undefined, name: string }) => void;
    };
    drop: {
      name: string;
      value: string  | undefined;
      type: string;
      size: number;
      label: string;
      onChange: (val: { value: string  | undefined, name: string }) => void;
    };
    
  }