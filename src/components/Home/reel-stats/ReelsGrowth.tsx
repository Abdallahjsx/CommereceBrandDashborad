'use client'
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import { Icon } from '@iconify/react/dist/iconify.js'

const ReelsGrowth = () => {
  const theme = useTheme()

  return (
    <BlankCard>
      <Box p={3} bgcolor={theme.palette.secondary.main}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant='h5' sx={{ color: 'black' }}>
            Reels <br /> Growth
          </Typography>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            }}>
            <Icon icon={'solar:diagram-up-line-duotone'} />
          </Avatar>
        </Stack>
        <Box mt={5.5}>
          <Typography variant='h2' fontSize={'2rem'} sx={{ color: 'black' }}>
            +24%
          </Typography>
          <Typography
            variant='subtitle1'
            color="primary">
            Compared to Last Month
          </Typography>
        </Box>
      </Box>
    </BlankCard >
  )
}

export default ReelsGrowth
