import { styled } from "../../styles";

export const HomeContainer = styled('main',{
    overflow:"auto",
    textAlign:"center",
    

    h1:{
        marginTop:"20px",

        fontSize:"3rem",
        fontWeight:"bold",
    }
    
})

export const HomeContent = styled('div',{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',  
    margin: '1rem auto',
    
    gap:'1rem',
    padding:'2rem',
    '@media (max-width:768px)': {
        gridTemplateColumns:' 1fr',  
        padding:"1rem"
    }

})

export const HeroContainer = styled('section',{
    margin:"0 auto",
    maxWidth: "580px",
    img:{
        objectFit:'cover',
        width:"100%"

    },
    '@media (max-width:768px)': {
        display:"none"
    }
})

export const FormContainer = styled('section',{

})

export const FormContent = styled('form',{
    maxWidth: "580px",
    margin:"0 auto",

    background:"$gray800",
    header:{
        width:"100%",
        background:'$green500',
        h2:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"1.3rem",
            color:"#fff",
            padding:"0.5rem",

        }
    },
    
})

export const InputGroup = styled('div',{
    display: "flex",
    padding: "2rem",

    flexDirection: "column",
    gap:'1rem',
    margin:"1rem auto",
    'input::-webkit-calendar-picker-indicator': {
        filter: 'invert(100%) brightness(100%)',
      },
      label:{
        width:"100%",
        textAlign:"left"
      },
    input:{
        
        color:"#fff",
        border:'none',
        
        width: "100%",
        padding: "0.8rem",
        fontSize: "1.2rem",
        background:"$gray600"
        
    }
})

export const Button = styled('button',{
    background:"$green500",
    width:"100%",
    color:"white",
    padding:'0.8rem',
    border:'none',
    fontSize: "1.2rem",
    borderRadius: "5px",
    cursor:'pointer',
    "&:hover": {
        background:"$green300",
    },
    "&:disabled": {
        background:"$gray200",
        cursor:"not-allowed",
        
        
    }

})

export const FormError = styled('span',{
    color:"$red600",
    fontSize:"0.8rem",
})

export const ButtonListClients = styled(Button,{
    maxWidth:"200px"
})