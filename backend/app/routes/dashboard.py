from fastapi import APIRouter

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


@router.get("/")
def dashboard():
    return {
        "total_users": 100,
        "total_homestays": 50,
        "total_bookings": 30
    }