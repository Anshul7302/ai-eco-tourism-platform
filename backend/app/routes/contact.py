from fastapi import APIRouter

router = APIRouter(prefix="/contact", tags=["Contact"])


@router.post("/")
def send_message():
    return {
        "message": "Your message has been received."
    }