import "../Dashboard.css"; // Import the CSS file


export function DashBoard() {
    return (
        <div id="dashboardContent">
            {/* Welcome Section */}
            <div className="welcome-section">
                <h2>Welcome to Green Shadow Farm Dashboard</h2>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stats-card">
                    <h5>Users</h5>
                    <p>120</p>
                </div>
                <div className="stats-card">
                    <h5>Members</h5>
                    <p>50</p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="chart-section">
                <div
                    className="card m-1 cards col-md-8"
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                        top: '17px',
                        left: '18px',
                    }}
                >
                    <div className="card-body">
                        <h5 className="card-title text-center">Monthly Crops of Seasons</h5>
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>

            {/* Date and Pie Chart Section */}
            <div className="info-section" style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <div className="date-time-card">
                    <p id="date"></p>
                    <p id="time"></p>
                </div>
                <div className="pie-chart-card">
                    {/*<img src={pieChart} alt="Pie Chart" style={{ width: "100%", height: "auto" }} />*/}
                </div>
            </div>


            {/* Buttons Section */}
            <div className="buttons-section">
                <button className="action-button">Add Crop</button>
                <button className="action-button">Add Field</button>
                <button className="action-button">Add Staff</button>
                <button className="action-button">Add User</button>
            </div>
        </div>
    );
}