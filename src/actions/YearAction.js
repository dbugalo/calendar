import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import TipoFeriado from '../components/TipoFeriado'
import Month from '../components/Month'
import Country from '../components/Country'

export default class YearAction extends React.Component {

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
                    <Month date={moment('2016-01-01')}/>
                    <Month date={moment('2016-02-01')}/>
                    <Month date={moment('2016-03-01')}/>
                    <Month date={moment('2016-04-01')}/>
                    <Month date={moment('2016-05-01')}/>
                    <Month date={moment('2016-06-01')}/>
                    <Month date={moment('2016-07-01')}/>
                    <Month date={moment('2016-08-01')}/>
                    <Month date={moment('2016-09-01')}/>
                    <Month date={moment('2016-10-01')}/>
                    <Month date={moment('2016-11-01')}/>
                    <Month date={moment('2016-12-01')}/>
                </div>
            </div>
        );
    }
}