import './search-box.css'


function SearchBox(props){
    return(
        <input 
            type="text" 
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
        />
    );
}

export default SearchBox;