from sqlalchemy import Column, Integer
from app.database.database import Base


class Wishlist(Base):
    __tablename__ = "wishlist"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer)

    homestay_id = Column(Integer)