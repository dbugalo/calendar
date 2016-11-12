import {react} from 'react';

import moment from 'moment';

import $ from "jquery";
import Promise from 'bluebird';

import Holiday from './Holiday';

export default class Holidays extends React.Component {
    constructor() {
        super(...arguments);
        
        this.state = {
            holidays: []
        }
    }
    
    componentDidMount() {
        Promise.resolve($.get('https://holidayapi.com/v1/holidays?key=44f3c710-3de3-4f51-9dc4-9520946eb711&country=BR&year=' + this.props.date.year())).then(function(value) {
            var holidays = [];
            
            for (var h in value.holidays) {
                let holiday = moment(h);
                if (this.props.date.isSame(holiday)) {
                    value.holidays[h].map(function(v) {
                        holidays.push(<Holiday name={v.name} />);    
                    })
                }
            }
            
            this.setState({holidays: holidays})
        }.bind(this));
    }
    
    render() {
        return(<span>{this.state.holidays}</span>)
    }
}