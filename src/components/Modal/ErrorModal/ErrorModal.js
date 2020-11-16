import React from 'react'

const styles = {
  contentWrapper: {
    margin: '5 -2 5 -2',
    padding: '0 2'
  },
  btnArea: {
    margin: '-4',
    marginTop: '2',
    height: '3rem',
    display: 'flex',
    flexDirection: 'row',
  }
}

const ErrorModal = ({ label, error, errorPreText, onRetry, onCancel = (f) => f}) => {
  return (
    <div className={styles.errorModal}>
      <div className={styles.contentWrapper}>
        <p>{label}</p>
        <br />
        <p>{errorPreText}: <b>{error}</b>.</p>
      </div>
      <div className={styles.btnArea}>
        {/* <Button
          label="Close"
          onClick={onCancel}
          modifier="secondary"
        />
        {onRetry && (
          <Button
            label="Retry"
            onClick={onRetry}
          />
        )} */}
      </div>
    </div>
  )
}

export default ErrorModal
