export const footerStyle={
    firstBox:{
        backgroundColor: '#eeeff3',
            // height:'40vh',
            width:'100%',
            '@media (max-width: 800px)': {
            }
    },
    flexBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        padding:'20px 0',
        '@media (max-width: 800px)': {
            flexDirection:'column',
    
        
        }
    },
    footerBox:{
        width:'50%',gap:10,
        '@media (max-width: 800px)': {
            width:'100%',
          paddingBottom:'20px',
           
        },
        '@media (max-width: 400px)': {
           flexWrap:'wrap'
        }
    },
    logoText:{
        width:'50%',
        '@media (max-width: 800px)': {
            width:'100%',
            paddingBottom:'20px',
            paddingTop:'20px',
        }
    }
}