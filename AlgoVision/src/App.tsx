import { useState } from 'react'
import './App.css'
import ThreeDimensionalWindow from './ThreeDimensionalWindow.tsx'
import EditorWindowMirror from './EditorWindowMirror.tsx'
import Navbar from './Navbar.tsx'


function App() {

  return (
    <div>
    {/* <p className="pardon-our-dust">
      Pardon our dust, cool stuff coming soon.
    </p>
 */}
    <Navbar />
    <div className="flexboxContainer">
      <EditorWindowMirror />
      <ThreeDimensionalWindow />
    </div>
    </div>

  )
}

export default App
