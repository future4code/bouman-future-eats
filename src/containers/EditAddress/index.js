import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { ActionButton } from '../../components/ActionButton';
import { HeaderNav } from '../../components/HeaderNav';
import { goBack } from 'connected-react-router';
import { connect } from 'react-redux';
import { addAddress, getAddressDetails } from '../../actions/users';

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
    const [street, setStreet] = useState(props.address.street)
    const [number, setNumber] = useState(props.address.number)
    const [complement, setComplement] = useState(props.address.complement)
    const [neighbourhood, setNeighbourhood] = useState(props.address.neighbourhood)
    const [city, setCity] = useState(props.address.city)
    const [state, setState] = useState(props.address.state)

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
        props.goBack()
    }

    React.useEffect(()=>
        props.getAddressDetails()
    ,[])

    return (
        <Root>
            <HeaderNav onClick={() => props.goBack()} menuText="Endereço" />

            <FormContainer onSubmit={handleSubmit} autoComplete="off">

                <TextField
                    name="logradouro"
                    type="text"
                    label="Logradouro"
                    placeholder="Rua / Av."
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
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
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
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
                    value={complement}
                    onChange={(event) => setComplement(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    pattern={props.pattern}
                />

                <TextField
                    name="bairro"
                    type="text"
                    label="Bairro"
                    placeholder="Bairro"
                    value={neighbourhood}
                    onChange={(event) => setNeighbourhood(event.target.value)}
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
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
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
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <ActionButton type="submit" text="Salvar"></ActionButton>

            </FormContainer>
        </Root>
    )
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    addAddress: (address) => dispatch(addAddress(address)),
    getAddressDetails: () => dispatch(getAddressDetails())
})

const mapStateToProps = state => ({
   address: state.users.addressDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress)