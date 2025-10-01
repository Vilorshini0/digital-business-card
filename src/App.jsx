import './App.scss'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <section id="fullcard">
                <Info />
                <About />
                <Interest />
                <Footer />
            </section>
        </>
    )
}

export default App
