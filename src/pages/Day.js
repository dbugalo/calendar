import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import DayC from '../components/Day'
import Country from '../components/Country'

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {country: 'BR', tipoHoliday: false};
    }
    
    handleChange(event) {
        this.setState({tipoHoliday: event.target.value});
    }
    
    render() {
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
                    Tipo Feriados <select value={this.state.tipoHoliday} onChange={this.handleChange}>
                        <option value="true">Publico</option>
                        <option value="false">Todos</option>
                    </select>
                </div>
                <br />
                <div>
                    <DayC date={moment()} month={moment().format('MM')} />
                </div>
            </div>
        );
    }
}