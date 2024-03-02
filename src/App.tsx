import { AppRoutes } from './Routes/AppRoutes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
