import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const H2 = styled.h2`
    color: #000;
`
export const Text = styled.p`
    margin: 0;
    font-weight: bold;
    color: #000;
`

export const Form = styled.form`
    width: 250px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #006494;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 1px 1px 10px #13293d;
`
export const Div = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
`
export const Label = styled.label`
    
`

export const Button = styled.button`
    background-color: #006494;
    color: #e8f1f2;
    font-weight: bold;
    width: 230px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 10px 20px;
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
    color: ${props => props.$planet === 'Terra' ? '#e8f1f2' : '#000'};
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
    color: ${props => props.$planet === 'Marte' ? '#e8f1f2' : '#000'};
    background: ${props => props.$planet === 'Marte' 
    ? '#006494' 
    : ''};
`