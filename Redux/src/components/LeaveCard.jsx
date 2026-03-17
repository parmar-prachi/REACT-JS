import { useDispatch } from "react-redux";
import { deleteLeave, updateStatus } from "../features/leaveSlice";

function LeaveCard({ leave }) {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <h3>{leave.name}</h3>
            <p><strong>Type:</strong> {leave.type}</p>
            <p><strong>Dates:</strong> {leave.startDate} → {leave.endDate}</p>

            <span className={`status ${leave.status}`}>
                {leave.status}
            </span>

            <div>
                <button
                    className="btn-delete"
                    onClick={() => dispatch(deleteLeave(leave.id))}
                >
                    Delete
                </button>

                <button
                    className="btn-approve"
                    onClick={() =>
                        dispatch(updateStatus({ id: leave.id, status: "Approved" }))
                    }
                >
                    Approve
                </button>

                <button
                    className="btn-reject"
                    onClick={() =>
                        dispatch(updateStatus({ id: leave.id, status: "Rejected" }))
                    }
                >
                    Reject
                </button>
            </div>
        </div>
    );
}

export default LeaveCard;