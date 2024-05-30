import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Context';

import {
    Container,
    H2,
    Text,
    Form,
    Div,
    Label,
    Mars,
    Earth,
    Input,
    Button
} from './styles';

function Home() {

    const { adresses, setAdresses } = useContext(DataContext);

    const [planet, setPlanet] = useState('Terra');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let addressExists = adresses.some(address => {
            return address.street.toLowerCase() === street.toLocaleLowerCase();
        });
        
        if (addressExists) {
            alert('Esse endereço já está cadastrado');
        } else {
            if (planet === 'Terra') {
                setAdresses([...adresses, { id: (adresses.length + 1), planet, country, city, street }]);
            } else {
                setAdresses([...adresses, { id: (adresses.length + 1), planet, street }]);
            }
            alert('Endereço Cadastrado!');
        }
        
    };

    return (
        <Container>
            <H2>Cadastro de Endereços</H2>
            <Form onSubmit={handleSubmit}>

                <Div>
                    <Text>Selecione o Planeta:</Text>
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
                                <Label>
                                    <Input
                                        required
                                        maxLength="4"
                                        type="text"
                                        value={street}
                                        placeholder='Lote'
                                        onChange={(event) =>
                                            setStreet(event.target.value)} />
                                </Label>
                        </>
                    )
                    :
                    (
                        <>
                                <Label>
                                    <Input
                                        required
                                        type="text"
                                        value={country}
                                        placeholder='País'
                                        onChange={(event) =>
                                            setCountry(event.target.value)} />
                                </Label>
                                <Label>
                                    <Input
                                        required
                                        type="text"
                                        value={city}
                                        placeholder='Cidade e Estado'
                                        onChange={(event) =>
                                            setCity(event.target.value)} />
                                </Label>
                                <Label>
                                    <Input
                                        required
                                        type="text"
                                        value={street}
                                        placeholder='Rua e número'
                                        onChange={(event) =>
                                            setStreet(event.target.value)} />
                                </Label>
                        </>
                    )}
                <Button type="submit">Salvar</Button>
            </Form>
            <Button onClick={() => navigate('/adress')}>Endereços</Button>
        </Container>
    );
}

export default Home;

