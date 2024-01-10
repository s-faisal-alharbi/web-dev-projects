import {Switch} from 'antd'
import { use } from 'i18next';
import React,{useState} from 'react'

const Switcher = () =>{

    const [toggle , setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true)
    }

    return (
        <div>
          <Switch onClick={toggler}/> 
        </div>

    );
}
export default Switcher