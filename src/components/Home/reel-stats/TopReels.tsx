'use client'
import { Box, Chip, Link, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import BlankCard from '../../shared/BlankCard'

const TopReels = () => {
  const theme = useTheme()


  // product detail list data

  type Reel = {
    src: string
    title: string
    views: string
    engagement: string
    status: string
    chipbgcolor: string
    chiptxtcolor: string
    shares: string
    watchTime: string
  }

  const reels: Reel[] = [
    {
      src: '/images/dashboard/ecommerce/recentSale/luxesoft.jpg',
      title: 'Summer Collection Showcase',
      views: '150K',
      engagement: '12K',
      status: 'Trending',
      chipbgcolor: theme.palette.success.light,
      chiptxtcolor: theme.palette.success.main,
      shares: '1.2K',
      watchTime: '45s',
    },
    {
      src: '/images/dashboard/ecommerce/recentSale/solardesk.jpg',
      title: 'How to Style Your Room',
      views: '85K',
      engagement: '8K',
      status: 'Normal',
      chipbgcolor: theme.palette.warning.light,
      chiptxtcolor: theme.palette.warning.main,
      shares: '850',
      watchTime: '30s',
    },
    {
      src: '/images/dashboard/ecommerce/recentSale/artisan.jpg',
      title: 'Behind the Scenes: Shoot',
      views: '210K',
      engagement: '25K',
      status: 'Viral',
      chipbgcolor: theme.palette.error.light,
      chiptxtcolor: theme.palette.error.main,
      shares: '3.5K',
      watchTime: '55s',
    },
  ]

  return (
    <BlankCard>
      <Box p={3}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Typography variant='h5'>Top Performing Reels</Typography>
          <Link
            href='#'
            underline='none'
            sx={{ fontSize: '0.875rem', fontWeight: '500', color: 'blackColor.black100' }}>
            View all reels
          </Link>
        </Stack>
        <Box mt={2.5}>
          <Box sx={{ overflowX: 'auto', width: '100%' }}>
            <Stack gap={2.5}>
              {reels.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    border: '1px solid',
                    borderColor: theme.palette.blackColor.black10,
                    padding: 1.5,
                    minWidth: '50rem',
                  }}>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap={1.5}
                      sx={{ width: '33%' }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '6px',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          width={48}
                          height={48}
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>

                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{ maxWidth: '44%' }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                    {/* customer name */}
                    <Stack gap={0.5} sx={{ width: '16%' }}>
                      <Typography variant='body2' color={theme.palette.blackColor.black60}>
                        Views
                      </Typography>
                      <Typography variant='body1' fontWeight={500}>
                        {item.views}
                      </Typography>
                    </Stack>
                    {/* Qty */}
                    <Stack gap={0.5} sx={{ width: '8%' }}>
                      <Typography variant='body2' color={theme.palette.blackColor.black60}>
                        Engagement
                      </Typography>
                      <Typography variant='body1' fontWeight={500}>
                        {item.engagement}
                      </Typography>
                    </Stack>
                    {/* status */}
                    <Stack gap={0.5} sx={{ width: '12%' }}>
                      <Typography variant='body2' color={theme.palette.blackColor.black60}>
                        Trending
                      </Typography>
                      <Chip
                        label={item.status}
                        size='small'
                        sx={{
                          bgcolor: `${item.chipbgcolor}`,
                          color: `${item.chiptxtcolor}`,
                          width: 'fit-content',
                        }}
                      />
                    </Stack>
                    {/* shares */}
                    <Stack gap={0.5} sx={{ width: '12%' }}>
                      <Typography variant='body2' color={theme.palette.blackColor.black60}>
                        Shares
                      </Typography>
                      <Typography variant='body1' fontWeight={500}>
                        {item.shares}
                      </Typography>
                    </Stack>
                    {/* watch time */}
                    <Stack gap={0.5}>
                      <Typography variant='body2' color={theme.palette.blackColor.black60}>
                        Avg Watch Time
                      </Typography>
                      <Typography variant='body1' fontWeight={500}>
                        {item.watchTime}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </BlankCard>
  )
}

export default TopReels
