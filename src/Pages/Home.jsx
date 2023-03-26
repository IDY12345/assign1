import React from 'react'
import './Home.css'
import Display from '../Components/Display'
function Home() {
    return (
        <div className='Home-Page'>
            <div className='Logo-Header'>
                <img src="assets\AI Planet Logo.png" alt='' className='Logo' />
                <div className='Upload-Header'>
                    <h1 className='Hackathon-Submissions'>Hackathon Submissions</h1>
                    <p className='Intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quam facilis itaque sapiente reiciendis, qui ipsam blanditiis soluta maiores corporis ipsum quidem quaerat! Corrupti, voluptates!
                    </p>
                    <button className="Upload-btn">Upload Submissions</button>
                    <img src='assets\waves.png' alt="" className='Waves' />
                    <img src='assets\Hand holding bulb 3D.png' alt='' className='Bulb' />
                </div>

            </div>
            <div className='Display-Comp'>
            <Display />
            </div>
        </div>
    )
}

export default Home