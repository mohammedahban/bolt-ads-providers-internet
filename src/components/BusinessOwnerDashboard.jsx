import React from 'react';
    import { Bar, Line, Pie } from 'react-chartjs-2';
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

    const BusinessOwnerDashboard = () => {
      const comparisonData = {
        labels: ['Provider 1', 'Provider 2', 'Provider 3'],
        datasets: [
          {
            label: 'Total Views',
            data: [1000, 1500, 800],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };

      const timelineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Views',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      const mapData = {
        labels: ['Region A', 'Region B', 'Region C'],
        datasets: [
          {
            label: 'Views',
            data: [1000, 1500, 800],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      return (
        <div className="dashboard-container">
          <h1>Business Owner Dashboard</h1>
          <p>Upload ads, set campaigns, target locations, and define rewards.</p>

          {/* Campaign Overview with Internet Providers */}
          <div className="section">
            <h2>Campaign Overview</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Ad Campaign</th>
                  <th>Total Views</th>
                  <th>Daily Views</th>
                  <th>Weekly Views</th>
                  <th>Monthly Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provider 1</td>
                  <td>Campaign A</td>
                  <td>1000</td>
                  <td>100</td>
                  <td>500</td>
                  <td>1000</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div className="chart">
              <h3>Comparison Chart</h3>
              <Bar data={comparisonData} />
            </div>
          </div>

          {/* Geographical Viewership Data */}
          <div className="section">
            <h2>Geographical Viewership Data</h2>
            <div className="chart">
              <h3>Map View</h3>
              <Pie data={mapData} />
            </div>
            <div>
              <h3>Location-Based List</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>City/Area</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>City A</td>
                    <td>500</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <div>
              <h3>Filters</h3>
              <form className="form">
                <label>
                  Region:
                  <select>
                    <option value="regionA">Region A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <button type="submit">Apply Filter</button>
              </form>
            </div>
          </div>

          {/* Provider and Location-Based Performance */}
          <div className="section">
            <h2>Provider and Location-Based Performance</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Region</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provider 1</td>
                  <td>Region A</td>
                  <td>500</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div>
              <h3>Campaign Adjustment</h3>
              <form className="form">
                <label>
                  Provider:
                  <select>
                    <option value="provider1">Provider 1</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Region:
                  <select>
                    <option value="regionA">Region A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Reward:
                  <input type="number" placeholder="Reward Amount" />
                </label>
                <button type="submit">Adjust Campaign</button>
              </form>
            </div>
          </div>

          {/* Detailed Viewership Insights */}
          <div className="section">
            <h2>Detailed Viewership Insights</h2>
            <div className="chart">
              <h3>Timeline Graph</h3>
              <Line data={timelineData} />
            </div>
            <div>
              <h3>Filters</h3>
              <form className="form">
                <label>
                  Time of Day:
                  <select>
                    <option value="morning">Morning</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Day of Week:
                  <select>
                    <option value="monday">Monday</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Specific Dates:
                  <input type="date" />
                </label>
                <button type="submit">Apply Filter</button>
              </form>
            </div>
            <div>
              <h3>Customer Behavior Insights</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Engagement Duration</th>
                    <th>Additional Interactions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer 1</td>
                    <td>5 minutes</td>
                    <td>Clicked on Link</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Campaign Notifications */}
          <div className="section">
            <h2>Campaign Notifications</h2>
            <ul className="notifications">
              <li>Milestone 100 views reached</li>
              <li>Milestone 1000 views reached</li>
              {/* Add more notifications as needed */}
            </ul>
            <div>
              <h3>Alert Thresholds</h3>
              <form className="form">
                <label>
                  Region:
                  <select>
                    <option value="regionA">Region A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Provider:
                  <select>
                    <option value="provider1">Provider 1</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Threshold:
                  <input type="number" placeholder="Threshold Value" />
                </label>
                <button type="submit">Set Threshold</button>
              </form>
            </div>
          </div>

          {/* Customer Interaction Details */}
          <div className="section">
            <h2>Customer Interaction Details</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Region</th>
                  <th>Viewing Times</th>
                  <th>Total Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer 1</td>
                  <td>Region A</td>
                  <td>10:00 AM, 2:00 PM</td>
                  <td>3</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div>
              <h3>Engagement Metrics</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Repeat Views</th>
                    <th>First-Time Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer 1</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Customizable Rewards Based on Internet Provider Performance */}
          <div className="section">
            <h2>Customizable Rewards</h2>
            <form className="form">
              <label>
                Provider:
                <select>
                  <option value="provider1">Provider 1</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <label>
                Reward:
                <input type="number" placeholder="Reward Amount" />
              </label>
              <button type="submit">Set Reward</button>
            </form>
            <div>
              <h3>Dynamic Rewards</h3>
              <form className="form">
                <label>
                  Provider:
                  <select>
                    <option value="provider1">Provider 1</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Base Reward:
                  <input type="number" placeholder="Base Reward Amount" />
                </label>
                <label>
                  Increment:
                  <input type="number" placeholder="Increment Amount" />
                </label>
                <button type="submit">Set Dynamic Reward</button>
              </form>
            </div>
          </div>

          {/* Ad Campaign Adjustment Tools */}
          <div className="section">
            <h2>Ad Campaign Adjustment Tools</h2>
            <form className="form">
              <label>
                Campaign:
                <select>
                  <option value="campaignA">Campaign A</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <label>
                Adjust Reward:
                <input type="number" placeholder="New Reward Amount" />
              </label>
              <button type="submit">Adjust Reward</button>
            </form>
            <div>
              <h3>Campaign Extension</h3>
              <form className="form">
                <label>
                  Campaign:
                  <select>
                    <option value="campaignA">Campaign A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  New End Date:
                  <input type="date" />
                </label>
                <button type="submit">Extend Campaign</button>
              </form>
            </div>
            <div>
              <h3>Budget Reallocation</h3>
              <form className="form">
                <label>
                  Campaign:
                  <select>
                    <option value="campaignA">Campaign A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  Region:
                  <select>
                    <option value="regionA">Region A</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label>
                  New Budget:
                  <input type="number" placeholder="New Budget Amount" />
                </label>
                <button type="submit">Reallocate Budget</button>
              </form>
            </div>
          </div>
        </div>
      );
    };

    export default BusinessOwnerDashboard;
