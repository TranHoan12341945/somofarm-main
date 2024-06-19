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
import { fetchRoomsData, updateRoomData, deleteRoomData } from "../../utils/fetchData";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";

export function BookedRooms() {
  const [roomsData, setRoomsData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [updatedRoom, setUpdatedRoom] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRoomsData();
      const bookedRooms = data.filter(room => room.roomStatus === 'Booked');
      setRoomsData(bookedRooms);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000); // Cập nhật dữ liệu mỗi 30 giây

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
    setRoomsData(updatedRoomsData);

    // Send request to update room data on the server
    await updateRoomData(updatedRoom);

    setIsDialogOpen(false);
  };

  const handleDelete = async (roomID) => {
    // Remove room data locally
    const updatedRoomsData = roomsData.filter(room => room.roomID !== roomID);
    setRoomsData(updatedRoomsData);

    // Send request to delete room data on the server
    await deleteRoomData(roomID);
  };

  const filteredRooms = roomsData.filter(room =>
    room.roomName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.areaDetails.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <DashboardNavbar onSearch={(e) => setSearchTerm(e.target.value)} />
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-6 bg-gray-800 text-white rounded-t-xl flex justify-between items-center">
            <Typography variant="h6" color="white">
              Booked Rooms
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Phòng", "Địa điểm", "Giá", "Trạng thái", "Hành động"].map((el) => (
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
                {filteredRooms.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-3 px-5">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        Không có phòng nào đã đặt
                      </Typography>
                    </td>
                  </tr>
                ) : (
                  filteredRooms.map(
                    ({ roomID, roomName, areaDetails, roomPrice, roomStatus }, key) => {
                      const className = `py-3 px-5 ${
                        key === roomsData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={roomID}>
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
                              color={roomStatus === "Available" ? "green" : "red"}
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
          <DialogHeader>Chỉnh sửa phòng</DialogHeader>
          <DialogBody>
            <div className="flex flex-col gap-4">
              <Input
                label="Tên phòng"
                value={updatedRoom.roomName || ''}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, roomName: e.target.value })}
              />
              <Input
                label="Địa điểm"
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
    </div>
  );
}

export default BookedRooms;
