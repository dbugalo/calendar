import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import Country from '../components/Country'
import MonthC from '../components/Month'

export default class Month extends React.Component {
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
                <MonthC country={this.state.country} date={moment()}/>
            </div>
        );
    }
}