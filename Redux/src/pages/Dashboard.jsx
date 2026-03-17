import AddLeave from "../components/AddLeave";
import LeaveList from "../components/LeaveList";
import SearchFilter from "../components/SearchFilter";

function Dashboard() {
    return (
        <div className="container">
            <h1>Smart Leave Management</h1>
            <AddLeave />
            <SearchFilter />
            <LeaveList />
        </div>
    );
}

export default Dashboard;