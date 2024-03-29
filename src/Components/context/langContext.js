import React , {createContext , useState} from "react";

export const Context = createContext() ; 

const ContextProvider= props => {
    const [lang , setLang] = useState('EN')
    const supportedLangs = ['EN' , 'FR' , 'ES']; 
    let browserLang = navigator.language ; 
    console.log(browserLang)
    

    
    const toggleLang = changeLang =>{
        setLang(changeLang)
    } 
    return (
        <Context.Provider value={{lang , toggleLang}}>
            {props.children}

        </Context.Provider>
    )
}
export default ContextProvider ; 