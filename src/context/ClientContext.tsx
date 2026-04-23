"use client"
import '@/utils/i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useContext } from 'react'
import { CustomizerContext } from './customizerContext'
import { ThemeSettings } from '@/utils/theme/Theme'
import RTL from '../components/layout/shared/customizer/RTL'
export default function ClientContext({ children }: { children: React.ReactNode }) {
    const theme = ThemeSettings()
    const { activeDir } = useContext(CustomizerContext)
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <RTL direction={activeDir}>
                    <CssBaseline />
                    {children}
                </RTL>
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}