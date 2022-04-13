import { useSelector } from 'react-redux';

import { getUserName } from 'redux/user/user-selectors';

const MainPage = () => {
    const name = useSelector(getUserName);
    return (
        <>
            <p>Привет, {name}</p>
        </>
    );
};

export default MainPage;
