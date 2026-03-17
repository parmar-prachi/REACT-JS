import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyLeaveAsync } from "../features/leaveSlice";

function AddLeave() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        type: "Sick",
        startDate: "",
        endDate: "",
        reason: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.name ||
            !form.startDate ||
            !form.endDate ||
            !form.reason
        ) {
            setError("⚠️ Please fill all required fields!");
            return;
        }

        // Optional: date validation
        if (form.startDate > form.endDate) {
            setError("⚠️ End date must be after start date!");
            return;
        }

        // Clear error
        setError("");

        dispatch(applyLeaveAsync(form));

        // Reset form
        setForm({
            name: "",
            type: "Sick",
            startDate: "",
            endDate: "",
            reason: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* ERROR MESSAGE */}
            {error && <p className="error">{error}</p>}

            <input
                placeholder="Employee Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
                <option>Sick</option>
                <option>Casual</option>
                <option>Emergency</option>
                <option>Vacation</option>
                <option>Half-Day</option>
            </select>

            <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                    setForm({ ...form, startDate: e.target.value })
                }
            />

            <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                    setForm({ ...form, endDate: e.target.value })
                }
            />

            <input
                placeholder="Reason"
                value={form.reason}
                onChange={(e) =>
                    setForm({ ...form, reason: e.target.value })
                }
            />

            <button type="submit">Apply Leave</button>
        </form>
    );
}

export default AddLeave;