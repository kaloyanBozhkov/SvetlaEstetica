import React from 'react'

// Load component
import { SpinnerRomb } from 'spinners-react'

// Load styles
import styles from './styles.module.scss'

const Overlay = ({ children, loadingMsg, withoutSpinner = false }) => {
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.overlay}>{children}</div>
      <div className={styles.loading}>
        {!withoutSpinner && <SpinnerRomb color="#38ad48" size={54} speed={100} thickness={180} />}
        <p>{loadingMsg}</p>
      </div>
    </div>
  )
}

export default Overlay
