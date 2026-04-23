'use client'

import { Box, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  const theme = useTheme()

  const links = [
    { label: 'WrapPixel', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'License', href: '/' },
  ]

  return (
    <>
      <Stack
        direction={{ md: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1.5}
        mt={3}>
        <Typography variant='body1'>
          © 2025 by WrapPixel, creating a better web for you.
        </Typography>
        <Box>
          <Stack direction={'row'} alignItems={'center'} gap={2.5}>
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                <Typography
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
export default Footer

