from fastapi import APIRouter

router = APIRouter(prefix="/recommendations", tags=["AI Recommendations"])


@router.get("/")
def recommendations():
    return [
        {
            "id": 1,
            "title": "Mountain View Cottage",
            "location": "Nainital"
        },
        {
            "id": 2,
            "title": "Forest Retreat",
            "location": "Mussoorie"
        }
    ]