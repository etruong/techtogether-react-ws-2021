function SearchInput(props) {

    const onChangeQuery = (event) => {
        props.setQuery(event.target.value);
    }

    return (<div className="filter-container">
        <input type="text" value={props.query} onChange={onChangeQuery} placeholder="Search here" />
        <button onClick={props.onSearchResults}>Search</button>
    </div>)
}

export default SearchInput;