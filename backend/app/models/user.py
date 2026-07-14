from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from app.database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String)
    email = Column(String, unique=True)
    phone = Column(String)

    password = Column(String)

    profile_image = Column(Text)
    bio = Column(Text)
    location = Column(String)

    created_at = Column(TIMESTAMP)