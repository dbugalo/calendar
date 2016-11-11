import {react} from 'react';
import moment from 'moment';

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
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div>
                    Selection: { this.state.date.format("D MMMM YYYY") }
                </div>
            </div>
        )
    }
}