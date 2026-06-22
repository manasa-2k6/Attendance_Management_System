import React from 'react'

function StudentStatus(props) {
    return (
            <tr>
            <td>{props.rollno}</td>
            <td>{props.name}</td>
            <td>{props.Status}</td>
        </tr>
    )
}

export default StudentStatus