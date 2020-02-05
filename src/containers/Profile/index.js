import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import { HeaderNav } from "../../components/HeaderNav";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledList = styled(List)`
    background-color: white;
    font-family: 'Roboto', sans-serif;
    height: 85vh;
`
const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Historico = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Pedidos = styled.div`
    text-align: center;
`


function Profile(props){
    //react hooks

    return (
        <div>
            <HeaderNav display='none' menuText='Meu Perfil'/>
            <StyledList>
                  <StyledListItem>
                    <Typography variant="p">Bruna Oliveira</Typography>
                    <Typography variant="p">bruna_o@gmail.com</Typography>
                    <Typography variant="p">333.333.333-33</Typography>
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </StyledListItem>
                  <StyledListItem>
                  <ListItemText secondary="Endereço cadastrado"></ListItemText>
                  <Typography variant="p">Rua Alessandra Vieira, 42 - Santana</Typography>
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                        <EditIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                    </StyledListItem>
                    <br/>
                        <Historico>
                            <Typography variant="p">Histórico de Pedidos</Typography>
                            <hr/>
                            <br/>
                            <Pedidos>
                                <Typography variant="p">Você não realizou nenhum pedido</Typography>
                            </Pedidos>
                        </Historico>
              </StyledList>
            <BottomNav />
        </div>
    )
}

export default connect()(Profile)