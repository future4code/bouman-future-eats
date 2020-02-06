import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ActionButton } from '../../components/ActionButton';
import { connect } from 'react-redux'
import  { addAddress } from '../../actions/users'


const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Banner = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    margin: 20px;
`

function Address(props) {
    const [street, setLogradouro] = useState("")
    const [number, setNumero] = useState("")
    const [complement, setComplement] = useState("")
    const [neighbourhood, setBairro] = useState("")
    const [city, setCidade] = useState("")
    const [state, setEstado] = useState("")

    const handleSubmit = ev => {
        ev.preventDefault()
        props.addAddress(
            {
                street,
                number,
                complement,
                neighbourhood,
                city,
                state
            }
        )
    }

    return (
        <Root>

            <Banner>
            </Banner>
            <Typography variant="h6">
                Meu endereço
            </Typography>

            <FormContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    //Logradouro
                    name="logradouro"
                    type="text"
                    label="Logradouro"
                    placeholder="Rua / Av."
                    value={street}
                    onChange={(event) => setLogradouro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern} //VER O QUE É ISSO
                />

                <TextField
                    //Número
                    name="numero"
                    type="text"
                    label="Número"
                    placeholder="Número"
                    value={number}
                    onChange={(event) => setNumero(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    //Complemento
                    name="complemento"
                    type="text"
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    value={complement}
                    onChange={(event) => setComplement(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    pattern={props.pattern}
                />

                <TextField
                    //Bairro
                    name="bairro"
                    type="text"
                    label="Bairro"
                    placeholder="Bairro"
                    value={neighbourhood}
                    onChange={(event) => setBairro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    //Cidade
                    name="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    value={city}
                    onChange={(event) => setCidade(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    //Estado
                    name="estado"
                    type="text"
                    label="Estado"
                    placeholder="Estado"
                    value={state}
                    onChange={(event) => setEstado(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />
                <ActionButton type='submit' text="Salvar"></ActionButton>
            </FormContainer>
        </Root>
    )
}

function mapDispatchToProps(dispatch){
    return({
        addAddress: (address) => dispatch(addAddress(address))
    })
}

export default connect(null, mapDispatchToProps)(Address);