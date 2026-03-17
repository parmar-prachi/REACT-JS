import { useSelector } from "react-redux";
import LeaveCard from "./LeaveCard";

function LeaveList() {
    const { leaveList, search, filterStatus } = useSelector(
        (state) => state.leaves
    );

    const filtered = leaveList.filter((leave) => {
        return (
            leave.name.toLowerCase().includes(search.toLowerCase()) &&
            (filterStatus === "All" || leave.status === filterStatus)
        );
    });

    return (
        <div>
            {filtered.map((leave) => (
                <LeaveCard key={leave.id} leave={leave} />
            ))}
        </div>
    );
}

export default LeaveList;