'use client'
import { useTheme } from '@mui/material'
import RecordCard from '../../../shared/RecordCard'

const EngagementRate = () => {
  const theme = useTheme()

  return (
    <>
      <RecordCard
        heading='Engagement Rate'
        value='8.2%'
        subvalue='Last 7 days'
        percentage='+2.5%'
        arrowicon='solar:course-up-line-duotone'
        arrowcolor={theme.palette.success.main}
        arrowbgcolor={theme.palette.success.light}
        producticon='solar:heart-line-duotone'
        productcolor={theme.palette.warning.main}
        productbgcolor={theme.palette.warning.light}
      />
    </>
  )
}

export default EngagementRate
