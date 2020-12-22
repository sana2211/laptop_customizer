import React, { Component } from 'react';
import  {USCurrencyFormat} from '../App'

class Summary extends Component {
    constructor(props){

        super(props)
        console.log(props)
        }
     render() { 
        const {featureHash, feature, selectedOption}=this.props

        return ( 
        <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div> );
    }
}
 
export default Summary;