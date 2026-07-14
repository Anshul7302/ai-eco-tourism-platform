from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.user_schema import UserCreate

router = APIRouter()


@router.get("/")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@router.get("/{id}")
def get_user(id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user


@router.post("/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(**user.model_dump())

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.put("/{id}")
def update_user(id: int, updated_user: UserCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    for key, value in updated_user.model_dump().items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return user


@router.delete("/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return {"message": "User deleted successfully"}