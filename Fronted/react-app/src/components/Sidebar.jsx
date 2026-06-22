import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="list-group mt-3">
                <a href="#" class="list-group-item list-group-item-action active">Dashboard</a>
                <a href="Student.html" class="list-group-item list-group-item-action">Students</a>
                <a href="Attendance.html" class="list-group-item list-group-item-action">Attendance</a>
                <a href="Reports.html" class="list-group-item list-group-item-action">Reports</a>
            </div>
        </div>
    )
}

export default Sidebar