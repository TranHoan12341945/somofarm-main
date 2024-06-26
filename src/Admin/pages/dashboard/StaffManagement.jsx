import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function StaffManagement() {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    // Giả lập dữ liệu nhân viên
    const fakeData = [
      {
        name: "Nguyen Van A",
        dateOfBirth: "01/01/1980",
        gender: "Nam",
        position: "Quản lý",
      },
      {
        name: "Tran Thi B",
        dateOfBirth: "15/05/1985",
        gender: "Nữ",
        position: "Nhân viên lễ tân",
      },
      {
        name: "Le Van C",
        dateOfBirth: "20/09/1990",
        gender: "Nam",
        position: "Bảo vệ",
      }
    ];
    setStaffData(fakeData);
  }, []);

  return (
    <div className="flex flex-col gap-12 mt-12 mb-8">
      <Card>
        <CardHeader className="flex items-center justify-between p-6 mb-8 text-white bg-gray-800 rounded-t-xl">
          <Typography variant="h6" color="white">
            Manage Staff
          </Typography>
          <Button color="blue" onClick={() => alert('Add new staff functionality')}>
            Add New Staff
          </Button>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2 overflow-x-scroll">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Tên", "Ngày sinh", "Giới tính", "Vị trí", "Hành động"].map((el) => (
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
              {staffData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-5 py-3 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      Không có nhân viên nào
                    </Typography>
                  </td>
                </tr>
              ) : (
                staffData.map(
                  ({ name, dateOfBirth, gender, position }, key) => {
                    const className = `py-3 px-5 ${
                      key === staffData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={key}>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {dateOfBirth}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {gender}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {position}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex space-x-2">
                            <Button color="blue" size="sm" onClick={() => alert('Edit staff functionality')}>
                              Edit
                            </Button>
                            <Button color="red" size="sm">
                              Delete
                            </Button>
                          </div>
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
  );
}

export default StaffManagement;
