import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import MainPage from './MainPage';
import News from './News';
import actions from 'redux/news/news-action';
import newsServer from 'data/news';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getNews(newsServer));
    }, [dispatch]);
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/news" element={<News />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
