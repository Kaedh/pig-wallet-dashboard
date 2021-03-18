import React from 'react';

import logoImg from '../../assets/logo.svg';

import  { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import { Container,
         Header,
         LogoImg,
         Title,
         MenuContainer,
         MenuItemLink   } from './style';

const Aside :React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={ logoImg } alt="logo" />
                <Title>PIG</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/dashboard'> <MdDashboard />   Dashboard</MenuItemLink>
                <MenuItemLink href='/transactions/entradas'> <MdArrowUpward /> Entradas</MenuItemLink>
                <MenuItemLink href='/transactions/saidas'> <MdArrowDownward /> Saídas</MenuItemLink>
                <MenuItemLink href='#'> <MdExitToApp /> Sair</MenuItemLink>
            </MenuContainer>
        </Container>
    )
};

export default Aside;