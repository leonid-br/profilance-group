import { useSelector } from 'react-redux';

import { getUserName } from 'redux/user/user-selectors';

const MainPage = () => {
    const name = useSelector(getUserName);
    return <h2 className="main__titile">Привет, {name}</h2>;
};

export default MainPage;
