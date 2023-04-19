import { Container } from 'react-bootstrap'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import Home from './routes/home/home.component'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
