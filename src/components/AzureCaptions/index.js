import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import AzureRecognition from './AzureRecognition'
import store from '../../store'


export default function AzureCaptions(props) {
     const lineWidth = useSelector((state) => state.lineWidth)
     const recording = useSelector((state) => state.recordingAzure)
     var azureKey = 'ddjsfdjksnf'
     // Sloppy styling. Please change.
     var paddingString = (11 - lineWidth) * 3 + 'vw'
     var h = props.height
     var sz = props.textSize
     var wid = "calc(100vh - 2 * " + paddingString + ")"
     if(window.innerHeight > window.innerWidth) {
       wid = "calc(100vw - 2 * " + paddingString + ")"
     }
     return ( <div className="captionsSpace" id="captionsSpace"
          style={{
            fontSize: sz,
            height: h,
            width: wid,
            backgroundColor: "blue",
            paddingLeft: paddingString,
            paddingRight: paddingString }}>
               <AzureRecognition isRecording = {recording} key = {azureKey}/>
          </div> )
}
