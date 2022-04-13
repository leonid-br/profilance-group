import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

const popUpRoot = document.querySelector('#modal-root');

const PopUp = ({ onClose, data, tag }) => {
    // const location = useLocation();
    // console.log(location);
    // console.log(tag);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newsText, setNewsText] = useState('');
    const [newsName, setNewsName] = useState('');

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const hadleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleChange = e => {
        e.target.type === 'text'
            ? setName(e.target.value)
            : setPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        data([name, password]);

        setName('');
        setPassword('');
    };

    const newsHandleChange = e => {
        e.target.type === 'text'
            ? setNewsName(e.target.value)
            : setNewsText(e.currentTarget.value);
    };

    const newsHandleSubmit = e => {
        e.preventDefault();

        data([newsName, newsText]);

        setNewsName('');
        setNewsText('');
    };

    if (tag === 'login') {
        return createPortal(
            <div className="overlay" onClick={hadleBackdropClick}>
                <div className="popup">
                    <form onSubmit={handleSubmit}>
                        <div className="popup__form-field">
                            <label className="popup__form-field">
                                Логин
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="popup__form-field">
                            <label className="popup__form-field">
                                Пароль
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" className="popup__btn">
                            Ok
                        </button>
                    </form>
                </div>
            </div>,
            popUpRoot,
        );
    }

    if (tag === 'news') {
        return createPortal(
            <div className="overlay" onClick={hadleBackdropClick}>
                <div className="popup">
                    <form
                        className="popup__form-text"
                        onSubmit={newsHandleSubmit}
                    >
                        <div className="popup__news-title-box">
                            <label>
                                <input
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
                            className="popup__btn-news"
                        >
                            Добавить
                        </button>
                    </form>
                </div>
            </div>,
            popUpRoot,
        );
    }
};

export default PopUp;
