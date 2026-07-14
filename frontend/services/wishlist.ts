const API = "http://127.0.0.1:8000";

export async function addToWishlist(userId: number, homestayId: number) {
  const response = await fetch(`${API}/wishlist/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId,
      homestay_id: homestayId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add wishlist");
  }

  return response.json();
}

export async function getWishlist(userId: number) {
  const response = await fetch(`${API}/wishlist/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  return response.json();
}

export async function removeWishlist(id: number) {
  const response = await fetch(`${API}/wishlist/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove wishlist");
  }

  return response.json();
}