import React from 'react'

function StudentStatus({ rollno, name, Status }) {
    return (
            <tr>
            <td>{rollno}</td>
            <td>{name}</td>
            <td>{Status}</td>
        </tr>
    )
}

export default StudentStatus
