import React from 'react'

import styles from './styles.module.scss'

import Icon from 'UI/Icon/Icon'

const Loading = ({ loadingMsg, isAbsolutelyPositioned = false }) => {
  const classes = [styles.loading, isAbsolutelyPositioned ? styles.absolutelyPositioned : '']
    .join(' ')
    .trim()

  return (
    <div className={classes}>
      <Icon icon="cog" />
      {loadingMsg && <p>{loadingMsg}</p>}
    </div>
  )
}


export default Loading
