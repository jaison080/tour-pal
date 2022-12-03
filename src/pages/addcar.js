import React from 'react'
import style from '../styles/addcar.module.css'
function addcar() {
  return (
    <div className={style.maincontainer}>
        <div className={style.container}>
            <input type="text" placeholder='Enter the car name' className={style.input}/>
            <input type="text" placeholder='Enter the car image url' className={style.input}/>
            <input type="text" placeholder='Enter the  fuel type' className={style.input}/>
            <input type="text" placeholder='Enter the gear transition' className={style.input}/>
            <input type="text" placeholder='Enter the no of seats ' className={style.input}/>
            <input type="text" placeholder='Enter the price per hours ' className={style.input}/>
            <div className="sub_btn">submit</div>
        </div>
    </div>
  )
}

export default addcar