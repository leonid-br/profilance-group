import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
    getUserStatus,
    getUserName,
} from 'redux/user/user-selectors';

const PopUpLogin = ({ hadleBackdropClick, logOut, data }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const status = useSelector(getUserStatus);
    const userName = useSelector(getUserName);

    // Обработка инпута ввода данных пользователя
    const handleChange = e => {
        e.target.type === 'text'
            ? setName(e.target.value)
            : setPassword(e.target.value);
    };

    // Отправка данных пользователя
    const handleSubmit = e => {
        e.preventDefault();

        data([name, password]);

        setName('');
        setPassword('');
    };

    return (
        <div className="overlay" onClick={hadleBackdropClick}>
            <div className="popup popup__auth">
                {(status === 'admin' || status === 'user') && (
                    <>
                        <div className="popup__logout">
                            <span className="popup__logout-text">
                                Вы зашли под учетоной записью:
                                <span className="popup__logout-name">
                                    {userName}
                                </span>
                            </span>
                            <button
                                type="button"
                                className="popup__btn"
                                onClick={logOut}
                            >
                                Выйти
                            </button>
                        </div>
                    </>
                )}
                {status === 'gest' && (
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
                            ОК
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PopUpLogin;
