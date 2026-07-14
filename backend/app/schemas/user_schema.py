from pydantic import BaseModel


class UserCreate(BaseModel):
    full_name: str
    email: str
    phone: str | None = None
    password: str

    profile_image: str | None = None
    bio: str | None = None
    location: str | None = None


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str | None = None

    profile_image: str | None = None
    bio: str | None = None
    location: str | None = None

    class Config:
        from_attributes = True