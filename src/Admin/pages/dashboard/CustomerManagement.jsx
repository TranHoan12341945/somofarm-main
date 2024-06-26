import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import { fetchCustomerData } from "../../utils/fetchData";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";

export function ManageCustomers() {
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCustomerData();
      setCustomersData(data);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000); // Cập nhật dữ liệu mỗi 30 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <DashboardNavbar />
      <div className="flex flex-col gap-12 mt-12 mb-8">
        <Card>
          <CardHeader className="p-6 mb-8 text-white bg-gray-800 rounded-t-xl">
            <Typography variant="h6" color="white">
              Manage Customers
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2 overflow-x-scroll">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["First Name", "Last Name", "Email", "Phone", "Room ID", "Date In", "Date Out"].map((el) => (
                    <th
                      key={el}
                      className="px-5 py-3 text-left border-b border-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customersData.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-5 py-3 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        No customer data available
                      </Typography>
                    </td>
                  </tr>
                ) : (
                  customersData.map(
                    ({ firstName, lastName, email, phone, roomID, dateIn, dateOut }, key) => {
                      const className = `py-3 px-5 ${
                        key === customersData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={email}>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {firstName}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {lastName}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {email}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {phone}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {roomID}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {dateIn}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {dateOut}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default ManageCustomers;
