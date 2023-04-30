import styled from "@emotion/styled";

export const InputWrapper = styled.input`
    display: block;
    width: 100%;
    padding: 8px;
    border: 2px solid #4E84D4;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.5;
    color: #4E84D4;
    background-color: #F1F5FB;
    transition: border-color 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: #6E9AE2;
    }
`;
