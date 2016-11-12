import {react} from 'react';
import moment from 'moment';

import Week from './Week'

export default class Month extends React.Component {
    constructor() {
        super(...arguments);
        
        let startDate = moment([this.props.year, this.props.month]);
        let firstDay = moment(startDate).startOf('month');
        let endDay = moment(startDate).endOf('month');
        let monthRange = moment.range(firstDay, endDay);
 
        let indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
        
        var weeks = [];
        monthRange.by('days', function(moment) {
            var ref;
            if (ref = moment.week(), indexOf.call(weeks, ref) < 0) {
                return weeks.push(moment.week());
            }
        });
        
        var month = [];
        for (var i = 0, len = weeks.length; i < len; i++) {
            var week = weeks[i];
            if (i > 0 && week < weeks[i-1]){
                // We have switched to the next year
                var firstWeekDay = moment([this.props.year, this.props.month]).add(1, "year").week(week).day(1);
                var lastWeekDay = moment([this.props.year, this.props.month]).add(1, "year").week(week).day(7);
            } else {
                var firstWeekDay = moment([this.props.year, this.props.month]).week(week).day(1);
                var lastWeekDay = moment([this.props.year, this.props.month]).week(week).day(7);
            }

            var weekRange = moment.range(firstWeekDay, lastWeekDay);
            month.push(weekRange);
        }
        
        this.state = {month: month};
    }
    
    render() {
        let weeks = this.state.month.map(function(week) {
            return(<Week range={week} month={this.props.month} />)
        }.bind(this)); 
        
        return(<tbody>{weeks}</tbody>)
    }
}