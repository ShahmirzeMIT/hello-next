export const driverInfoStyle = {
    card:{
        maxWidth: 345,borderRadius:'20px' ,
      
    },
    cardAction: {
      position: 'relative',
      borderRadius: '20px',
      
    },
    image:{
      height:'150px',
      width:'100%',
      borerRadius:'20px',
      overflow: 'hidden',
    },
    overlay:{
      position: 'absolute' as const,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      transition: 'opacity 1s ease',
    },
    typography1:{
        fontSize:'18px',textAlign:'start',color:"#091F5B",padding:'5px 5px',fontWeight:'bold'
    },
    typography2:{
        fontSize:'16px',textAlign:'start',color:"#091F5B",padding:'5px 10px'
    },
    btn:{
        marginTop:'10px',
        width:'50%',margin:'0 5px',background:'#091F5B',color:'white',
        borderRadius:'15px',
                height:'20px',
                fontSize:'13px',
                '&:hover':{background:'#091F5B',color:'white'}
            
    }
}