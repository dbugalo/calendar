import {react} from 'react';
import moment from 'moment';

import Week from './Week'
import Holidays from './Holidays'

export default class Month extends React.Component {
    constructor() {
        super(...arguments);
        
        let startDate = moment([this.props.date.year(), this.props.date.month()]);
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
                var firstWeekDay = moment([this.props.date.year(), this.props.date.month()]).add(1, "year").week(week).day(1);
                var lastWeekDay = moment([this.props.date.year(), this.props.date.month()]).add(1, "year").week(week).day(7);
            } else {
                var firstWeekDay = moment([this.props.date.year(), this.props.date.month()]).week(week).day(1);
                var lastWeekDay = moment([this.props.date.year(), this.props.date.month()]).week(week).day(7);
            }

            var weekRange = moment.range(firstWeekDay, lastWeekDay);
            month.push(weekRange);
        }
        
        this.state = {date: this.props.date, month: month, country: this.props.country};
    }
    
    render() {
        let weeks = this.state.month.map(function(week) {
            return(<Week range={week} month={this.state.date.month()} />)
        }.bind(this)); 
        
        return(
            <div>
                <div className="calendar">
                    <table>
                        <thead>
                            <tr>
                                <td colSpan="7">
                                    <span className="calendar__selected-date">{ moment().month(this.state.date.month()).format("MMMM") } { this.state.date.year() }</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>{weeks}</tbody>
                    </table>
                </div>
                <div>Feriados ({this.state.country}): <Holidays date={this.state.date} country={this.state.country}/></div>
            </div>
            )
    }
}