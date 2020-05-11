import React from 'react'
import { isPureish } from '@babel/types';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk'
import AzureKey from '../../AzureTopSpace/AzureOptions/Key';
import {useSelector, connect} from 'react-redux'
import {bindActionCreators} from "redux"


//const key = (state) =>state.azureKey

 const key = '7882896e3ffc4fe3b2f4c055f0914d67';
//const key = this.props.key;
const regionOption = 'northcentralus';
const lang = 'en-US';

const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(key, regionOption);

speechConfig.speechRecognitionLanguage = lang;
const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
var reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

class AzureRecognition extends React.PureComponent {
    constructor() {
        super()
        this.state = {
           line: '',
        }
        
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
    }

    componentDidMount() {
        
        this.start();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isRecording === this.props.isRecording)
             return
        if (this.props.isRecording)
             this.start()
        else this.stop()
   }

   
    start() {
        var out = document.getElementById('out');
        var lastRecognized = out.innerHTML;
        // reco.recognizeOnceAsync(
        //     (result) => {
        //         switch (result.reason) {
        //             case SpeechSDK.ResultReason.RecognizedSpeech:
        //                 var div = document.createElement('div');
        //                 div.textContent = result.text;
        //                 out.appendChild(div);
        //                 break;
        //         }
        //     }

        // );

        reco.recognizing = function(s, e) {
            window.console.log(e);
            out.innerHTML = lastRecognized + e.result.text;
        }

        reco.recognized = function (s,e) {
            window.console.log(e);

            if(e.result.reason == SpeechSDK.ResultReason.NoMatch) {
                var noMatchDetail = SpeechSDK.NoMatchDetails.fromResult(e.result);
            }
            lastRecognized += e.result.text + "\r\n";
            out.innerHTML = lastRecognized;
        }

        reco.startContinuousRecognitionAsync();

    }

    stop() {
        reco.stopContinuousRecognitionAsync(
            function() {
                reco.close();
                reco = undefined;

            },
            function (err) {
                reco.close();
                reco = undefined;
            }
        )
    }
    render() {
        // out holds all past lines. curr holds the current line.
        return (
             <div>
                
                  <div id='out'></div>
                    <p>{this.props.key}</p>
                    
             </div>
        )
   }
}

export default AzureRecognition