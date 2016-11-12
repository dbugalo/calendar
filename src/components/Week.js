import {react} from 'react';

import moment from 'moment';
require('moment-range');

import Day from './Day'

export default class Week extends React.Component {
    render() {
        var dayList = []
        this.props.range.by('days', function(day){
            dayList.push(day)	
        });
    
        var days = dayList.map(function(day) {
            return(<Day date={day} month={this.props.month} />)
        }.bind(this));
    
        return(<tr>{days}</tr>)
    }
}