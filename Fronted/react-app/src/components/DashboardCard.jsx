import React from 'react'

function DashboardCard({ heading, count }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-text text-center">{heading}</h5>
                <h5 className="card-text text-center">{count}</h5>
            </div>
        </div>
    )
}

export default DashboardCard
