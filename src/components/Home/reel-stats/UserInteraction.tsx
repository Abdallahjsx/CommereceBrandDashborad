'use client'
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { ApexAxisChartSeries } from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const UserInteraction = () => {
  const theme = useTheme()

  // chart
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'bar',
      foreColor: theme.palette.mode == 'dark' ? theme.palette.whiteColor.white40 : theme.palette.blackColor.black40,

      toolbar: {
        show: false,
      },
      height: 370,
      stacked: true,
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '20%',
        columnWidth: '45%',
        borderRadius: 5,
        borderRadiusApplication: 'around', // 'around', 'end'
        borderRadiusWhenStacked: 'all', // 'all', 'last'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`],
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  }

  const seriescolumnchart: ApexAxisChartSeries = [
    {
      name: 'Engagement',
      data: [44, 55, 41, 67, 22, 43, 13],
    },
    {
      name: 'Views',
      data: [13, 23, 20, 8, 13, 27, 44],
    },
  ]

  return (
    <BlankCard sx={{ height: '100%' }}>
      <Box p={3}>
        <Typography variant='h5'>User Interaction</Typography>
        <Box>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type='bar'
            height={260}
            width={'100%'}
          />
        </Box>
        <Box>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap="wrap"
            gap={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Avatar sx={{ width: 8, height: 8, bgcolor: theme.palette.secondary.main, svg: { display: 'none' } }} />
                <Typography variant='body1' sx={{ color: theme.palette.mode === 'dark' ? theme.palette.whiteColor.white60 : theme.palette.blackColor.black60 }}>
                  Views
                </Typography>
              </Stack>
              <Typography variant='h6'>1.2M</Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Avatar sx={{ width: 8, height: 8, bgcolor: theme.palette.primary.main, svg: { display: 'none' } }} />
                <Typography variant='body1' sx={{ color: theme.palette.mode === 'dark' ? theme.palette.whiteColor.white60 : theme.palette.blackColor.black60 }}>
                  Likes
                </Typography>
              </Stack>
              <Typography variant='h6'>85K</Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Avatar sx={{ width: 8, height: 8, bgcolor: theme.palette.warning.main, svg: { display: 'none' } }} />
                <Typography variant='body1' sx={{ color: theme.palette.mode === 'dark' ? theme.palette.whiteColor.white60 : theme.palette.blackColor.black60 }}>
                  Comments
                </Typography>
              </Stack>
              <Typography variant='h6'>12K</Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Avatar sx={{ width: 8, height: 8, bgcolor: theme.palette.success.main, svg: { display: 'none' } }} />
                <Typography variant='body1' sx={{ color: theme.palette.mode === 'dark' ? theme.palette.whiteColor.white60 : theme.palette.blackColor.black60 }}>
                  Shares
                </Typography>
              </Stack>
              <Typography variant='h6'>5.4K</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </BlankCard>
  )
}

export default UserInteraction