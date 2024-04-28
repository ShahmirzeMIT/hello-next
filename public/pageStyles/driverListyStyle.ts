export const driverListyStyle = {
    container:{
        width:'90%',margin:'110px auto'
    },
    text:{
        color:'#091F5B',fontWeight:'bold',marginBottom:'25px'
    },
    driverInfoContainer:{
        display:'flex',justifyContent:'space-between',
        '@media (max-width: 1000px)': {
            // flexDirection:'column',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center'
        }
    },
    textDown:{
        color:'#091F5B',fontWeight:'bold',marginBottom:'25px',marginTop:'100px'
    },
    pd:{
        padding:'10px 10px'
    }
}