import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';

function Region(props) {
     //const setting = useSelector(props.setting) // Get current value of the setting.
     // useDispatch returns the state modifying function, invoked below.
     //const dispatch = useDispatch()
     return (
          // <div>
          //      {props.item}
          //      <div className="setting-wrapper">
          //      <label for ="regionOptions"> Region: </label>
          //           <div className="setting"></div>
          //           <select id="regionOptions"onChange={props.inputChanged}>
          //               <option value="northcentralus" selected="selected">North Central US</option>
          //               <option value="westus" >West US</option>
          //               <option value="westus2">West US2</option>
          //               <option value="eastus">East US</option>
          //               <option value="eastus2">East US2</option>
          //               <option value="eastasia">East Asia</option>
          //               <option value="southeastasia">South East Asia</option>
          //               <option value="northeurope">North Europe</option>
          //               <option value="westeurope">West Europe</option>
          //           </select>    
          //      </div>
          // </div>
          <div>
               {props.item}
               <div className="setting-wrapper">
                    <label for ="keyArea"> Region: </label>
                    <input type="text" value={props.inputValue} onChange={props.inputChanged}/>
                    <p>{props.inputValue}</p>
                    
               </div>
          </div>

     );
}
const mapStateToProps = (state) => {
     return {
          inputValue: state.inputValue
     }
}

const mapDispatchtoProps = (dispatch) => {
     return {
          inputChanged: (evt) => {
               console.log('changed', evt.target.value);
               const action = {type: 'INPUT_REGION', text: evt.target.value};
               dispatch(action);
          }
     }
}

export default connect(mapStateToProps, mapDispatchtoProps) (Region);