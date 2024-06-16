import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Messages from './Components/Messages/Messages';
import { useState, useRef } from 'react';
function App() {
  const [text, setText] = useState(null)
  const [current, setCurrent] = useState(null)
  const current_text = useRef()
  const handleChange = (e) => {
    setCurrent(e.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Execute your function here when Enter is pressed
      event.preventDefault(); // Prevent form submission
      setText(current)
      setCurrent('')
    }
  };
  return (
    <>
      <div className='container'>
        <Messages text={text} />
     
            <TextField id="outlined-basic" label="Message" variant="outlined" sx={{ width: '50ch' }} value={current} onChange={handleChange} onKeyDown={handleKeyDown} />

      </div>


    </>
  );
}

export default App;
