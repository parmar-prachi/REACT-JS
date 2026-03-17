import { useDispatch } from "react-redux";
import { setSearch, setFilterStatus } from "../features/leaveSlice";

function SearchFilter() {
    const dispatch = useDispatch();

    return (
        <div className="filter-box">
            <input
                placeholder="Search employee..."
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

            <select onChange={(e) => dispatch(setFilterStatus(e.target.value))}>
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
            </select>
        </div>
    );
}

export default SearchFilter;