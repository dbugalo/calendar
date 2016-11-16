import {react} from 'react';

import moment from 'moment';

import $ from "jquery";
import Promise from 'bluebird';

import eventbus from '../Eventbus'
import Holiday from './Holiday';

export default class Holidays extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            country: props.country,
            tipoHoliday: false,
            holidays: []
        }
        
        eventbus().on('country', function(param) {
            this.setState({country: param});
            this.getHolidays(param, this.props.date.year(), this.state.tipoHoliday);
        }.bind(this));
        
        eventbus().on('tipoHoliday', function(param) {
            this.setState({tipoHoliday: param})
            this.getHolidays(this.state.country, this.props.date.year(), param);
        }.bind(this));
    }
    
    componentDidMount() {
        this.getHolidays(this.state.country, this.props.date.year(), this.state.tipoHoliday);
    }
    
    getHolidays(country, year, tipoHoliday) {
        Promise.resolve($.get('https://holidayapi.com/v1/holidays?key=44f3c710-3de3-4f51-9dc4-9520946eb711&country='+ country+ '&year=' + year + "&public=" + tipoHoliday)).then(function(value) {
            var holidays = [];
            
            for (var h in value.holidays) {
                let holiday = moment(h);
                if (this.props.date.isSame(holiday, 'month')) {
                    value.holidays[h].map(function(v) {
                        var i = moment(v.date);
                        holidays.push(<Holiday name={i.format("DD") + " - " + v.name + " "} />);    
                    })
                }
            }
            
            this.setState({holidays: holidays})
        }.bind(this));
    }
    
    render() {
        return(<ul>{this.state.holidays}</ul>)
    }
}