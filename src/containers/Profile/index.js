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
import { push } from 'connected-react-router';
import { routes } from '../Router'
import { getProfile } from '../../actions/users'

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

    React.useEffect(() => props.getProfile()
    , [])

    return (
        <div>
            <HeaderNav display='none' menuText='Meu Perfil'/>
            <StyledList>
                  <StyledListItem>
                    <Typography variant="p">{props.profileData.name}</Typography>
                    <Typography variant="p">{props.profileData.email}</Typography>
                    <Typography variant="p">{props.profileData.cpf}</Typography>
                    <ListItemSecondaryAction>
                      <IconButton onClick={props.goToEditProfile} aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </StyledListItem>
                  <StyledListItem>
                  <ListItemText secondary="Endereço cadastrado"></ListItemText>
                  <Typography variant="p">{props.profileData.address}</Typography>
                    <ListItemSecondaryAction>
                    <IconButton onClick={props.goToEditAddress} aria-label="Edit">
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

const mapStateToProps = (state) => ({
    profileData: state.users.profile,
    orderHistory: state.orders.history
})

const mapDispatchToProps = (dispatch) => ({
    goToEditProfile: () => dispatch(push(routes.editProfile)),
    goToEditAddress: () => dispatch(push(routes.editAddress)),
    getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)