import Banner from './components/Banner'
import EventPromotion from './components/EventPromotion'
import Footer from './components/Footer'
import Header from './components/Header'
import RegisterForm from './components/RegisterForm'
import Social from './components/Social'
import 'swiper/css'

function App() {
  return (
    <div className='md:snap-y md:snap-mandatory h-screen md:overflow-y-scroll'>
      <Header />
      <Banner />
      <RegisterForm />
      <EventPromotion />
      <Social />
      <Footer />
    </div>
  )
}

export default App
