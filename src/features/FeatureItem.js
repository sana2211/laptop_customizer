import React, { Component } from 'react';
import slugify from 'slugify';
import  {USCurrencyFormat} from '../App'

class FeatureItem extends Component {
    constructor(props){

        super(props)
        console.log(props)
        }
    render() { 
        const {item, itemHash, feature, selected, updateFeature}=this.props
        return (
            <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === selected[feature].name}
              onChange={e => updateFeature(feature, item)}

            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
         )
    

    }
}
 
export default FeatureItem;