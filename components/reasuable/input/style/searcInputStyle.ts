export const serchInputStyle ={
    textField: {
        width: '100% !important',
        borderRadius: '20px',
          background: 'white !important',
          border:'none',
          "&:hover": {
            border: 'none', // Remove border on hover as well
          },
          "& .MuiInputBase-input": {
            padding: '10px 15px',
            fontSize: '1rem',
            color: 'black',
            border: 'none',
            '&:focus': {
              border: 'none !important',
            }
          },
          
          "& fieldset": {
            border: "none",
            '&:hover': {
              border:'none'
            }
          },
         
    }
}