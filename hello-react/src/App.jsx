//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className='darkdiv'>
      <navbar className= 'navbar'>
      <img src={image1} className = 'logo' alt='logo' />
      <img src={image2} className='image2' alt='image2' />
      </navbar>
      <div>
        <h1>Say hello to 
        <br/>ReactJS</h1>
        <p>You will learn how to use 
        <br />
        the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
      </div>
      <div>
        <button>Awesome!</button>
      </div>
      </div>
      <div className='cardsCtn'>
      <div className='Ctn1'>
        <img src={image3} className='image3' alt='image3' />
        <h4>Declarative</h4>
        <p className='ctn-paragraph'>React makes it painless to create interactive UIs.
        </p>
        </div>
        <div className='Ctn2'>
        <img src={image4} className='image4' alt='image4' />
        <h4>Components</h4>
          <p className='ctn-paragraph'>Build encapsulated components that manage their state.
        </p>
        </div>
        <div className='Ctn3'>
        <img src={image3} className='image5' alt='image5' />
        <h4>Single-Way</h4>
          <p className='ctn-paragraph'>A set of immutable values are passed to the component's.
        </p>
        </div>
        <div className='Ctn4'>
        <img src={image4} className='image6' alt='image6' />
        <h4>JSX</h4>
          <p className='ctn-paragraph'>Statically-types, designated to run on modern browsers.
        </p>
        </div>
      </div>

    </div>
  )
}

export default App
