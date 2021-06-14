import styled, { css } from 'styled-components';

export const Button = styled.button`
    outline: none;
    border: 1px solid;
    border-color: ${props => props.theme.button.borderColor};
    border-radius: 2px;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props => props.theme.button.textColor};
    padding: 0.5em 1em;
    box-shadow: 0 4px 12px 0 rgba(27, 169, 76, 0.5);

    font-size: 1rem;
    letter-spacing: 0.7px;
    cursor: pointer;
    transition: opacity 0.4s linear,
    color 0.4s linear, background-color 0.4s linear;

    &:hover {
        opacity: 0.85;
    }
`;