import React from 'react'
import Key from './Key'
import Region from './Region'
import AzureRecord from './AzureRecord'
import { flip_recording_azure, flip_recording_A, azure_key } from '../../../redux/actions'
import store from '../../../store/';



export default function AzureOptions() {
    // These are functions that take an object and return an element of the object.
    // They are passed to useSelector, which feeds the global state object into them.

    return (
         <div className="AzureOptions" id="options-space">
              <h1>Options</h1>
              <div className="item-wrapper">
                   <Key store ={store}/>
              </div> <br></br> <br></br> <br></br>
              <div className="item-wrapper">
                   <Region/>
              </div>
             <div className = "item-wrapper">
                 <AzureRecord item="Record"/>
             </div>
         </div>
    );
}
