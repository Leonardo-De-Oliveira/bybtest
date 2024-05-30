import styled from 'styled-components'
import { SiPlanetscale } from "react-icons/si";
import { IoEarth, IoPersonAddOutline } from "react-icons/io5";
import { FaTrash, FaEdit } from "react-icons/fa";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Card = styled.div`
    width: 300px;
    border: 1px solid #006494;
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 2px #006494;
`
export const H2 = styled.h2`

`

export const Div = styled.div`
    width: 324px;
    height: 650px;
    background-color: #fff;
    border: 1px solid #006494;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 10px #13293d;
    overflow-y: auto;
    overflow-x: hidden;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`
export const BoxAdress = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 5px;
`

export const Title = styled.p`
    font-weight: 600;
    margin: 5px 0;
`

export const Text = styled.p`
    margin: 5px 0;
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


export const PlanetEarth = styled(IoEarth)`
    width: 30px;
    height: 30px;
    color: blue;
`

export const PlanetMars = styled(SiPlanetscale)`
    width: 30px;
    height: 30px;
    color: red;
`
export const Trash = styled(FaTrash)`
    width: 15px;
    height: 15px;
    color: #000;
`
export const EditIcon = styled(FaEdit)`
    width: 15px;
    height: 15px;
    color: #006494;
`