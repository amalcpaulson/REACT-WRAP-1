import React from 'react'
import './Registration.css'

const getstart = () => {
  return (
    <div>
      <div
      style="
        background-color: #009743;
        opacity: 50%;
        width: 100%;
        height: 50px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
      "
    ></div>
    <div class="image">
      <img src="../static/images/logo-green.svg" alt="" />
      <p>Creating a cleaner</p>
      <p>tomorrow.</p>
    </div>
    <div style="bottom: 0;">
      <div class="get-start-bottom">
        <a href="{% url 'select_occupation' %}">Get start!</a>
      </div>
    </div>
    </div>
  )
}

export default getstart
