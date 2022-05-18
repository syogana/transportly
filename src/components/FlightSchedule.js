import React from "react";
import { Link } from "react-router-dom";
import Schedule from "../data/Schedule.json";
import ViewOrderScheduleButton from "./ViewOrderScheduleButton";

function FlightSchedule() {
  const [schedule, setSchedule] = React.useState(null);

  React.useEffect(() => {
    const scheduleGroupedByDay = Schedule.reduce((group, item) => {
      const day = item.day;
      group[day] = group[day] ?? [];
      group[day].push(item);
      return group;
    }, {});

    setSchedule(scheduleGroupedByDay);
  }, []);

  return (
    <>
      <ViewOrderScheduleButton />
      {schedule
        ? Object.keys(schedule).map((day) => (
            <FlightScheduleTable key={day} day={day} schedule={schedule[day]} />
          ))
        : null}
    </>
  );
}

function FlightScheduleTable({ day, schedule }) {
  return (
    <div>
      <p>{`Scheduled flights for day ${day}`}</p>
      <table>
        <tbody>
          <tr>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>View Flight</th>
          </tr>
          {schedule &&
            schedule.map((flight) => (
              <tr key={flight.flight_number}>
                <td>{flight.flight_number}</td>
                <td>{flight.departure_city}</td>
                <td>{flight.arrival_city}</td>
                <td>
                  <Link
                    to="/flightdetails"
                    state={{ flightNumber: flight.flight_number }}
                  >
                    <button>VIEW FLIGHT</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightSchedule;
