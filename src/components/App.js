import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import MainPage from './MainPage';
// import News from '';

function App() {
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
                <Routes>
                    {/* <Route path="/news" element={<News />} /> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
