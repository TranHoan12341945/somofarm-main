// src/utils/fetchData.js
const API_URL = 'https://jsonserver-two.vercel.app/api?fbclid=IwZXh0bgNhZW0CMTAAAR0IHW-7AslGbRgtUKv6YPCjtjxFRH98vwDbqmX_y52tP60tp9L2u1FTfXg_aem_ZmFrZWR1bW15MTZieXRlcw';
const CUSTOMER_API_URL = 'https://jsonserver-two.vercel.app/customer?fbclid=IwZXh0bgNhZW0CMTAAAR1NyUOW1ZXXfDHTssKl6XjK6kud9vuvKKnJINryY13NCWKAvxDgbqY0h_c_aem_Yc1G4-2DD_Tnlia1vM5hqg';
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

export const deleteRoomData = async (roomID) => {
  try {
    await fetch(`${API_URL}/rooms/${roomID}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error("Failed to delete room data:", error);
  }
};

export const createRoomData = async (newRoom) => {
  try {
    const response = await fetch(`${API_URL}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoom),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to create room data:", error);
  }
};
export const fetchCustomerData = async () => {
  try {
    const response = await fetch(CUSTOMER_API_URL);
    const data = await response.json();
    return data.customers;
  } catch (error) {
    console.error("Failed to fetch customer data:", error);
    return [];
  }
};
export const deleteCustomerData = async (customerID) => {
  try {
    await fetch(`${API_URL}/customers/${customerID}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error("Failed to delete customer data:", error);
  }
};
