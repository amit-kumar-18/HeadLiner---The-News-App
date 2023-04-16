import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import News from './components/News'
import ScrollBtn from './components/ScrollBtn'

function App() {
  const country = 'IN'
  const pageSize = 12
  const [topLoading, setTopLoading] = useState(10)

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
                setTopLoading={setTopLoading}
                key='general'
                country={country}
                category='world'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
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
            path='/tech'
            element={
              <News
                setTopLoading={setTopLoading}
                key='tech'
                country={country}
                category='tech'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/politics'
            element={
              <News
                setTopLoading={setTopLoading}
                key='politics'
                country={country}
                category='politics'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/sport'
            element={
              <News
                setTopLoading={setTopLoading}
                key='sport'
                country={country}
                category='sport'
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
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
