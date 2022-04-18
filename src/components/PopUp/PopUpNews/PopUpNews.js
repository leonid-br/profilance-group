import { useState } from 'react';

const PopUpNews = ({ hadleBackdropClick, data }) => {
    const [newsText, setNewsText] = useState('');
    const [newsName, setNewsName] = useState('');

    // Обработка инпута ввода новостей
    const newsHandleChange = e => {
        e.target.type === 'text'
            ? setNewsName(e.target.value)
            : setNewsText(e.currentTarget.value);
    };

    // Отправка новости
    const newsHandleSubmit = e => {
        e.preventDefault();

        data([newsName, newsText]);

        setNewsName('');
        setNewsText('');
    };

    return (
        <div className="overlay" onClick={hadleBackdropClick}>
            <div className="popup">
                <form
                    className="popup__form-text"
                    onSubmit={newsHandleSubmit}
                >
                    <div className="popup__news">
                        <label>
                            <input
                                autoFocus={true}
                                value={newsName}
                                type="text"
                                className="popup__news-title"
                                onChange={newsHandleChange}
                            />
                            Название новости
                        </label>
                    </div>
                    <textarea
                        className="popup__text"
                        value={newsText}
                        onChange={newsHandleChange}
                    ></textarea>
                    <button
                        disabled={!newsText}
                        type="submit"
                        className="popup__btn"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopUpNews;
