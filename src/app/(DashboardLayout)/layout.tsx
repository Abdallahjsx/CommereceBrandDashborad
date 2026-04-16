'use client'
import { Box, Container, styled, useTheme } from '@mui/material'
import Sidebar from './layout/vertical/sidebar/Sidebar'
import { useContext } from 'react'
import { CustomizerContext } from '../context/customizerContext'
import config from '@/app/context/config'
import Header from './layout/vertical/header/Header'
import Customizer from './layout/shared/customizer/Customizer'
import Footer from './layout/shared/footer/Footer'
import HorizontalHeader from "./layout/horizontal/header/Header";
import Navigation from './layout/horizontal/navbar/Navigation'


const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}))

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '26px',
  flexDirection: 'column',
  // zIndex: 1,
  zIndex: 100,
  width: '100%',
  backgroundColor: 'transparent',
}))

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { activeLayout, isLayout, isCollapse } = useContext(CustomizerContext)
  const MiniSidebarWidth = config.miniSidebarWidth

  const theme = useTheme()

  return (
    <MainWrapper>
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      {activeLayout === 'horizontal' ? '' : <Sidebar />}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className='page-wrapper'
        sx={{
          ...(isCollapse === 'mini-sidebar' && {
            [theme.breakpoints.up('lg')]: {
              ml: `${MiniSidebarWidth}px`,
            },
          }),
        }}>
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        {activeLayout === 'horizontal' ? '' : <Header />}

        {/* PageContent */}

        {activeLayout === 'horizontal' ? <HorizontalHeader /> : ""}
        {activeLayout === 'horizontal' ? <Navigation /> : ""}

        <Container

          maxWidth={false}
          sx={{
            maxWidth: isLayout === 'boxed' ? '1368px' : '100%!important',

          }}>
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}

          <Box sx={{ minHeight: 'calc(100vh - 170px)', }} >
            {/* <Outlet /> */}
            {children}
            {/* <Index /> */}
          </Box>

          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
          <Footer />
        </Container>
        <Customizer />
      </PageWrapper>
    </MainWrapper>
  )
}
