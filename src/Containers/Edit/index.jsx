import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context';

import {
    Container,
    Box,
    Form,
    Input,
    Div,
    Earth,
    Mars,
    Button
} from './styles'

function Edit(props) {

    const { updateAddress } = useContext(DataContext);

    const [id, setID] = useState(props.adress.id);
    const [planet, setPlanet] = useState(props.adress.planet);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const updateAdress = (event) => {
        event.preventDefault();

        let newAdress = { id, planet, country, city, street };

        updateAddress(newAdress);

        alert('Endereço atualizado')
    };

    return (
        <Container hidden={props.hidden}>
            <Box>
                <Button onClick={() => props.setShow(!false)}>fechar</Button>
                <Form onSubmit={updateAdress}>
                    <Div>
                        <h3>Selecione o Planeta:</h3>
                        <Earth
                            onClick={() =>
                                setPlanet('Terra')}
                                $planet={planet}
                        >Terra
                        </Earth>
                        <Mars
                            onClick={() =>
                                setPlanet('Marte')}
                                $planet={planet}
                        >Marte
                        </Mars>
                    </Div>
                    {planet === 'Marte' ?
                        (
                            <>
                                    <Input
                                        required
                                        maxLength="4"
                                        type="text"
                                        value={street}
                                        placeholder='Lote'
                                        onChange={(event) =>
                                            setStreet(event.target.value)} />
                            </>
                        )
                        :
                        (
                            <>
                                    <Input
                                        required
                                        type="text"
                                        value={country}
                                        placeholder='País'
                                        onChange={(event) =>
                                            setCountry(event.target.value)} />
                                    <Input
                                        required
                                        type="text"
                                        value={city}
                                        placeholder='Cidade e Estado'
                                        onChange={(event) =>
                                            setCity(event.target.value)} />
                                    <Input
                                        required
                                        type="text"
                                        value={street}
                                        placeholder='Rua e número'
                                        onChange={(event) =>
                                            setStreet(event.target.value)} />
                            </>
                        )}
                    <Button type='submit'>Salvar</Button>
                </Form>
            </Box>
        </Container>
    );
}

export default Edit