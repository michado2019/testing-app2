import React from 'react'

function App(){

  const [startTime, setStartTime] = React.useState(0)
  const [now, setNow] = React.useState(0)

  const handleStart = () => {
    setStartTime(new Date())
    setNow(new Date())

    setInterval(() => {
      setNow(new Date())
    }, 10)
  }
  let time = 0
  if(startTime && now != null){
    time = (now - startTime) / 1000
  }
  return (
    <div>
      <h1>Stop Watch</h1>
      <span>{`You have spent ${time.toFixed(3)}`}</span>
      <br />
      <button onClick={handleStart}>Start</button>
    </div>
  )
}
export default App