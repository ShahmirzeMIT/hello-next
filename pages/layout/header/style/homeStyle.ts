export const headerStyle = {
    appBar:{
        backgroundColor: '#eeeff3',
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
        height:'60px',
    },
    logoTypgraphy:{
        color:'#091F5B',
        flexGrow: 1, display: { xs: 'none', sm: 'block' } ,
        fontWeight:'bold',
        fontSize:'1.5em',
    },
    navigateBox:{
        display: { xs: 'none', sm: 'block' }
    },
    drawer:(drawerWidth:number) => ({
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }),
    navbar:{
        color:'#091F5B',
        fontWeight:'bold',
        fontSize:'12px',
    }
}