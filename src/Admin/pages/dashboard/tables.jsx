import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";
import { fetchRoomsData, updateRoomData } from "../../utils/fetchData";
import Navbar from "../../widgets/layout/navbar"; // Adjust the path according to your project structure
import DashboardNavbar from "../../widgets/layout/dashboard-navbar"; // Adjust the path according to your project structure

export function Tables() {
  const [roomsData, setRoomsData] = useState([]);
  const [filteredRoomsData, setFilteredRoomsData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [updatedRoom, setUpdatedRoom] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRoomsData();
      data.sort((a, b) => a.roomStatus.localeCompare(b.roomStatus)); // Sort rooms
      setRoomsData(data);
      setFilteredRoomsData(data);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000); // Update data every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleEdit = (room) => {
    setSelectedRoom(room);
    setUpdatedRoom(room);
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    // Update room data locally
    const updatedRoomsData = roomsData.map(room =>
      room.roomID === updatedRoom.roomID ? updatedRoom : room
    );
    updatedRoomsData.sort((a, b) => a.roomStatus.localeCompare(b.roomStatus)); // Sort rooms
    setRoomsData(updatedRoomsData);
    setFilteredRoomsData(updatedRoomsData);

    // Send request to update room data on the server
    await updateRoomData(updatedRoom);

    setIsDialogOpen(false);
  };

  const handleDelete = (roomID) => {
    const updatedRoomsData = roomsData.filter(room => room.roomID !== roomID);
    updatedRoomsData.sort((a, b) => a.roomStatus.localeCompare(b.roomStatus)); // Sort rooms
    setRoomsData(updatedRoomsData);
    setFilteredRoomsData(updatedRoomsData);
  };

  const handleCreate = () => {
    setSelectedRoom(null);
    setUpdatedRoom({
      roomID: "",
      roomName: "",
      areaDetails: "",
      roomPrice: "",
      roomStatus: "Available"
    });
    setIsDialogOpen(true);
  };

  const handleSearch = (query) => {
    const filteredData = roomsData.filter(room =>
      room.roomName.toLowerCase().includes(query.toLowerCase()) ||
      room.areaDetails.toLowerCase().includes(query.toLowerCase()) ||
      room.roomID.toLowerCase().includes(query.toLowerCase()) // Include roomID in search
    );
    setFilteredRoomsData(filteredData);
  };

  return (
    <>
      {/* <Navbar brandName="SOMOFARM" routes={[]} onSearch={handleSearch} /> */}
      <DashboardNavbar onSearch={handleSearch} />

      <div className="flex flex-col gap-12 mt-12 mb-8">
        <Card>
          <CardHeader className="flex items-center justify-between p-6 mb-8 text-white bg-gray-800 rounded-t-xl">
            <Typography variant="h6" color="white">
              Manage Rooms
            </Typography>
            <Button color="blue" onClick={handleCreate}>
              Create New Room
            </Button>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2 overflow-x-scroll">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["ID Phòng", "Phòng", "Mô tả", "Giá", "Trạng thái", "Hành động"].map((el) => (
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
                {filteredRoomsData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-5 py-3 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        Không có dữ liệu phòng
                      </Typography>
                    </td>
                  </tr>
                ) : (
                  filteredRoomsData.map(
                    ({ roomID, roomName, areaDetails, roomPrice, roomStatus }, key) => {
                      const className = `py-3 px-5 ${
                        key === filteredRoomsData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={roomID}>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {roomID}
                            </Typography>
                          </td>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <div>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-semibold"
                                >
                                  {roomName}
                                </Typography>
                                <Typography className="text-xs font-normal text-blue-gray-500">
                                  {areaDetails}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {areaDetails}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {roomPrice}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Chip
                              variant="gradient"
                              color={roomStatus === "(Available)" ? "green" : "red"}
                              value={roomStatus}
                              className="py-0.5 px-2 text-[11px] font-medium w-fit"
                            />
                          </td>
                          <td className={className}>
                            <div className="flex space-x-2">
                              <Button color="blue" size="sm" onClick={() => handleEdit({ roomID, roomName, areaDetails, roomPrice, roomStatus })}>
                                Edit
                              </Button>
                              <Button color="red" size="sm" onClick={() => handleDelete(roomID)}>
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

        <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)}>
          <DialogHeader>{selectedRoom ? "Chỉnh sửa phòng" : "Tạo phòng mới"}</DialogHeader>
          <DialogBody>
            <div className="flex flex-col gap-4">
              <Input
                label="ID phòng"
                value={updatedRoom.roomID || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, roomID: e.target.value })}
                disabled={!!selectedRoom}
              />
              <Input
                label="Tên phòng"
                value={updatedRoom.roomName || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, roomName: e.target.value })}
              />
              <Input
                label="Mô tả"
                value={updatedRoom.areaDetails || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, areaDetails: e.target.value })}
              />
              <Input
                label="Giá"
                value={updatedRoom.roomPrice || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, roomPrice: e.target.value })}
              />
              <Input
                label="Trạng thái"
                value={updatedRoom.roomStatus || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, roomStatus: e.target.value })}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="gradient" color="green" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default Tables;
