'use client'
import { useTheme } from '@mui/material'
import RecordCard from '../../../shared/RecordCard'

const PublishedReels = () => {
  const theme = useTheme()

  return (
    <>
      <RecordCard
        heading='Published Reels'
        value='110 Published'
        subvalue='Last 7 days'
        percentage='-4.3%'
        arrowicon='solar:course-down-line-duotone'
        arrowcolor={theme.palette.error.main}
        arrowbgcolor={theme.palette.error.light}
        producticon='solar:cloud-upload-line-duotone'
        productcolor={theme.palette.success.main}
        productbgcolor={theme.palette.success.light}
      />
    </>
  )
}

export default PublishedReels
