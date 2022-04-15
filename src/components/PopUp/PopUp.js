import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from 'redux/user/user-actions';

import PopUpLogin from './PopUpLogin';
import PopUpNews from './PopUpNews';

const popUpRoot = document.querySelector('#modal-root');

const PopUp = ({ onClose, data, tag }) => {
    const dispatch = useDispatch();

    // Закрытие попапа по кнопке Esc
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

    // Закрытие попапа по клику вне его
    const hadleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    // Логаут пользователя
    const logOut = () => {
        dispatch(actions.logOut(['Гость', 'gest']));
    };

    if (tag === 'login') {
        return createPortal(
            <PopUpLogin
                hadleBackdropClick={hadleBackdropClick}
                logOut={logOut}
                data={data}
            />,
            popUpRoot,
        );
    }

    if (tag === 'news') {
        return createPortal(
            <PopUpNews
                hadleBackdropClick={hadleBackdropClick}
                data={data}
            />,
            popUpRoot,
        );
    }
};

export default PopUp;
