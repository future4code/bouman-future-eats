import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Rectangle = styled.div`
  width: 328px;
  height: 216px;
  background-color: #ffffff;
  border: 1px solid red; 
`
//A borda é só pra visualizar melhor o componente

const Title = styled.div`
  width: 360px;
  height: 42px;
` 

const Text = styled.p`
    width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`
export default function SelectedQuantity (props) {
  return(
    <Rectangle>
        <Title>
            <Text>Selecione a quantidade desejada</Text> 
        </Title>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>0</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Typography>1</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>2</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>3</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>4</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>5</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>6</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>7</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>8</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>9</Typography>
          </ExpansionPanelDetails>

          <ExpansionPanelDetails>
            <Typography>10</Typography>
          </ExpansionPanelDetails>

      </ExpansionPanel>
    </Rectangle>
  )
}


