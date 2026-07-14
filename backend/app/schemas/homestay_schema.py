from pydantic import BaseModel
from typing import Optional

class HomestayCreate(BaseModel):
    title: str
    location: str
    city: str
    state: str
    country: str
    description: str
    price: int
    rating: float
    eco_score: int
    category: str
    max_guests: int
    available_rooms: int
    wifi: bool
    parking: bool
    breakfast: bool
    pool: bool
    pet_friendly: bool
    latitude: float
    longitude: float
    image_url: str


class HomestayResponse(HomestayCreate):
    id: int

    class Config:
        from_attributes = True