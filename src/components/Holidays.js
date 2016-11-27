import {react} from 'react';

import moment from 'moment';

import $ from "jquery";
import Promise from 'bluebird';

import Holiday from './Holiday';

export default class Holidays extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {holidays: []}
        
        this.getHolidays(this.context.country.value, this.props.date.year(), this.context.tipoFeriado.value);
    }
    
    componentDidMount() {
        this.context.country.subscribe(() => this.getHolidays(this.context.country.value, this.props.date.year(), this.context.tipoFeriado.value));
        this.context.tipoFeriado.subscribe(() => this.getHolidays(this.context.country.value, this.props.date.year(), this.context.tipoFeriado.value));
    }
    
    getHolidays(country, year, tipoHoliday) {
        Promise.resolve($.get('https://holidayapi.com/v1/holidays?key=44f3c710-3de3-4f51-9dc4-9520946eb711&country='+ country+ '&year=' + year + "&public=" + tipoHoliday)).then(function(value) {
            var holidays = [];
            
            for (var h in value.holidays) {
                let holiday = moment(h);
                if (this.props.date.isSame(holiday, 'month')) {
                    value.holidays[h].map(function(v) {
                        var i = moment(v.date);
                        holidays.push(<Holiday key={i.format("DD-MM-YYYY")} name={i.format("DD") + " - " + v.name + " "} />);    
                    })
                }
            }
            
            this.setState({holidays: holidays})
        }.bind(this)).catch((e) => this.setState({holidays: <li>Houston, we have a problem: {e}</li>}));
    }
    
    render() {
        return(<ul>{this.state.holidays}</ul>)
    }
}
               
Holidays.contextTypes = {
    country: React.PropTypes.object,
    tipoFeriado: React.PropTypes.object
};