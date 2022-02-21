import React , {useState , useRef , useEffect} from 'react'
import classes from "./SearchInput.module.css";

function SearchInput () {
    const [search , setSearch] = useState('')
    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() =>{
            if(search === inputRef.current.value) {
                console.log(search);
            }
        },500);
        return () => {
            console.log("clearupFunction");
            clearTimeout(timer);
        }
    },[search , inputRef])
    
    const onChangeHander = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className={classes["form_group"]}>
            <span className={classes["search-icon"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
            <input type="text" ref={inputRef} onChange={onChangeHander} />
        </div>
    )
}

export default SearchInput;