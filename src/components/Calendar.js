import {react} from 'react';
import moment from 'moment';
require('moment-range');

import Month from './Month';

export default class Calendar extends React.Component {
    constructor() {
        super(...arguments);
    	this.state = {
        	date: moment(),
            month: moment().month(),
            year: moment().year()
        }
    }
    
    render() {
        return(
            <div>
                <div className="calendar">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <a href="#" className="calendar__nav calendar__nav--previous">&lt;</a>
                                </td>
                                <td colSpan="5">
                                    <span className="calendar__selected-date">{ moment().month(this.state.month).format("MMMM") } { this.state.year }</span>
                                </td>
                                <td>
                                    <a href="#" className="calendar__nav calendar__nav--next">&gt;</a>
                                </td>
                            </tr>
                        </thead>
                        <Month month={this.state.month} year={this.state.year}/>
                    </table>
                </div>
            </div>
        )
    }
}