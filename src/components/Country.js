import {react} from 'react';

export default class Country extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.props.data = event.target.value;
    }
    
    render() {
        return <select value={this.props.data} onChange={this.handleChange}>
                <option value="AR">Argentina</option>
                <option value="AO">Angola</option>
                <option value="AU">Australia</option>
                <option value="AW">Aruba</option>
                <option value="BE">Belgium</option>
                <option value="BG">Bulgaria</option>
                <option value="BR">Brazil</option>
                <option value="CA">Canada</option>
                <option value="CH">Switzerland</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="CZ">Czech Republic</option>
                <option value="DE">Germany</option>
                <option value="DK">Denmark</option>
                <option value="ES">Spain</option>
                <option value="FR">France</option>
                <option value="GB">United Kingdom</option>
                <option value="GT">Guatemala</option>
                <option value="HR">Croatia</option>
                <option value="HU">Hungary</option>
                <option value="ID">Indonesia</option>
                <option value="IE">Ireland</option>
                <option value="IN">India</option>
                <option value="IT">Italy</option>
                <option value="LS">Lesotho</option>
                <option value="LU">Luxembourg</option>
                <option value="MG">Madagascar</option>
                <option value="MQ">Martinique</option>
                <option value="MX">Mexico</option>
                <option value="NL">Netherlands</option>
                <option value="NO">Norway</option>
                <option value="PL">Poland</option>
                <option value="PR">Puerto Rico</option>
                <option value="RU">Russia</option>
                <option value="SI">Slovenia</option>
                <option value="SK">Slovakia</option>
                <option value="UA">Ukraine</option>
                <option value="US">United States</option>
        </select>;
    }
}