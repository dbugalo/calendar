import {react} from 'react';

import moment from 'moment';
require('moment-range');

import Month from './Month';

export default class Calendar extends React.Component {
    constructor() {
        super(...arguments);
        
        let date = moment('2015-01-01');
    	this.state = {
        	date: date,
            country: 'BR'
        }
    }
    
    render() {
        return(<Month country={this.state.country} date={this.state.date} />)
    }
}