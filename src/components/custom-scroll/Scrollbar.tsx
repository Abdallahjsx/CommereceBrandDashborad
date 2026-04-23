'use client'
import { Box, styled, SxProps, useMediaQuery } from '@mui/material'
import SimpleBar from 'simplebar-react'
import "simplebar-react/dist/simplebar.min.css";

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: '100%',
}))

interface PropsType {
  children: React.ReactElement | React.ReactNode
  sx: SxProps
}

const Scrollbar = (props: PropsType) => {
  const { children, sx, ...other } = props
  const lgdown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'))

  if (lgdown) {
    return <Box sx={{ overflowX: 'auto' }}>{children}</Box>
  }

  return (
    <SimpleBarStyle sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  )
}

export default Scrollbar
