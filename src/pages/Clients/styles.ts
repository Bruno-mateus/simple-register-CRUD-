import { TextAlignCenter } from "phosphor-react";
import { styled } from "../../styles";

export const ClientsContainter = styled('main',{
    background:"$gray800",
    maxWidth:'1200px',
    margin:"2rem auto",
    
    header:{
        background:"$green500",
        textAlign:"center",
        padding:".2rem 1rem",
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        h1:{
            flex:1
        }
    }
})

export const ClientsContent = styled('div',{
    display:"grid",
    maxHeight:800,
    overflow:"auto",
    padding:'1rem',
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"1rem",
    "@media (max-width: 680px)":{
        gridTemplateColumns:"1fr 1fr",
    }
})

export const ClientCard = styled('div',{
    header:{
        background:"$green500",
        display:'flex',
        alignItems:'center',
        justifyContent:"space-between",
    },
    button:{
        background:'none',
        border:"none",
        color:'$gray100',
        cursor:'pointer',
        "&:hover":{
            filter:"brightness(0.8)"
        }
    },
    background:"$gray700",
    color:"$gray100",
    ul:{
        padding:'.5rem',
        li:{
            listStyle:"none"
        },
        "li+li":{
            marginTop:".5rem"
        }
    }
})

export const FormEditClientContainer = styled('div',{
    padding:'1rem',
    position: 'fixed',
    top:0,
    bottom:0,
    left:0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: '100%',
})

export const FormEditClientForm = styled('form',{
    maxWidth: "580px",
    margin:"2rem auto",

    background:"$gray800",
    header:{
        width:"100%",
        background:'$green500',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        padding:"0 1rem",
        h2:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"1.3rem",
            color:"#fff",
            padding:"0.5rem",
            flex:1

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

export const ButtonCloseFormModal = styled('button',{
    background:"transparent",
    border:"none",
    color:"$gray100",
    cursor:"pointer",
    "&:hover":{
        opacity:"0.7"
    }
})

export const ButtonBack = styled(ButtonCloseFormModal)