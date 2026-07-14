from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import models so SQLAlchemy registers them
from app.models.user import User
from app.models.homestay import Homestay
from app.models.wishlist import Wishlist

# Import routes
from app.routes import (
    auth,
    users,
    homestay,
    bookings,
    contact,
    dashboard,
    payments,
    recommendations,
    wishlist,
)

app = FastAPI(
    title="EcoStay AI API",
    version="1.0.0",
    description="AI-Powered Eco-Tourism & Homestay Recommendation Platform",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(homestay.router, prefix="/homestays", tags=["Homestays"])
app.include_router(bookings.router, prefix="/bookings", tags=["Bookings"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])
app.include_router(payments.router, prefix="/payments", tags=["Payments"])
app.include_router(
    recommendations.router,
    prefix="/recommendations",
    tags=["AI Recommendations"],
)
app.include_router(wishlist.router, prefix="/wishlist", tags=["Wishlist"])


@app.get("/")
def root():
    return {
        "message": "EcoStay AI Backend Running",
        "status": "success",
    }