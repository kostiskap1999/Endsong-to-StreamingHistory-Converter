import { useState } from 'react';
import './App.css';
import Conversion from './Conversion';

export function App({ children }) {
  const [endsong, setEndsong] = useState("");
  const [StreamingHistory, setStreamingHistory] = useState([]);

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const imported = JSON.parse(e.target.result) 
      setEndsong(imported)
      const converted = Conversion(imported)
      setStreamingHistory(converted)
      
    }
  }

  const downloadStreamingHistory = (download) => {
    // file object
    console.log(JSON.stringify(download))
    const filetoDL = JSON.stringify(download)
    const file = new Blob([filetoDL], {type: 'text/plain'});
    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "StreamingHistory.json";
    // simulate link click
    document.body.appendChild(element);
    // Required for this to work in FireFox
    element.click();
  }


  return (
    <>
      <h1>Upload endsong.json</h1>

      <input type="file" onChange={handleChange} />
      <br/>

      <h1>Download StreamingHistory.json</h1>
      <h6>Remember! Last.fm only scrobbles up to 2800 songs daily. To scrobble everything with <a href="https://savas.ca/scrobblify/">scrobblify</a>, scrobble one of the files daily.</h6>

      {StreamingHistory.map((filetoDL, index) => {
        return(
          <div className="btnDiv">
          <button onClick={() => downloadStreamingHistory(filetoDL)} value="download">Download file {index+1}</button>
        </div> 
        )
      })

      }

    </>
  );
}

export default App;
