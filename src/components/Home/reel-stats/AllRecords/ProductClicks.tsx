'use client'
import RecordCard from '../../../shared/RecordCard'
import { useTheme } from '@mui/material'

const ProductClicks = () => {
  const theme = useTheme()

  return (
    <>
      <RecordCard
        heading='Product Clicks'
        value='12,300 Clicks'
        subvalue='Last 7 days'
        percentage='+7.9%'
        arrowicon='solar:course-up-line-duotone'
        arrowcolor={theme.palette.success.main}
        arrowbgcolor={theme.palette.success.light}
        producticon='solar:cursor-square-line-duotone'
        productcolor={theme.palette.purple.main}
        productbgcolor={theme.palette.purple.light}
      />
    </>
  )
}

export default ProductClicks
