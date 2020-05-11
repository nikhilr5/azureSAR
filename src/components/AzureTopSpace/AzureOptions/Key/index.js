import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import {connect} from 'react-redux';

 function Key(props) {

     
     return (
          <div>
               {props.item}
               <div className="setting-wrapper">
                    <label for ="keyArea"> Key: </label>
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

const mapDispatchToProps = (dispatch) => {
     return {
          inputChanged: (evt) => {
               //console.log('changed', evt.target.value);
               const action = {type: 'INPUT_KEY', text: evt.target.value};
               dispatch(action);
          }
     }
}

export default connect(mapStateToProps, mapDispatchToProps) (Key);

