import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
    background-color: #4E84D4;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #3b6ca8;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(78, 132, 212, 0.3);
    }
`;
