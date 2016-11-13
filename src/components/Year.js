import {react} from 'react';

import moment from 'moment';
require('moment-range');

import Month from './Month'

export default class Year extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: props.date,
            country: 'BR'
        }
    }
    
    render() {
        return <div>
                <Month country={this.state.country} date={moment('2016-01-01')}/>
                <Month country={this.state.country} date={moment('2016-02-01')}/>
                <Month country={this.state.country} date={moment('2016-03-01')}/>
                <Month country={this.state.country} date={moment('2016-04-01')}/>
                <Month country={this.state.country} date={moment('2016-05-01')}/>
                <Month country={this.state.country} date={moment('2016-06-01')}/>
                <Month country={this.state.country} date={moment('2016-07-01')}/>
                <Month country={this.state.country} date={moment('2016-08-01')}/>
                <Month country={this.state.country} date={moment('2016-09-01')}/>
                <Month country={this.state.country} date={moment('2016-10-01')}/>
                <Month country={this.state.country} date={moment('2016-11-01')}/>
                <Month country={this.state.country} date={moment('2016-12-01')}/>
             </div>
    }
}