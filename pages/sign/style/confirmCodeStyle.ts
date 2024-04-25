export const confirmCodeStyle = {
    signBody:{
        backgroundColor: "#f2efe8",
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        height:'100vh',
        padding:'20px'
    },
    boxWidth:{
        width:'100%',
        '@media (min-width: 830px)': {
            width:'50%'
        }
    },
    typgraphy:{
      fontWeight:'bold',
      color:'#091F5B',
      '@media (max-width: 800px)': {
        fontSize:'5rem'
      }
    },
    formContainer:{
        width:"80% ",
        backgroundColor:'#FFFFFF',
        padding:'20px 40px',
        display:'flex',
        flexDirection:'column',
        // gap:'20px',
        justifyContent:'center',
        height:"30%",
        borderRadius:'30px',
        boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin:'120px auto',
        '@media (max-width: 830px)': {
            width:'100%',
            height:'70%',
            margin:'0 auto',
        }
    },
    otp:{

        width:'95%',
        margin:'0 auto'
    
    }
}