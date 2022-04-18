import { useSelector } from 'react-redux';

import { getUserStatus } from 'redux/user/user-selectors';

const NewsList = ({
    visibleNews,
    getVerificationNews,
    deleteNews,
}) => {
    const status = useSelector(getUserStatus);

    return (
        visibleNews && (
            <ul className="news__list">
                {visibleNews.map(el => (
                    <li key={el.id} className="news__item">
                        <div className="news__card">
                            <h3 className="news__title">
                                {el.title}
                            </h3>
                            <span className="news__data">
                                {el.data}
                            </span>
                            <p className="news__text">{el.text}</p>
                        </div>
                        {(status === 'admin') &
                        (el.verification === false) ? (
                            <div className="admin">
                                <span>Новость не проверена!</span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        getVerificationNews(el.id);
                                    }}
                                    className="admin__btn"
                                >
                                    Одобрить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteNews(el.id);
                                    }}
                                    className="admin__btn"
                                >
                                    Удалить
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </li>
                ))}
            </ul>
        )
    );
};

export default NewsList;
