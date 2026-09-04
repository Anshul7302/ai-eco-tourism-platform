from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard")
def admin_dashboard():

    return {
        "total_users": 0,
        "total_homestays": 0,
        "total_bookings": 0,
        "total_revenue": 0,
        "pending_payments": 0,
        "completed_bookings": 0,
        "total_visitors": 0,
        "active_users": 0,
        "recent_bookings": []
    }