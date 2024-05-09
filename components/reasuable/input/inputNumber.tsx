import { forwardRef, useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { inputTextStyle } from './style/inputTextStyle';

interface CustomProps {
  onChange: (event: {
    target: { name: string; value: number | undefined };
  }) => void;
  name: string;
}

interface Props {
  data: {
    size: number;
    value: number | undefined;
    onChange: (value: { name: string; value: number | undefined }) => void;
    name: string;
    label: string;
    type?: string;
  };
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        thousandSeparator="."
        decimalSeparator=","
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.floatValue,
            },
          });
        }}
        valueIsNumericString
      />
    );
  }
);

export default function InputNumber({ data }: Props) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setProps({ ...props, value: value });
      props.onChange({ name: props.name, value: value });
    }
  };

  return (
    <Grid xs={props.size} md={props.size} lg={props.size}>
      <TextField
        value={props.value}
        type={props.type} 
        fullWidth
        id="standard-basic"
        label={props.label}
        variant="standard"
        style={{ width: '100%' }}
        sx={{ ...inputTextStyle.textField }}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumericFormatCustom as any,
        }}
      />
    </Grid>
  );
}
