from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import users
from app.routes import homestays
from app.routes import bookings

app = FastAPI(title="EcoStay AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    users.router,
    prefix="/users",
    tags=["Users"]
)

app.include_router(
    homestays.router,
    prefix="/homestays",
    tags=["Homestays"]
)

app.include_router(
    bookings.router,
    prefix="/bookings",
    tags=["Bookings"]
)

@app.get("/")
def root():
    return {"message": "EcoStay AI Backend Running"}