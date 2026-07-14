from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.homestay import Homestay
from app.schemas.homestay_schema import HomestayCreate

router = APIRouter()

# GET ALL
@router.get("/")
def get_homestays(db: Session = Depends(get_db)):
    return db.query(Homestay).all()


# GET SINGLE
@router.get("/{id}")
def get_homestay(id: int, db: Session = Depends(get_db)):
    homestay = db.query(Homestay).filter(Homestay.id == id).first()

    if not homestay:
        raise HTTPException(
            status_code=404,
            detail="Homestay not found"
        )

    return homestay


# CREATE
@router.post("/")
def create_homestay(
    homestay: HomestayCreate,
    db: Session = Depends(get_db)
):
    new_homestay = Homestay(**homestay.model_dump())

    db.add(new_homestay)
    db.commit()
    db.refresh(new_homestay)

    return {
        "message": "Homestay created",
        "data": new_homestay
    }


# UPDATE
@router.put("/{id}")
def update_homestay(
    id: int,
    updated_data: HomestayCreate,
    db: Session = Depends(get_db)
):
    homestay = db.query(Homestay).filter(Homestay.id == id).first()

    if not homestay:
        raise HTTPException(
            status_code=404,
            detail="Homestay not found"
        )

    for key, value in updated_data.model_dump().items():
        setattr(homestay, key, value)

    db.commit()
    db.refresh(homestay)

    return {
        "message": "Homestay updated",
        "data": homestay
    }


# DELETE
@router.delete("/{id}")
def delete_homestay(
    id: int,
    db: Session = Depends(get_db)
):
    homestay = db.query(Homestay).filter(Homestay.id == id).first()

    if not homestay:
        raise HTTPException(
            status_code=404,
            detail="Homestay not found"
        )

    db.delete(homestay)
    db.commit()

    return {
        "message": "Homestay deleted"
    }


# SEARCH
@router.get("/search/")
def search_homestays(
    city: str = "",
    budget: int = 100000,
    guests: int = 1,
    db: Session = Depends(get_db)
):
    query = db.query(Homestay)

    if city:
        query = query.filter(Homestay.city.ilike(f"%{city}%"))

    query = query.filter(Homestay.price <= budget)

    query = query.filter(Homestay.max_guests >= guests)

    return query.all()