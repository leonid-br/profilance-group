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
                        <h3>{el.title}</h3>
                        <span>{el.data}</span>
                        <p>{el.text}</p>
                        {(status === 'admin') &
                        (el.verification === false) ? (
                            <div>
                                <span>Новость не проверена</span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        getVerificationNews(el.id);
                                    }}
                                >
                                    Одобрить?
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteNews(el.id);
                                    }}
                                >
                                    Удалить?
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
