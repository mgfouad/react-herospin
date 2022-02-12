import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import RandomHero from './components/random';
import Details from './components/details';
import ListingHero from './components/listing';
import Header from './components/header';

function App() {
  return (
    <>
      <div className="outerCont">
        <Container maxWidth="lg">
          <Box className="mainCont">
            <Header />

            <div className="innerCont">
              <Routes>
                <Route path="/" exact element={<RandomHero />} />
                <Route path="heros" exact element={<ListingHero />} />
                <Route path="heros/:heroID" element={<Details />} />
              </Routes>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
