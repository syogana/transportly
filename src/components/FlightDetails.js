import React from "react";
import { useLocation } from "react-router-dom";
import useFlightScheduleAndOrders from "../customHooks/UseFlightScheduleAndOrders";
import OrdersTable from "./OrdersTable";
import ViewFlightScheduleButton from "./ViewFlightScheduleButton";

function FlightDetails() {
  const location = useLocation();
  const { flightNumber } = location.state;
  const [flightOrders, setFlightOrders] = React.useState([]);
  const [scheduleAndOrders, ordersByDestination] = useFlightScheduleAndOrders();

  React.useEffect(() => {
    if (scheduleAndOrders) {
      setFlightOrders(
        scheduleAndOrders.filter((item) => item.flight_number === flightNumber)
      );
    }
  }, [scheduleAndOrders]);

  return (
    <div>
      <ViewFlightScheduleButton />
      <p>{`Orders for Flight ${flightNumber}`}</p>
      <OrdersTable scheduleAndOrders={flightOrders} />
    </div>
  );
}

export default FlightDetails;
