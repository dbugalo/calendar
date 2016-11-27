import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import TipoFeriado from '../components/TipoFeriado'
import Day from '../components/Day'
import Country from '../components/Country'

export default class DayAction extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <Link to="/">Home</Link> | <Link to="/month">Mes</Link> | <Link to="/day">Dia</Link>
                </div>
                <br />
                <div>
                    Pais <Country />
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