import React from 'react';
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import TopSpace from './components/TopSpace'
import Captions from './components/Captions'
import './App.css'
import AzureOptions from './components/AzureTopSpace/AzureOptions';
import AzureCaptions from './components/AzureCaptions'
import AzureTopSpace from './components/AzureTopSpace'
import AzureRecognition from './components/AzureCaptions/AzureRecognition';


var root = document.getElementById('root');

export default function App() {
     const darkMode = getComputedStyle(document.documentElement).getPropertyValue('--primary'); // #999999
     // Get global state from Redux. See the React Redux tutorial.

     const SwitchMenus = useSelector((state)=> state.switchMenus)
     const AzureRecord = useSelector((state)=> state.recordingAzure)
     
     

     const textSize = useSelector((state) => state.textSize)
     const numLines = useSelector((state) => state.numLines)
     const invertColors = useSelector((state) => state.invertColors)
     // Convert variables to CSS-friendly strings.
     var sizeString = textSize + 'vh'
     // Size of bottom space (text area) relative to text size and number of lines.
     // 1.5 is an estimate of the ratio of line size to text size.
     // This is a sloppy way of calculating the height. Please improve on this.
     var botHeight = textSize * numLines * 1.5
     // topHeight + botHeight should always = 100vh because we don't want the full
     // page to scroll (we only want the individual areas to scroll).
     var topHeight = 100 - botHeight + 'vh'

     botHeight += 'vh'
     var bgColor = invertColors ? 'white': 'black'
     var color = invertColors ? 'black' : 'white'
     var switchmenus = SwitchMenus ? false : true
     var azurerecord = AzureRecord ? false : true
     if (switchmenus == false  ) {
          
     // ReactDOM.unmountComponentAtNode(root);
     // ReactDOM.render(
     //           azureRec(), root
     // )
     
     return (
     <div className="App-2" style={{
          backgroundColor: 'black',
          color: 'white'
         }}>
          <AzureTopSpace height={topHeight} />
          <AzureCaptions height={botHeight} textSize={sizeString} />
     </div>
     )
     }
     if (azurerecord == false) {
          return (
               <div className="App-1" style={{
                    backgroundColor: 'black',
                    color: 'white'
                   }}>

                    <AzureCaptions height={botHeight} textSize={sizeString} />
               </div>
          )
     }
     if (bgColor == 'white') {
       return (
            <div className="App-1" style={{
                 backgroundColor: 'black',
                 color: 'white'
                }}>
                 <TopSpace height={topHeight} />
                 <Captions height={botHeight} textSize={sizeString} />
            </div>
       )
     } else {
       return (
            <div className="App-2" style={{
                 backgroundColor: 'white',
                 color: 'black'
                }}>
                 <TopSpace height={topHeight} />
                 <Captions height={botHeight} textSize={sizeString} />
            </div>
       )
     }
     // You can't comment in JSX.
     // The style tag is the easiest way to set style based on JS variables.

}


function azureRec() {
     return (
       <html>
            <body>
                 <button id='recordButton' onclick = 'test()'>test </button>
</body>
<script src="microsoft.cognitiveservices.speech.sdk.bundle.js"></script>
</html>
     )
}

