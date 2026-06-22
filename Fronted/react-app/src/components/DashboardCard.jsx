import React from 'react'

function DashboardCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 class="card-text text-center">{props.heading}</h5>
                <h5 class="card-text text-center">{props.count}</h5>
            </div>
        </div>
    )
}

export default DashboardCard