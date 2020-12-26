import React from 'react'

// Pro incons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingBag,
  faSearch,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const Icon = ({ icon, ...otherProps }) => {
  switch (icon) {
    case 'user':
      return <FontAwesomeIcon icon={faUser} {...otherProps} />
    case 'shopping-bag':
      return <FontAwesomeIcon icon={faShoppingBag} {...otherProps} />
    case 'search':
      return <FontAwesomeIcon icon={faSearch} {...otherProps} />
    case 'chevronDown':
      return <FontAwesomeIcon icon={faChevronDown} {...otherProps} />
    case 'close':
      return <FontAwesomeIcon icon={faTimes} {...otherProps} />
    default:
      return <i>Icon not found</i>
  }
}

export default Icon
