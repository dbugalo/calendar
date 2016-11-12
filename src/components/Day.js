import {react} from 'react';

import moment from 'moment';
require('moment-range');

export default class Day extends React.Component {
    render() {
        let isCurrentMonth = this.props.date.month() == this.props.month
        let isToday = this.props.date.format('DD-MM-YYYY') == moment().format('DD-MM-YYYY')
        let isSelected = this.props.date.format('DD-MM-YYYY') == moment().format('DD-MM-YYYY')
        var dayClasses = "calendar__day";

        if (!isCurrentMonth){
            dayClasses += " calendar__day--muted";
        }

        if (isSelected){
            dayClasses += " calendar__day--selected";
        }

        if (isToday){
            dayClasses += " calendar__day--today";
        }
        
        return(<td key={this.props.date.format('D-MM')}>
            <a href="#" className={dayClasses}>{this.props.date.format('D')}</a>
        </td>)
    }
}