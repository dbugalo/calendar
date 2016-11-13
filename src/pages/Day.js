import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import DayC from '../components/Day'
import Country from '../components/Country'

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {country: 'BR'};
    }

    render(){
        return(
            <div>
                <div>
                    <Link to="/">Home</Link> | <Link to="/month">Mes</Link> | <Link to="/day">Dia</Link>
                </div>
                <br />
                <div>
                    Pais <Country data={this.state.country} />
                </div>
                <br />
                <div>
                    <DayC date={moment()} month={moment().format('MM')} />
                </div>
            </div>
        );
    }
}