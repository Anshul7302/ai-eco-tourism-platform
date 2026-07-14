from sqlalchemy import Column, Integer, String, Boolean, Float
from app.database.database import Base


class Homestay(Base):
    __tablename__ = "homestays"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)
    location = Column(String)

    city = Column(String)
    state = Column(String)
    country = Column(String)

    description = Column(String)

    price = Column(Integer)

    rating = Column(Float)
    eco_score = Column(Integer)

    category = Column(String)

    max_guests = Column(Integer)
    available_rooms = Column(Integer)

    wifi = Column(Boolean)
    parking = Column(Boolean)
    breakfast = Column(Boolean)
    pool = Column(Boolean)
    pet_friendly = Column(Boolean)

    latitude = Column(Float)
    longitude = Column(Float)

    image_url = Column(String)