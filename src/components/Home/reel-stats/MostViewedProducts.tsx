'use client'

import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import BlankCard from '../../shared/BlankCard'
import Image from 'next/image'

const MostViewedProducts = () => {
  const theme = useTheme()



  // Product type define
  type latestProduct = {
    src: string
    pname: string
    price: string
  }

  // Product API
  const LatestProd: latestProduct[] = [
    {
      src: '/images/dashboard/ecommerce/latestSale/wirelessPad.jpg',
      pname: 'Leather Jacket Reel',
      price: '45K Views',
    },
    {
      src: '/images/dashboard/ecommerce/latestSale/ergonomic.jpg',
      pname: 'Office Chair Ad',
      price: '32K Views',
    },
    {
      src: '/images/dashboard/ecommerce/latestSale/smartHome.jpg',
      pname: 'Smart Camera Demo',
      price: '28K Views',
    },
    {
      src: '/images/dashboard/ecommerce/latestSale/bluetooth.jpg',
      pname: 'Soundbar Review',
      price: '25K Views',
    },
  ]
  return (
    <BlankCard sx={{ height: "100%" }}>
      <Box p={3}>
        <Typography variant='h5'>Most Viewed Products</Typography>
        <Box mt={2.5}>
          {LatestProd.map((item, i) => (
            <Box key={i}>
              <Box py={1.5}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}>

                  <Stack
                    direction={'row'} alignItems={'center'} gap={1.5}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '6px',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.pname}
                        width={40}
                        height={40}
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                    <Typography
                      variant='body1' fontWeight={500}
                    >
                      {item.pname}
                    </Typography>
                  </Stack>
                  <Typography variant='body1' color={theme.palette.blackColor.black60}
                  >
                    {item.price}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </BlankCard>
  )
}

export default MostViewedProducts
