import React from 'react'

export default function Pomodoro() {
  return (
    <div className='watch-cover'>
        <div className='clock'>
            <div id='timer'>
            <p>Timer</p>
            </div>
            <div>
                <button id='btn-timer' type="button">Start</button>
                <button>Pause</button>
            </div>
        </div>
        <div className='side-button'>
            <button className='task'>Day</button>
            <button className='task'>Hours</button>
            <button className='task'>Current Streak</button>
            <button className='task'>Highest Streak</button>
            <button className='task'>Rank</button>
            <button className='task'>More Info</button>
        </div>
    </div>
  )
}
