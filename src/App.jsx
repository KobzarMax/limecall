import { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './App.css'
import { CallType } from './components/CallType';
import { EnterPhone } from './components/EnterPhone';
import { SpeakWith } from './components/SpeakWIth';

function App() {

  const [appView, setAppView] = useState(false);
  const [callTypeView, setCallTypeView] = useState(false);
  const [enterPhoveView, setEnterPhoveView] = useState(false);
  const [speakWithView, setSpeakWithView] = useState(false);

  const toggleAppView = () => {
    
    if (appView === true) {
      setAppView(false);
      setCallTypeView(false);
      setEnterPhoveView(false);
      setSpeakWithView(false);
    } else {
      setAppView(true);
      setCallTypeView(true);
    }
  }

  const toggleEnterPhone = () => {
      setCallTypeView(false);
      setEnterPhoveView(true);
  }

  const toggleSpeakWith = () => {
    setCallTypeView(false);
    setEnterPhoveView(false);
    setSpeakWithView(true);

}

  return (
    <div className="App">
      <button className='open-app' onClick={toggleAppView}>
        {appView && <ArrowBackIosNewIcon /> || <CallIcon /> }
      </button>
      {callTypeView && <CallType action={toggleEnterPhone} />}
      {enterPhoveView && <EnterPhone action={toggleSpeakWith} />}
      {speakWithView && <SpeakWith />}
    </div>
  )
}

export default App
