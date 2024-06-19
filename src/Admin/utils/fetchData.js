// src/utils/fetchData.js
const API_URL = 'https://jsonserver-two.vercel.app/api?fbclid=IwZXh0bgNhZW0CMTAAAR0IHW-7AslGbRgtUKv6YPCjtjxFRH98vwDbqmX_y52tP60tp9L2u1FTfXg_aem_ZmFrZWR1bW15MTZieXRlcw';

export const fetchRoomsData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.rooms;
  } catch (error) {
    console.error("Failed to fetch rooms data:", error);
    return [];
  }
};

export const updateRoomData = async (updatedRoom) => {
  try {
    const response = await fetch(`${API_URL}/rooms/${updatedRoom.roomID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRoom),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to update room data:", error);
  }
};
