import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
};

const bar = () => (

    <AppBar
        title="Air Quality London"
        showMenuIconButton={false}
    />
);

export default bar;