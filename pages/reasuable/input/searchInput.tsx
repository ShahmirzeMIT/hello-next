import { Box, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { serchInputStyle } from './style/searcInputStyle'

interface Props {
  data: {
    size: number
    value: string | undefined
    onChange: (value: { name: string, value: string }) => void
    name: string
    label: string
    type?: string
  }
}

const SearchInput = ({ data }: Props) => {
  const [props, setProps] = React.useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setProps({ ...props, value: value });
    props.onChange({ name: props.name, value: value });
  }

  useEffect(() => {
    setProps(data);
  }, [data]);

  return (
    <Grid xs={props.size} md={props.size} lg={props.size}>
      <TextField
        value={props.value}
        type={props.type}
        placeholder={props.label}
        fullWidth
        id="standard-basic"
        sx={{...serchInputStyle.textField, }}
        onChange={handleChange}
      />
    </Grid>
  )
}

export default SearchInput;
