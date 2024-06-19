import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { roomsData } from "../../data";

export function Tables() {
  const [rooms, setRooms] = useState(roomsData);

  const handleDelete = (name) => {
    const updatedRooms = rooms.filter((room) => room.name !== name);
    setRooms(updatedRooms);
  };

  const handleCreateNew = () => {
    const newRoom = {
      img: 'default_image_path', // You can add a default image path or handle the image upload separately
      name: 'Phòng mới',
      location: 'Địa điểm mới',
      price: '0',
      status: 'Available',
    };
    setRooms([...rooms, newRoom]);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader className="mb-8 p-6 bg-gray-800 text-white rounded-t-xl flex justify-between">
          <Typography variant="h6" color="white">
            Manage Rooms
          </Typography>
          <Button variant="gradient" color="green" size="sm" onClick={handleCreateNew}>
            Create New
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Phòng", "Địa điểm", "Giá", "Tình trạng", "", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
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
              {rooms.map(
                ({ img, name, location, price, status }, key) => {
                  const className = `py-3 px-5 ${
                    key === rooms.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {location}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          ₫ {price}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {status}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          onClick={() => handleDelete(name)}
                          className="text-xs font-semibold text-red-600"
                        >
                          Delete
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
