import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 80px;

    background-color: ${props=> props.theme.backgroundColor};
    color: ${props=> props.theme.color};
    transition: color 0.4s linear, background-color 0.4s linear;
`;

export const MainSection = styled.div`
`;

