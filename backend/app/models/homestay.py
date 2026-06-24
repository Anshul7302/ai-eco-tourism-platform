from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Homestay(Base):
    __tablename__ = "homestays"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    location = Column(String)
    price = Column(Integer)
    image_url = Column(String)
    description = Column(String)