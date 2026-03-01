import Footer from "./components/Footer"
import Header from "./components/Header"
import Box from "./components/Box"
import "./App.css"
import Counter from "./components/Counter"

const App = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Box className="box box-small" style={{color:'red', backgroundColor:'black'}}/>
        <Box className="box box-medium" style={{color:'green', backgroundColor:'yellow'}} />
        <Box className="box box-large" />

        <Counter/>
      </section>
      <Footer/>
    </div>
  )
}

export default App

