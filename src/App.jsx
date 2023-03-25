import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import News from './components/News'

function App() {
  const country = 'in'
  const pageSize = 10

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            exact
            path='/'
            element={
              <News key='general' country={country} category='general' pageSize={pageSize} />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
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
              <News key='technology' country={country} category='technology' pageSize={pageSize} />
            }
          />
          <Route
            exact
            path='/health'
            element={<News key='health' country={country} category='health' pageSize={pageSize} />}
          />
          <Route
            exact
            path='/sports'
            element={<News key='sports' country={country} category='sports' pageSize={pageSize} />}
          />
          <Route
            exact
            path='/business'
            element={
              <News key='business' country={country} category='business' pageSize={pageSize} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
