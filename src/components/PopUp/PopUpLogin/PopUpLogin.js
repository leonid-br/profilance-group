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
            <div className="popup">
                {(status === 'admin' || status === 'user') && (
                    <>
                        <span>
                            Вы зашли под учетоной записью
                            {userName}
                        </span>
                        <button type="button" onClick={logOut}>
                            Выйти
                        </button>
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
                            Ok
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PopUpLogin;
