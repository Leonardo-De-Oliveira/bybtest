import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000000e9;
    color: #fff;
    z-index: 1;
    position:  fixed;
    top: 0;
`
export const Box = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Form = styled.form`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const Button = styled.button`
    background-color: #006494;
    color: #e8f1f2;
    font-weight: bold;
    width: 80px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background-color: #e8f1f2;
        color:#006494;
        border-color: #006494;
    }

    &:active {
        background-color: #00649488;
        color: #fff;
    }
`
export const Div = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
`
export const Input = styled.input`
    width: 210px;
    height: 30px;
    margin: 10px 0;
    border-radius: 5px;
    padding-left: 10px;
`

export const Earth = styled.div`
    width: 50px;
    height: 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;
    color: #e8f1f2;
    background: ${props => props.$planet === 'Terra' 
    ? '#006494' 
    : ''};
`

export const Mars = styled.div`
    width: 50px;
    height: 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;
    color: #e8f1f2;
    background: ${props => props.$planet === 'Marte' 
    ? '#006494' 
    : ''};
`