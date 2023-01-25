import { globalCss } from ".";

export const globalStyles = globalCss({
    "*":{
        boxSizing: "border-box",
        margin: 0,
        padding:0
    },
    "body":{
        color:"$gray100",
        '-webkit-font-smoothing':'antialiased',
        backgroundColor:"$gray900"
    },
    'body,input,button,textarea':{
        fontSize:".75rem",
        '-webkit-font-smoothing':'antialiased',
        fontFamily:"Roboto, sans-serif",
        fontWeight:'400'
    }
})