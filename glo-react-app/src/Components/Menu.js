import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import dbMemu from "./DBMenu"
import { ListItem } from "./ListItem";



const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMemu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски и напитки</h2>
            <ListItem itemList={dbMemu.other}/>
        </SectionMenu>


    </MenuStyled>
);