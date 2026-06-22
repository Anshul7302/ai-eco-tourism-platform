from fastapi import FastAPI
from app.routes import homestays, users, bookings

app = FastAPI(
    title="EcoStay AI API",
    version="1.0.0"
)

app.include_router(
    homestays.router,
    prefix="/homestays",
    tags=["Homestays"]
)

app.include_router(
    users.router,
    prefix="/users",
    tags=["Users"]
)

app.include_router(
    bookings.router,
    prefix="/bookings",
    tags=["Bookings"]
)

@app.get("/")
def home():
    return {
        "message": "EcoStay AI Backend Running Successfully"
    }