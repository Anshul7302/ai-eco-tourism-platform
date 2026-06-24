from fastapi import APIRouter, HTTPException

router = APIRouter()

homestays = [
    {
        "id": 1,
        "title": "Mountain View Cottage",
        "location": "Nainital",
        "price": 2500
    },
    {
        "id": 2,
        "title": "Forest Retreat",
        "location": "Mussoorie",
        "price": 3200
    },
    {
        "id": 3,
        "title": "Lake Side Stay",
        "location": "Bhimtal",
        "price": 2800
    }
]

# GET ALL
@router.get("/")
def get_homestays():
    return homestays

# GET SINGLE
@router.get("/{id}")
def get_homestay(id: int):
    for homestay in homestays:
        if homestay["id"] == id:
            return homestay

    raise HTTPException(
        status_code=404,
        detail="Homestay not found"
    )

# CREATE
@router.post("/")
def create_homestay(homestay: dict):
    homestays.append(homestay)
    return {
        "message": "Homestay created",
        "data": homestay
    }

# UPDATE
@router.put("/{id}")
def update_homestay(id: int, updated_data: dict):
    for homestay in homestays:
        if homestay["id"] == id:
            homestay.update(updated_data)

            return {
                "message": "Homestay updated",
                "data": homestay
            }

    raise HTTPException(
        status_code=404,
        detail="Homestay not found"
    )

# DELETE
@router.delete("/{id}")
def delete_homestay(id: int):
    for homestay in homestays:
        if homestay["id"] == id:
            homestays.remove(homestay)

            return {
                "message": "Homestay deleted"
            }

    raise HTTPException(
        status_code=404,
        detail="Homestay not found"
    )

# SEARCH
@router.get("/search/{location}")
def search_homestays(location: str):
    results = [
        homestay
        for homestay in homestays
        if homestay["location"].lower()
        == location.lower()
    ]

    return results