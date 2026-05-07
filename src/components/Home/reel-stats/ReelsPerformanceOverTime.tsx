'use client'
import React from 'react'
import {
  Box,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { ApexAxisChartSeries } from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ReelsPerformanceOverTime = () => {
  const theme = useTheme()

  // select
  const [year, setYear] = React.useState('2025')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value)
  }

  // toggle chart's data
  const chartDataByYear: Record<string, ApexAxisChartSeries> = {
    '2023': [
      { name: 'Total Views', data: [1, 2, 3, 4, 5, 4, 3] },
      { name: 'Engagement', data: [2, 3, 4, 3, 2, 1, 0] },
    ],
    '2024': [
      { name: 'Total Views', data: [0, 4, 3, 7, 1, 2, 0] },
      { name: 'Engagement', data: [3, 1, 3, 2, 5, 2, 5] },
    ],
    '2025': [
      { name: 'Total Views', data: [5, 3, 6, 4, 2, 4, 1] },
      { name: 'Engagement', data: [1, 2, 1, 3, 4, 5, 3] },
    ],
  }

  // toggle values
  const summaryDataByYear: Record<string, { sale: number; order: number }> = {
    '2023': { sale: 38500, order: 1200 },
    '2024': { sale: 42560, order: 1540 },
    '2025': { sale: 47890, order: 1680 },
  }
  const summary = summaryDataByYear[year] || { revenue: 0, users: 0 }

  //   chart-setup
  const optionssplinechart: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    xaxis: {
      categories: [
        `Jan${year}`,
        `Feb${year}`,
        `Mar${year}`,
        `Apr${year}`,
        `May${year}`,
        `Jun${year}`,
        `Jul${year}`,
      ],
      axisBorder: {
        show: false, // Hides the X-axis line
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '0.75rem',
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 0.0,
      max: 7.0,
      forceNiceScale: false,
      tickAmount: 7,
      labels: {
        formatter: function (value: number) {
          const ticks = [0, 1, 3, 5, 7]
          return ticks.includes(value) ? `${value}k` : ''
        },
        style: {
          colors: theme.palette.text.secondary,

          fontSize: '0.75rem',
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          borderColor: theme.palette.divider,
          strokeDashArray: 4,
        },
        {
          y: 1,
          borderColor: theme.palette.divider,
          strokeDashArray: 4,
        },
        {
          y: 3,
          borderColor: theme.palette.divider,
          strokeDashArray: 4,
        },
        {
          y: 5,
          borderColor: theme.palette.divider,
          strokeDashArray: 4,
        },
        {
          y: 7,
          borderColor: theme.palette.divider,
          strokeDashArray: 4,
        },
      ],
    },
    legend: {
      show: false,
    },
  }
  const seriessplinechart: ApexAxisChartSeries = chartDataByYear[year] || []

  return (
    <BlankCard sx={{ height: '100%' }}>
      <Box p={3}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Typography variant='h5'>Reels Performance Over Time</Typography>
          <Box>
            <Select
              labelId='year'
              id='year'
              value={year}
              size='small'
              onChange={handleChange}>
              <MenuItem value={2025}>2025</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Box mt={2}>
          <Stack direction={'row'} gap={2.5}>
            <Box>
              <Typography
                variant='body2'
                sx={{
                  color: theme.palette.blackColor.black60,

                }}>
                Total Views
              </Typography>
              <Typography variant='h3' mt={0.5}>
                {summary.sale}k
              </Typography>
            </Box>
            <Divider orientation='vertical' flexItem />
            <Box>
              <Typography
                variant='body2'
                sx={{
                  color: theme.palette.blackColor.black60,
                }}>
                Engagement
              </Typography>
              <Typography variant='h3' mt={0.5}>
                {summary.order}
              </Typography>
            </Box>
          </Stack>
        </Box>
        {/* chart */}
        <Box sx={{ height: '250px' }}>
          <Chart
            options={optionssplinechart}
            series={seriessplinechart}
            type='area'
            height={250}
            width={'100%'}
          />
        </Box>
      </Box>
    </BlankCard>
  )
}

export default ReelsPerformanceOverTime
