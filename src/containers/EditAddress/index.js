import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { ActionButton } from '../../components/ActionButton';
import { HeaderNav } from '../../components/HeaderNav';
import { goBack } from 'connected-react-router';
import { connect } from 'react-redux';

const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

function EditAddress(props) {
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    return (
        <Root>
            <HeaderNav onClick={() => props.goBack()} menuText="Endereço" />

            <FormContainer noValidate autoComplete="off">

                <TextField
                    name="logradouro"
                    type="text"
                    label="Logradouro"
                    placeholder="Rua / Av."
                    value={logradouro}
                    onChange={(event) => setLogradouro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="numero"
                    type="text"
                    label="Número"
                    placeholder="Número"
                    value={numero}
                    onChange={(event) => setNumero(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="complemento"
                    type="text"
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    value={complemento}
                    onChange={(event) => setComplemento(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    pattern={props.pattern}
                />

                <TextField
                    name="bairro"
                    type="text"
                    label="Bairro"
                    placeholder="Bairro"
                    value={bairro}
                    onChange={(event) => setBairro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    value={cidade}
                    onChange={(event) => setCidade(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="estado"
                    type="text"
                    label="Estado"
                    placeholder="Estado"
                    value={estado}
                    onChange={(event) => setEstado(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <ActionButton text="Salvar"></ActionButton>

            </FormContainer>
        </Root>
    )
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
})

export default connect(null, mapDispatchToProps)(EditAddress)