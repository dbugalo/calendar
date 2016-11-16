import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import eventbus from '../Eventbus'
import Country from '../components/Country'
import MonthC from '../components/Month'

export default class Month extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            country: 'BR'
        };
    }
    
    handleChange(event) {
        eventbus().emit('tipoHoliday', event.target.value);
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
                    Tipo Feriados <select onChange={this.handleChange}>
                        <option value="true">Publico</option>
                        <option value="false">Todos</option>
                    </select>
                </div>
                <br />
                <MonthC country={this.state.country} date={moment()} />
            </div>
        );
    }
}