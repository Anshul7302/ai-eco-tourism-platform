const API = "http://127.0.0.1:8000";

// Get User Profile
export async function getUser(id: number) {
  const response = await fetch(`${API}/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

// Update User Profile
export async function updateUser(id: number, data: any) {
  const response = await fetch(`${API}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return response.json();
}

// User Statistics
export async function getUserStats(id: number) {
  const [wishlist, bookings] = await Promise.all([
    fetch(`${API}/wishlist/${id}`),
    fetch(`${API}/bookings/user/${id}`),
  ]);

  const wishlistData = wishlist.ok ? await wishlist.json() : [];
  const bookingData = bookings.ok ? await bookings.json() : [];

  return {
    wishlist: wishlistData.length,
    bookings: bookingData.length,
  };
}