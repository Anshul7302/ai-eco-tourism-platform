from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_bookings():
    return [
        {
            "booking_id": 1,
            "homestay": "Mountain View Cottage",
            "status": "Confirmed"
        }
    ]