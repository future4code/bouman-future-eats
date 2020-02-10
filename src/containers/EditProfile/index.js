import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ActionButton } from '../../components/ActionButton';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { routes } from '../Router/index';
import { HeaderNav } from '../../components/HeaderNav';
import { updateProfile } from '../../actions/users'

const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Banner = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  margin-top: 34px;
  margin-bottom: 30px;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

function EditProfile(props) {
    const [name, setName] = useState(props.profile.name)
    const [email, setEmail] = useState(props.profile.email)
    const [cpf, setCpf] = useState(props.profile.cpf)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        props.updateProfile({name, email, cpf})
        props.goBack()
    }

    return (
        <Root>
            <HeaderNav onClick={() => props.goBack()} menuText="Editar" />

            <FormContainer onSubmit={handleSubmit} autoComplete="off">

                <TextField
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Nome e cobrenome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="cpf"
                    type="number"
                    label="CPF"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <ActionButton type="submit" text="Salvar" />

            </FormContainer>
        </Root>
    )
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    updateProfile: (profile) => dispatch(updateProfile(profile)),
})

const mapStateToProps = state => ({
    profile: state.users.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)