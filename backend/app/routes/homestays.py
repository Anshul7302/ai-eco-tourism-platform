from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_homestays():
    return [
        {
            "id": 1,
            "name": "Mountain View Cottage",
            "location": "Nainital",
            "price": 2500,
            "rating": 4.8
        },
        {
            "id": 2,
            "name": "Forest Retreat",
            "location": "Mussoorie",
            "price": 3200,
            "rating": 4.7
        }
    ]