const API_URL = "http://127.0.0.1:8000";

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function getHomestays() {
  const res = await fetch(`${API_URL}/homestays`);

  if (!res.ok) {
    throw new Error("Failed to fetch homestays");
  }

  return res.json();
}

export async function getBookings() {
  const res = await fetch(`${API_URL}/bookings`);

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
}