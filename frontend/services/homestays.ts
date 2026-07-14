const API = "http://127.0.0.1:8000";

export async function getHomestays() {
  const response = await fetch(`${API}/homestays/`);

  if (!response.ok) {
    throw new Error("Failed to fetch homestays");
  }

  return response.json();
}

export async function getHomestay(id: number) {
  const response = await fetch(`${API}/homestays/${id}`);

  if (!response.ok) {
    throw new Error("Homestay not found");
  }

  return response.json();
}

export async function createHomestay(data: any) {
  const response = await fetch(`${API}/homestays/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}