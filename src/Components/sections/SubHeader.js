import SearchInput from '../ui/searchInput/SearchInput';
import Filter from '../ui/filter/Filter';
import classes from './SubHeader.module.css';

function SubHeader(){
    return (
        <div className="container">
            <div className={classes["sub-header"]}>
                <SearchInput />
                <Filter />
            </div>
        </div>
    )
}

export default SubHeader;