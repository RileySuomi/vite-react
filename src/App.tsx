import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <div className="space-y-2 text-center py-10 rounded-lg shadow-md">

            <h2 className="text-2xl font-bold">Abstract</h2>
            <div>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    This is the Abstract where we will insert the text of the abstract. 
                    I'm still typing so I see how it looks as far as UI for the webpage!
                    So, this obviously isn't the final text, but it is a placeholder for now.
                    I will be adding more text to this section to see how it looks. Okay,
                    I think this is enough text for now.
                </p>
                <iframe src = "https://daltonmermis.shinyapps.io/college_aid_app/"
                title = "Shiny App Visuals"
                width = "100%"
                height = "800px"
                style = {{ border: "none", marginTop: "20px" }}>
                </iframe>
            </div>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
