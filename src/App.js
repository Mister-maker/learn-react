import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './pages/Form';
import { Navbar } from './components';

export const AppContext = createContext();
const client = new QueryClient({defaultOptions: {queries: {staleTime: 1000, refetchOnWindowFocus: false}}});

function App() {

  const [name, setName] = useState("John Doe");

  return (
    <QueryClientProvider client={client}>
      <AppContext.Provider value={{ name, setName }}>
        <Router>
          <div className='App'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/form' element={<Form />} />
              <Route path='*' element={<h1>404: Not Found</h1>} />
            </Routes>
          </div>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
