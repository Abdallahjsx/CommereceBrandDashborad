'use client'
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import { Icon } from '@iconify/react/dist/iconify.js'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { ApexAxisChartSeries } from 'apexcharts'  
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TotalViews = () => {
  //   color
  const theme = useTheme()

  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [theme.palette.primary.main, theme.palette.blackColor.black10],
    stroke: {
      curve: 'monotoneCubic',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.1,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
  }
  const seriescolumnchart: ApexAxisChartSeries = [
    {
      name: 'series1',
      data: [2, 10, 50, 40, 70, 30, 35, 75, 90, 55, 70, 60, 80, 95, 100],
    },
    {
      name: 'series2',
      data: [1, 5, 25, 20, 35, 15, 17, 37, 45, 23, 35, 30, 40, 43, 50],
    },
  ]

  return (
    <BlankCard sx={{ height: '100%' }}>
      <Box p={3}>
        <Stack
          direction={'row'}
          alignItems={'end'}
          justifyContent={'space-between'}
          gap={3}>
          <Box>
            <Stack gap={6.6}>
              <Box>
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: theme.palette.blackColor.black60,
                  }}>
                  Total Views
                </Typography>
                <Typography variant='h5'>Total Reach</Typography>
              </Box>
              <Box>
                <Typography variant='h3' fontSize={'1.75rem'}>
                  1.2M Views
                </Typography>
                <Stack mt={1} direction={'row'} alignItems={'center'} gap={0.5}>
                  <Avatar
                    sx={{
                      width: 20,
                      height: 20,
                      color: theme.palette.success.main,
                      bgcolor: theme.palette.success.light,
                    }}>
                    <Icon
                      icon={'solar:arrow-up-line-duotone'}
                      width={14}
                      height={14}
                    />
                  </Avatar>
                  <Typography
                    variant='body2'
                    fontWeight={500}
                    color={theme.palette.success.main}>
                    +32%
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ height: "100px" }}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type='area'
              height={90}
              width={'80%'}
            />
          </Box>
        </Stack>
      </Box>
    </BlankCard>
  )
}

export default TotalViews
