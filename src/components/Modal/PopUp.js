import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const popUpRoot = document.querySelector('#modal-root');

const PopUp = ({ onClose, data }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

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
                        Войти
                    </button>
                </form>
            </div>
        </div>,
        popUpRoot,
    );
};

export default PopUp;
