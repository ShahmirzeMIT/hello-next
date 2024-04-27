export const homeStyle = {
    homeBg: {
        width:"30%",
        margin:'50px 150px',
        '@media (max-width: 900px)': {
            width:"80%",
            margin:'120px 40px',
        }
    },
    rentBox:{
        width:'90%',
        margin:'0 auto',
    },
    rentText:{
        color:'#091F5B'
    },
    rent:{
        display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,
        '@media (max-width: 800px)': {
            flexDirection:'column',
        }
    },
    suggestBox:{

        width:'90%',
        margin:'60px auto',
    
    },
    suggestText:{
        fontWeight:'bold',color:'#091F5B',marginBottom:'30px'
    },
    suggest:{
        display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,
        '@media (max-width: 1000px)': {
            flexDirection:'column',
        }
    }
};


