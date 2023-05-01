import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import HomeScreen from './routes/home/homeScreen.component'
import ProductScreen from './routes/productScreen/productScreen.component'
import CartScreen from './routes/cart/cartScreen.component'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
