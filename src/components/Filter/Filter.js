const Filter = ({ value, onFilter }) => {
    return (
        <label className="filter">
            <span className="filter__text"> Поиск по новостям</span>
            <input
                type="text"
                className="filter__input"
                placeholder="введите запрос"
                value={value}
                onChange={onFilter}
            />
        </label>
    );
};

export default Filter;
