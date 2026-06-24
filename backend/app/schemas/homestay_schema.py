from pydantic import BaseModel

class HomestayCreate(BaseModel):
    title: str
    location: str
    price: int
    image_url: str
    description: str