const Filter = ({ value, onFilter }) => {
    return (
        <label>
            Поиск по новостям
            <input type="text" value={value} onChange={onFilter} />
        </label>
    );
};

export default Filter;
