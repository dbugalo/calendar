import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import eventbus from '../Eventbus'
import Year from '../components/Year'
import Country from '../components/Country'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {country: 'BR', tipoHoliday: false};
    }
    
    handleChange(event) {
        eventbus().emit('tipoHoliday', event.target.value);
    }
    
    render(){
        console.log(moment().months());
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
                <Year date={moment()} />
            </div>
        );
    }
}