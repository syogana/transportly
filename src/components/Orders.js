import React from "react";
import useFlightScheduleAndOrders from "../customHooks/UseFlightScheduleAndOrders";
import OrdersTable from "./OrdersTable";
import ViewFlightScheduleButton from "./ViewFlightScheduleButton";

function Orders() {
  const [scheduleAndOrders, ordersByDestination] = useFlightScheduleAndOrders();

  return (
    <div>
      <ViewFlightScheduleButton />
      <h3>Orders</h3>
      <OrdersTable
        scheduleAndOrders={scheduleAndOrders}
        ordersByDestination={ordersByDestination}
      />
    </div>
  );
}

export default Orders;
