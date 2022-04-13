import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { getUserStatus } from 'redux/user/user-selectors';
import actions from 'redux/news/news-action';
import news from 'data/news';
import PopUp from 'components/PopUp';
import { getNews } from 'redux/news/news-selectors';

const News = () => {
    const status = useSelector(getUserStatus);
    const [showPopUp, setShowPopUp] = useState(false);
    const dispatch = useDispatch();
    const newNews = useSelector(getNews);

    const toggleModal = () => {
        setShowPopUp(!showPopUp);
    };

    const newsData = data => {
        const newNews = {
            id: Math.floor(Math.random() * 96) + 4,
            verification: false,
            data: new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            title: data[0],
            text: data[1],
        };
        dispatch(actions.addNews(newNews));
        toggleModal();
    };
    const tmp = [...news, ...newNews];

    const getVerificationNews = e => {
        console.log(e.target);
    };

    return (
        <div className="news">
            {status === 'user' && (
                <button type="button" onClick={toggleModal}>
                    Добавить новость
                </button>
            )}
            <ul className="news__list">
                {tmp.map(el => (
                    <li key={el.id} className="news__item">
                        <h3>{el.title}</h3>
                        <span>{el.data}</span>
                        <p>{el.text}</p>
                        {(status === 'admin') &
                        (el.verification === false) ? (
                            <div>
                                <span>Новость не проверена</span>
                                <button
                                    type="button"
                                    onClick={getVerificationNews}
                                >
                                    Одобрить?
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </li>
                ))}
            </ul>
            {showPopUp && (
                <PopUp
                    onClose={toggleModal}
                    data={newsData}
                    tag={'news'}
                />
            )}
        </div>
    );
};

export default News;
