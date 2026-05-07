'use client'
import {
  Badge,
  Box,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { ApexAxisChartSeries } from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ContentReachAnalysis = () => {
  const theme = useTheme()


  // chart
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'bar',
      height: 16,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.secondary.main,
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 3,
        borderRadiusApplication: 'around', // 'around', 'end'
        borderRadiusWhenStacked: 'all', // 'all', 'last'
      },
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
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
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 350,
          },
        },
      },
      {
        breakpoint: 430,
        options: {
          chart: {
            width: 250,
          },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  }
  const seriescolumnchart: ApexAxisChartSeries = [
    { name: 'Explore', data: [65] },
    { name: 'Profile', data: [25] },
    { name: 'Ads', data: [10] },
  ]

  return (
    <BlankCard sx={{ height: '100%' }}>
      <Box p={3}>
        <Typography variant='h5'>Content Reach Analysis</Typography>
        <Typography variant='h3' mt={2} lineHeight={'140%'}>
          1.2M Reach
        </Typography>
        <Stack mt={0.75} direction={'row'} alignItems={'center'} gap={0.5}>
          <Chip
            label='+15.7%'
            size='small'
            sx={{
              color: theme.palette.success.main,
              bgcolor: theme.palette.success.light,
              width: 'fit-content',
            }}
          />
          <Typography
            variant='body1'
            fontWeight={500}
            sx={{
              color: 'textprimary'
            }}>
            +250K
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: 'textsecondary'
            }}>
            compared to last month
          </Typography>
        </Stack>
        {/* chart */}
        <Box mt={2}>
          <Typography variant='body1' fontWeight={500}>
            View Source Distribution
          </Typography>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type='bar'
            height={26}
            width={'100%'}
          />
        </Box>
        {/* Records */}
        <Box mt={2}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            my={1.25}>
            <Stack direction={'row'} alignItems={'center'} gap={1.5}>
              <Badge color='primary' variant='dot' />
              <Typography variant='body1' fontWeight={500}>
                Explore
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
              <Typography variant='body1'>780K</Typography>
              <Typography variant='body2' sx={{ color: theme.palette.blackColor.black60 }}>
                (65%)
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            my={1.25}>
            <Stack direction={'row'} alignItems={'center'} gap={1.5}>
              <Badge color='warning' variant='dot' />
              <Typography variant='body1' fontWeight={500}>
                Profile
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
              <Typography variant='body1'>300K</Typography>
              <Typography variant='body2' sx={{ color: theme.palette.blackColor.black60 }}>
                (25%)
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            my={1.25}>
            <Stack direction={'row'} alignItems={'center'} gap={1.5}>
              <Badge color='success' variant='dot' />
              <Typography variant='body1' fontWeight={500}>
                Ads / Search
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
              <Typography variant='body1'>120K</Typography>
              <Typography variant='body2' sx={{ color: theme.palette.blackColor.black60 }}>
                (10%)
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="body2" color="textSecondary">Avg Watch Time</Typography>
              <Typography variant="h6">42.5s</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">Loop Rate</Typography>
              <Typography variant="h6">18.2%</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </BlankCard>
  )
}

export default ContentReachAnalysis
