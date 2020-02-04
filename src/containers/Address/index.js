import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ActionButton } from '../../components/ActionButton';

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

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

function Address(props) {
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    return (
        <Root>

            <Banner>
            </Banner>
            <Typography variant="h6">
                Meu endereço
            </Typography>

            <FormContainer noValidate autoComplete="off">

                <TextField
                //Logradouro
                    name="logradouro"
                    type="text"
                    label="Logradouro"
                    placeholder="Rua / Av."
                    value={logradouro}
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
                    value={numero}
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
                    value={complemento}
                    onChange={(event) => setComplemento(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />            

                <TextField
                //Bairro
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
                //Cidade
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
                //Estado
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

export default withStyles(styles)(Address);