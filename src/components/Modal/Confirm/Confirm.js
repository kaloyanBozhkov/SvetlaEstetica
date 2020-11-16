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

const Confirm = ({ label, onSave = (f) => f, onCancel = (f) => f }) => {
  return (
    <div>
      <div className={styles.contentWrapper}>
        <p>{label}</p>
      </div>
      <div className={styles.btnArea}>
        {/* <Button
          label="Cancel"
          onClick={onCancel}
          modifier="secondary"
        />
        <Button
          label="Confirm"
          onClick={onSave}
        /> */}
      </div>
    </div>
  )
}

export default Confirm
