import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import styles from './styles'
import Icon from 'UI/Icon/Icon'

import Confirm from './Confirm/Confirm'
import ErrorModal from './ErrorModal/ErrorModal'
import { Box, Text } from '@chakra-ui/core'

/**
 * @param  {string} {openedModal -> name of modal to open
 * @param  {obj} data -> data payload, can have anything including onBtnClick
 * @param  {fn} onCloseModal -> fn to call in order to close modal
 */
export const Modal = ({ modal, data = {}, onCloseModal }) => {

  const dispatcher = useDispatch()

  // handle escape for modal close
  useEffect(() => {

    // on mount bind listener
    const listener = document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        onCloseModal()
      }
    })

    // on unmount unbind listener
    return () => document.removeEventListener('keydown', listener)
  })

  // if modal is null dont show anything
  if (!modal) {
    return null
  }

  const { modalLabel, modalModifier, ...payload } = data

  let content = null

  switch (modal) {
    case 'confirm': {

      const { onConfirm, ...otherProps } = payload
      const onConfirmWithClose = (...args) => {
        onCloseModal()
        onConfirm(...args)
      }

      content = <Confirm onCancel={onCloseModal} onSave={onConfirmWithClose} {...otherProps} />
      break
    }
    case 'errorModal': {
      const { onRetry, onCloseTriggerFail, ...otherProps } = payload
      const onRetryWithClose = (...args) => {
        onCloseModal()
        onRetry(...args)
      }

      const onCloseWithTriggerFail = (...args) => {
        onCloseModal()
        onCloseTriggerFail(...args)
      }

      content = <ErrorModal onCancel={() => onCloseWithTriggerFail(dispatcher)} onRetry={() => onRetryWithClose(dispatcher)} {...otherProps} />
      break
    }
    default:
      content = <Text data-test-id="emptyMsg">Modal is empty, not configured!</Text>
      break
  }

  return (
    <>
      <Box className={styles.modalOverlay} />
      <Box {...styles.box} {...(modalModifier ? styles[modalModifier] : {})}>
        {modalLabel && <p {...styles.title}>{modalLabel}</p>}
        <Box data-test-id="closeBtn" onClick={onCloseModal} {...styles.close} >
          <Icon icon="close" />
        </Box>
        {content}
      </Box>
    </>
  )
}

export default Modal
