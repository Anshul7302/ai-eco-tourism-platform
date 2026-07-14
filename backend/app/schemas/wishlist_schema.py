from pydantic import BaseModel


class WishlistCreate(BaseModel):
    user_id: int
    homestay_id: int


class WishlistResponse(BaseModel):
    id: int
    user_id: int
    homestay_id: int

    class Config:
        from_attributes = True