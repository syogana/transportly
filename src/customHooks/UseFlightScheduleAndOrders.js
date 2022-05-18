import React from "react";
import ShipmentOrders from "../data/Orders.json";
import FlightSchedules from "../data/Schedule.json";

function useFlightScheduleAndOrders() {
  const [scheduleAndOrders, setScheduleAndOrders] = React.useState(null);
  const [ordersByDestination, setOrdersByDestination] = React.useState(null);

  React.useEffect(() => {
    const ordersGroupedByDestination = Object.keys(ShipmentOrders).reduce(
      (group, order) => {
        const location = ShipmentOrders[order].destination;
        group[location] = group[location] ?? [];
        group[location].push(order);
        return group;
      },
      {}
    );

    const flightSchedulesWithOrders = FlightSchedules.reduce(
      (current, schedule) => {
        current.push({
          ...schedule,
          orders: ordersGroupedByDestination[schedule.arrival_city].splice(
            0,
            20
          ),
        });
        return current;
      },
      []
    );

    setScheduleAndOrders(flightSchedulesWithOrders);
    setOrdersByDestination(ordersGroupedByDestination);
  }, []);

  return [scheduleAndOrders, ordersByDestination];
}

export default useFlightScheduleAndOrders;
