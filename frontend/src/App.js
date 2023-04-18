import { Container } from 'react-bootstrap'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>here is the main body text</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
