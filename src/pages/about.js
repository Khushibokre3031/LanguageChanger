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
        <div>
            <Menu onChange={(e)=> handleClick(e)}/>
          <h1 style={{marginTop:'50px'}}> {t('About')}  {t('Albert Einstein')} </h1>
        </div>
       
    )
}
export default Aboutus