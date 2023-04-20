import { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './App.css'
import { CallType } from './components/CallType';
import { EnterPhone } from './components/EnterPhone';
import { SpeakWith } from './components/SpeakWIth';
import { PickTime } from './components/PickTime';
import { MoreInfo } from './components/MoreInfo';
import { Confirmation } from './components/Confirmation';

function App() {

  const [appView, setAppView] = useState(false);
  const [callTypeView, setCallTypeView] = useState(false);
  const [enterPhoveView, setEnterPhoveView] = useState(false);
  const [speakWithView, setSpeakWithView] = useState(false);
  const [pickTimeView, setPickTimeView] = useState(false);
  const [moreInfoView, setMoreInfoView] = useState(false);
  const [confirmationView, setConfirmationView] = useState(false);

  const toggleAppView = () => {
    
    if (appView === true) {
      setAppView(false);
      setCallTypeView(false);
      setEnterPhoveView(false);
      setSpeakWithView(false);
      setPickTimeView(false);
      setMoreInfoView(false);
      setConfirmationView(false);
    } else {
      setAppView(true);
      setCallTypeView(true);
    }
  }

  const toggleEnterPhone = () => {
      setCallTypeView(false);
      setConfirmationView(false);
      setMoreInfoView(false);
      setPickTimeView(false);
      setSpeakWithView(false);
      setEnterPhoveView(true);
  }

  const toggleSpeakWith = () => {
    setCallTypeView(false);
    setEnterPhoveView(false);
    setConfirmationView(false);
    setMoreInfoView(false);
    setPickTimeView(false);
    setSpeakWithView(true);

  }

  const togglePickTime = () => {
    setCallTypeView(false);
    setEnterPhoveView(false);
    setSpeakWithView(false);
    setConfirmationView(false);
    setMoreInfoView(false);
    setPickTimeView(true);
  }

  const toggleMoreInfo = () => {
    setCallTypeView(false);
    setEnterPhoveView(false);
    setSpeakWithView(false);
    setPickTimeView(false);
    setConfirmationView(false);
    setMoreInfoView(true);
  }

  const toggleConfirmation = () => {
    setCallTypeView(false);
    setEnterPhoveView(false);
    setSpeakWithView(false);
    setPickTimeView(false);
    setMoreInfoView(false);
    setConfirmationView(true);
  }

  return (
    <div className="App">
      <button className='open-app' onClick={toggleAppView}>
        {appView && <ArrowBackIosNewIcon /> || <CallIcon /> }
      </button>
      {callTypeView && <CallType close_all={toggleAppView} action={toggleEnterPhone} />}
      {enterPhoveView && <EnterPhone close_all={toggleAppView} action={toggleSpeakWith} />}
      {speakWithView && <SpeakWith close_all={toggleAppView} action={togglePickTime} back={toggleSpeakWith} />}
      {pickTimeView && <PickTime close_all={toggleAppView} action={toggleMoreInfo} />}
      {moreInfoView && <MoreInfo close_all={toggleAppView} action={toggleConfirmation} />}
      {confirmationView && <Confirmation close_all={toggleAppView} back={toggleMoreInfo} />}
    </div>
  )
}

export default App
