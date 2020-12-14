import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Spinner, Text } from '@chakra-ui/core'
import styles from './styles'

const Loading = ({ loadingMsg, isAbsolutelyPositioned = false, ...otherProps }) => {
  return (
    <Flex
      {...styles.wrapper}
      {...(isAbsolutelyPositioned ? styles.isAbsolutelyPositioned : styles.isNormallyPositioned)}
      // give ability to overwrite props
      {...otherProps}
    >
      <Spinner color="text.900" size="xl" />
      {loadingMsg && <Text fontSize="xs" marginTop="3">{loadingMsg}</Text>}
    </Flex>
  )
}

Loading.propTypes = {
  loadingMsg: PropTypes.string,
}

export default Loading