'use client'
import BlankCard from '../../shared/BlankCard'
import { Box, Chip, Stack, Typography, useTheme } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { ApexAxisChartSeries } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const MonthlyEngagement = () => {
  const theme = useTheme()

  // chart
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'bar',
      foreColor: theme.palette.blackColor.black40,
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      height: 370,
      stacked: true,
    },
    colors: [theme.palette.secondary.main, theme.palette.success.light],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '30%',
        columnWidth: '45%',
        borderRadius: 3,
        borderRadiusApplication: 'end', // 'around', 'end'
        borderRadiusWhenStacked: 'last', // 'all', 'last'
      },
    },
    stroke: {
      width: 1, // controls the gap thickness
      colors: ['transparent'], // or background color for clean look
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {

      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
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
      name: 'TEAM A',
      data: [44, 55, 41, 67, 22],
    },
    {
      name: 'TEAM B',
      data: [13, 23, 20, 8, 13],
    },
  ]

  return (
    <BlankCard>
      <Box p={3} bgcolor={theme.palette.primary.main}>
        <Stack
          direction={'row'}
          alignItems={'end'}
          justifyContent={'space-between'}>
          <Stack gap={6.2}>
            <Box>
              <Typography variant='h5' sx={{ color: 'white' }}>
                Monthly <br /> Engagement
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h4'
                fontSize={'1.75rem'}
                sx={{ color: 'white' }}>
                85K Engagement
              </Typography>
              <Stack direction={'row'} gap={0.6} alignItems={'center'} mt={0.6}>
                <Typography
                  variant='subtitle1'
                  sx={{ color: theme.palette.whiteColor.white60 }}>
                  vs last month
                </Typography>
                <Chip
                  label='+18.4%'
                  size='small'
                  sx={{
                    color: theme.palette.success.main,
                    bgcolor: theme.palette.success.light,
                  }}
                />
              </Stack>
            </Box>
          </Stack>
          <Box sx={{ height: "100px" }}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type='bar'
              height={80}
              width={'30%'}
            />
          </Box>
        </Stack>

      </Box>
    </BlankCard >
  )
}
export default MonthlyEngagement
