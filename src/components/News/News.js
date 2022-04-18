import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import actions from 'redux/news/news-action';
import { getUserStatus } from 'redux/user/user-selectors';
import { getNews } from 'redux/news/news-selectors';

import PopUp from 'components/PopUp';
import Filter from '../Filter';
import NewsList from 'components/NewsList';

const News = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [filter, setFilter] = useState('');

    const status = useSelector(getUserStatus);
    const news = useSelector(getNews);
    const dispatch = useDispatch();

    // Открытие и закрытие попапа
    const togglePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    // Создание и диспатч новой новости
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
        togglePopUp();
    };

    // Проверка новости на одобрение
    const getVerificationNews = id => {
        dispatch(actions.verificationNews(id));
    };

    // Удаление новости
    const deleteNews = id => {
        dispatch(actions.deleteNews(id));
    };

    // Состояние фильтра
    const filterTodo = e => {
        setFilter(e.target.value);
    };

    // Получение новостей для рендера
    const getVisibleNews = () => {
        const normalizeFilter = filter.toLocaleLowerCase();

        if (status === 'gest' && news) {
            const gestNews = news.filter(
                el => el.verification === true,
            );
            return gestNews.filter(
                el =>
                    el.title
                        .toLocaleLowerCase()
                        .includes(normalizeFilter) ||
                    el.text
                        .toLocaleLowerCase()
                        .includes(normalizeFilter),
            );
        }

        return (
            news &&
            news.filter(
                el =>
                    el.title
                        .toLocaleLowerCase()
                        .includes(normalizeFilter) ||
                    el.text
                        .toLocaleLowerCase()
                        .includes(normalizeFilter),
            )
        );
    };

    const visibleNews = getVisibleNews();
    return (
        <div className="news">
            <Filter value={filter} onFilter={filterTodo} />

            {status === 'user' && (
                <button
                    type="button"
                    className="news__addnews"
                    onClick={togglePopUp}
                >
                    Добавить новость
                </button>
            )}
            <NewsList
                visibleNews={visibleNews}
                getVerificationNews={getVerificationNews}
                deleteNews={deleteNews}
            />

            {showPopUp && (
                <PopUp
                    onClose={togglePopUp}
                    data={newsData}
                    tag={'news'}
                />
            )}
        </div>
    );
};

export default News;
