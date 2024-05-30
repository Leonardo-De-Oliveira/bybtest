import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Context';
import Edit from '../Edit';

import {
    Container,
    Card,
    H2,
    Div,
    Box,
    BoxAdress,
    Title,
    Text,
    PlanetEarth,
    PlanetMars,
    EditIcon,
    Trash,
    Button
} from './styles'

function Adress() {

    const navigate = useNavigate();

    const { adresses, setAdress, DeleteAddress } = useContext(DataContext);
    const [selectedId, setSelectedId] = useState(null);
    const [show, setShow] = useState(true);

    return (
        <Container>
            <H2>Selecionar endereço:</H2>
            <Div>
                {
                    adresses.map((adress) => (
                        <Card key={adress.id}>
                            <Box>
                                <BoxAdress>
                                    {adress.planet === 'Terra' ? <PlanetEarth /> : <PlanetMars />}
                                    <Title>{adress.planet}</Title>
                                </BoxAdress>
                                <input
                                    type='checkbox'
                                    checked={selectedId === adress.id}
                                    onChange={() => setSelectedId(adress.id)}
                                />
                            </Box>
                            <BoxAdress>
                                <Box>
                                    <Text>{adress.country}</Text>
                                    <Text>{adress.city}</Text>
                                </Box>
                                {adress.planet === 'Marte' ? (
                                    <Text>Lote: {adress.street}</Text> 
                                ) : (
                                    <Text>{adress.street}</Text> 
                                )}
                            </BoxAdress>
                            <BoxAdress>
                                <EditIcon onClick={() => setShow(!true)} />
                                <Trash onClick={() => DeleteAddress(adress.id)} />
                            </BoxAdress>
                            
                            <Edit 
                                hidden={show} 
                                setShow={setShow} 
                                adress={adress}
                                set={setAdress}
                                />
                        </Card>
                        
                    ))
                }
            </Div>
            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    );
}

export default Adress;