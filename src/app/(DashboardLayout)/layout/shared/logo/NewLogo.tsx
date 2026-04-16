'use client'
import React from 'react'
import { CustomizerContext } from "@/app/context/customizerContext";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import config from '@/app/context/config'
import Image from "next/image";
import { useContext } from "react";

function NewLogo() {
    const { isCollapse, isSidebarHover, activeDir, activeMode } =
        useContext(CustomizerContext)

    const TopbarHeight = config.topbarHeight

    const LinkStyled = styled(Link)(() => ({
        height: TopbarHeight,
        width: isCollapse == 'mini-sidebar' && !isSidebarHover ? '40px' : '180px',
        overflow: 'hidden',
        display: 'block',
    }))


    if (activeDir === 'ltr') {
        return (
            <LinkStyled href='/'>
                {activeMode === 'dark' ? (
                    <Image
                        src={'/images/logo/lightLogo.svg'}
                        alt='logo'
                        height={TopbarHeight}
                        width={160}
                    />
                ) : (
                    <Image
                        src={'/images/logo/darkLogo.svg'}
                        alt='logo'
                        height={TopbarHeight}
                        width={160}
                    />
                )}
            </LinkStyled>
        )
    }
    return (
        <LinkStyled href='/'>
            {activeMode === 'dark' ? (
                <Image
                    src='/images/logo/lightLogo.svg'
                    alt='logo'
                    height={TopbarHeight}
                    width={160}
                    priority
                />
            ) : (
                <Image
                    src='/images/logo/darkLogo.svg'
                    alt='logo'
                    height={TopbarHeight}
                    width={160}
                    priority
                />
            )}
        </LinkStyled>
    )
}

export default NewLogo