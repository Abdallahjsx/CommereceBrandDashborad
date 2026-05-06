'use client'
import { CustomizerContext } from '@/context/customizerContext'
import DashboardCard from '../../shared/DashboardCard'
import { Stack, Box, Typography, Chip, useTheme } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AudienceSegmentation = () => {
  const theme = useTheme()
  const {
    activeTheme,
  } = useContext(CustomizerContext)
  // chart
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'donut',
      foreColor: theme.palette.blackColor.black40,
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.secondary.main,
    ],
    labels: ['Followers', 'Non-Followers', 'New Users'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,

        donut: {
          size: '70%',
          background: 'transparent',
          labels: {
            show: true,
            total: {
              show: true,
            },
          },
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  }
  const seriescolumnchart: number[] = [70, 20, 10]

  return (
    <DashboardCard title='Audience Segmentation'>
      <>
        <Box display={'flex'} justifyContent={'center'} height={180}>
          <Chart
            key={activeTheme}
            options={optionscolumnchart}
            series={seriescolumnchart}
            type='donut'
            height={150}
            width={'100%'}
          />
        </Box>
        <Stack gap={1.5} mt={3}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Box
                sx={{
                  height: '14px',
                  width: '3px',
                  bgcolor: theme.palette.primary.main,
                }}
              />
              <Typography variant='body1' fontWeight={500}>
                Followers
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={0.75}>
              <Typography variant='body1' fontWeight={600}>
                70%
              </Typography>
              <Chip
                label='+2.1%'
                size='small'
                sx={{
                  color: theme.palette.success.main,
                  bgcolor: theme.palette.success.light,
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Box
                sx={{
                  height: '14px',
                  width: '3px',
                  bgcolor: theme.palette.warning.main,
                }}
              />
              <Typography variant='body1' fontWeight={500}>
                Non-Followers
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={0.75}>
              <Typography variant='body1' fontWeight={600}>
                20%
              </Typography>
              <Chip
                label='+4.2%'
                size='small'
                sx={{
                  color: theme.palette.success.main,
                  bgcolor: theme.palette.success.light,
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Box
                sx={{
                  height: '14px',
                  width: '3px',
                  bgcolor: theme.palette.secondary.main,
                }}
              />
              <Typography variant='body1' fontWeight={500}>
                New Users
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={0.75}>
              <Typography variant='body1' fontWeight={600}>
                10%
              </Typography>
              <Chip
                label='-1.8%'
                size='small'
                sx={{
                  color: theme.palette.error.main,
                  bgcolor: theme.palette.error.light,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </>
    </DashboardCard>
  )
}

export default AudienceSegmentation
