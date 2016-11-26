import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import TipoFeriado from '../components/TipoFeriado'
import Day from '../components/Day'
import Country from '../components/Country'

export default class DayAction extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {country: 'BR'};
    }
    
    handleChange(event) {
        eventbus().emit('tipoHoliday', event.target.value);
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
                    Tipo Feriados <TipoFeriado />
                </div>
                <br />
                <div>
                    <Day date={moment()} month={moment().format('MM')} />
                </div>
            </div>
        );
    }
}