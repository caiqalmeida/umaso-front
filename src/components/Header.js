import React from 'react'
import styled from 'styled-components'
import { GiPayMoney } from 'react-icons/gi'
import Avatar from '@material-ui/core/Avatar'

const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.blue};
    min-width: 768px;
    padding: 0.5% 1%;
    position: relative;
    z-index: 112;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Logo = styled(GiPayMoney)`
    color: ${({ theme }) => theme.colors.pink};
    size: 2em;
`

const Title = styled.p`
    color: ${({ theme }) => theme.colors.pink};
    font-weight: bold;
    font-size: 2.6em;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    height: 100%;
`

const NavListItems = styled.li`
    margin: 0 20px 0 0;
    color: ${({ theme }) => theme.colors.pink};
    height: 100%;
    display: flex;
    align-items: center;
`

const NavLinks = styled.a``

function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo size={36} />
                <Title>Uma.só</Title>
            </LogoWrapper>
            <nav>
                <NavList>
                    <NavListItems>
                        <NavLinks>Visão geral</NavLinks>
                    </NavListItems>
                    <NavListItems>
                        <NavLinks>Lançamentos</NavLinks>
                    </NavListItems>
                    <NavListItems>
                        <NavLinks>Poupanças</NavLinks>
                    </NavListItems>
                </NavList>
            </nav>
            <nav>
                <Avatar>C</Avatar>
            </nav>
        </HeaderWrapper>
    )
}

export default Header
