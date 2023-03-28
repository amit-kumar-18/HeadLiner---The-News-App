import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'

import NavBar from './components/Navbar'
import News from './components/News'
import ScrollBtn from './components/ScrollBtn'

function App() {
  const country = 'in'
  const pageSize = 12
  const [topLoading, setTopLoading] = useState(10)
  const apiKey = import.meta.env.VITE_apiKey

  return (
    <>
      <BrowserRouter>
        <LoadingBar color='#f11946' height={3} progress={topLoading} />
        <NavBar />

        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='general'
                country={country}
                category='general'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='entertainment'
                country={country}
                category='entertainment'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='technology'
                country={country}
                category='technology'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='health'
                country={country}
                category='health'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='sports'
                country={country}
                category='sports'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                apiKey={apiKey}
                setTopLoading={setTopLoading}
                key='business'
                country={country}
                category='business'
                pageSize={pageSize}
              />
            }
          />
        </Routes>

        <ScrollBtn />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
