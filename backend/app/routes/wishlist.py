from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.wishlist import Wishlist
from app.schemas.wishlist_schema import WishlistCreate

router = APIRouter()


@router.post("/")
def add_to_wishlist(
    wishlist: WishlistCreate,
    db: Session = Depends(get_db)
):

    item = Wishlist(
        user_id=wishlist.user_id,
        homestay_id=wishlist.homestay_id
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return {
        "message": "Added to Wishlist",
        "data": item
    }


@router.get("/{user_id}")
def get_wishlist(
    user_id: int,
    db: Session = Depends(get_db)
):

    return db.query(Wishlist).filter(
        Wishlist.user_id == user_id
    ).all()


@router.delete("/{id}")
def delete_wishlist(
    id: int,
    db: Session = Depends(get_db)
):

    item = db.query(Wishlist).filter(
        Wishlist.id == id
    ).first()

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Wishlist not found"
        )

    db.delete(item)
    db.commit()

    return {
        "message": "Removed Successfully"
    }