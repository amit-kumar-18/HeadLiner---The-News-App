import NavBar from './components/Navbar'
import News from './components/News'

function App() {
  return (
    <>
      <NavBar />
      <News country="in" category="general" pageSize={10} />
    </>
  )
}

export default App
