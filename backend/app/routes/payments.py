from fastapi import APIRouter

router = APIRouter(prefix="/payments", tags=["Payments"])


@router.post("/")
def make_payment():
    return {
        "message": "Payment Successful"
    }


@router.get("/")
def payment_history():
    return [
        {
            "id": 1,
            "amount": 2500,
            "status": "Paid"
        }
    ]