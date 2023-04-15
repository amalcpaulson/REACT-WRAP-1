import React from 'react'
import './Registration.css'
import logo from '../../assets/registration/logo-light.svg'

const Loader = () => {
    setTimeout(function () {
        window.location.href = "/getstart"
    }, 2000);
    return (
        <div className='loader-wrapper'>
            <div class="loader">
                <img src={logo} alt="" />
            </div>

        </div>
    )
}

export default Loader
