'use client'
import { useTheme } from '@mui/material'
import RecordCard from '../../../shared/RecordCard'

const TotalReels = () => {
  const theme = useTheme()

  return (
    <>
      <RecordCard
        heading='Total Reels'
        value='120 Reels'
        subvalue='Last 7 days'
        percentage='+6.1%'
        arrowicon='solar:course-up-line-duotone'
        arrowcolor={theme.palette.success.main}
        arrowbgcolor={theme.palette.success.light}
        producticon='solar:videocamera-record-line-duotone'
        productcolor={theme.palette.primary.main}
        productbgcolor={theme.palette.primary.light}
      />
    </>
  )
}

export default TotalReels
