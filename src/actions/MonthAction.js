import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import TipoFeriado from '../components/TipoFeriado'
import Country from '../components/Country'
import Month from '../components/Month'

export default class MonthAction extends React.Component {
    render(){
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
                <Month date={moment()} />
            </div>
        );
    }
}