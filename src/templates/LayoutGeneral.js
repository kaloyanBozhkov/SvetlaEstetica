import React from 'react'

import { Grid } from '@chakra-ui/core'

const LayoutGeneral = ({ children, ...overWriteGridProps }) => {
  return (
    <Grid gridTemplateColumns="1fr" gap="space.1" {...overWriteGridProps}>
      {children}
    </Grid>
  )
}

export default LayoutGeneral