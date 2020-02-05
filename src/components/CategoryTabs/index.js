import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '95%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="main"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab style={{ width: '100px' }} label="Burger" />
            <Tab style={{ width: '100px' }} label="Asiática" />
            <Tab style={{ width: '100px' }} label="Massas" />
            <Tab style={{ width: '100px' }} label="Saudáveis" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Burger</TabContainer>}
        {value === 1 && <TabContainer>Asiática</TabContainer>}
        {value === 2 && <TabContainer>Massas</TabContainer>}
        {value === 3 && <TabContainer>Saudáveis</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);