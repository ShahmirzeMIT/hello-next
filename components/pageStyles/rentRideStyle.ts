export const rentRideStyle={
    firstContainer:{
        backgroundColor: '#eeeff3',
        width:"100%",
        height:'77vh',
        '@media (max-width: 800px)': {
            height:'160vh'
        }
    },
    container:{
       paddingTop:'110px',
        width:'80%',
        margin:'0 auto',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 800px)': {
            flexDirection:'column-reverse',

            width:'100%',
        }
       
    },
    text:{
        color:'#091F5B'
    },
    inputContaner:{
        display:"flex",gap:4,paddingBottom:'20px',width:'100%',
        '@media (max-width: 800px)': {
            flexDirection:'column',
            width:'100%',
        }
    },
    btn:{
        display:"flex",gap:4,marginTop:'20px',
        '@media (max-width: 800px)': {
            flexDirection:'column',
            width:'100%',
        }
    }

}