import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'

function SocialMediaButton (props) {
  //const [media, setMedia] = useState('')
  const icon = props.media=='Google'?faGoogle:faFacebook
  const iconClass = props.media=='Google'?'user__form--google':'user__form--facebook'
  return (
    <button class={iconClass}>
      <FontAwesomeIcon icon={icon} />
      <p>Inicia con {props.media}</p>
    </button>
  )
}

export default SocialMediaButton
