import React from "react"
import Menu from "../component/menu"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

const Aboutus = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu onChange={(e)=> handleClick(e)}/>
            
        </div>
       
    )
}
export default Aboutus