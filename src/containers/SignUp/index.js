import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ActionButton } from '../../components/ActionButton';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
import { goBack } from 'connected-react-router';
import { HeaderNav } from '../../components/HeaderNav';
import { signUp } from '../../actions/users'

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

function SignUp(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        props.signUp({name, email, cpf, password})
    }

    return (
        <Root>
            <HeaderNav onClick={() => props.goBack() }  />

            <Banner>
                <img src={require('../../img/logo-future-eats-invert.png')} />
            </Banner>
            <Typography variant="h6" >
                Cadastrar
            </Typography>

            <FormContainer 
            autoComplete="off"
            onSubmit={handleSubmit}
            >

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
                    
                />

                <TextField
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="confirm"
                    type="password"
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    value={confirm}
                    onChange={(event) => setConfirm(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <ActionButton type='submit' text="Criar" />

            </FormContainer>
        </Root>
    )
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    signUp: (user) => dispatch(signUp(user))
})

export default connect(null, mapDispatchToProps)(SignUp)