import style from "styled-components";

export const Wrapper = style.div`
    padding: 1rem;

`
export const Flex = style.div`
    display:flex;
    gap: 1rem;
`
export const Text = style.p`
    line-height: 1.5;
    font-size: 1.1rem;
    text-transform: capitalize;
    span{
        font-weight: bold;
    }
`

export const Button = style.button`
    padding: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    background: blue;
    border: none;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: .7;
    }
`