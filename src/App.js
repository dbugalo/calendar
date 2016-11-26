import {react} from 'react';
import { Router, Route, Link , hashHistory } from 'react-router'

import YearAction from './actions/Year';
import MonthAction from './actions/Month';
import DayAction from './actions/Day';

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={YearAction} />
                    <Route path="/month" component={MonthAction} />
                    <Route path="/day" component={DayAction} />
                </Router>, document.getElementById("content"));