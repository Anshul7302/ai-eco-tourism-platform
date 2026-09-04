from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# --------------------------------------------------
# Import Models
# --------------------------------------------------

from app.models.user import User
from app.models.homestay import Homestay
from app.models.wishlist import Wishlist


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
    admin,
)


# --------------------------------------------------
# Create FastAPI Application
# --------------------------------------------------

app = FastAPI(
    title="EcoStay AI API",
    version="1.0.0",
    description="AI-Powered Eco-Tourism & Homestay Recommendation Platform",
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Authentication
# --------------------------------------------------

app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"],
)


# --------------------------------------------------
# Users
# --------------------------------------------------

app.include_router(
    users.router,
    prefix="/users",
    tags=["Users"],
)


# --------------------------------------------------
# Homestays
# --------------------------------------------------

app.include_router(
    homestay.router,
    prefix="/homestays",
    tags=["Homestays"],
)


# --------------------------------------------------
# Bookings
# --------------------------------------------------

app.include_router(
    bookings.router,
    prefix="/bookings",
    tags=["Bookings"],
)


# --------------------------------------------------
# Contact
# --------------------------------------------------

app.include_router(
    contact.router,
    prefix="/contact",
    tags=["Contact"],
)


# --------------------------------------------------
# Dashboard
# --------------------------------------------------

app.include_router(
    dashboard.router,
    prefix="/dashboard",
    tags=["Dashboard"],
)


# --------------------------------------------------
# Payments
# --------------------------------------------------

app.include_router(
    payments.router,
    prefix="/payments",
    tags=["Payments"],
)


# --------------------------------------------------
# AI Recommendations
# --------------------------------------------------

app.include_router(
    recommendations.router,
    prefix="/recommendations",
    tags=["AI Recommendations"],
)


# --------------------------------------------------
# Wishlist
# --------------------------------------------------

app.include_router(
    wishlist.router,
    prefix="/wishlist",
    tags=["Wishlist"],
)


# --------------------------------------------------
# ADMIN
# --------------------------------------------------

app.include_router(
    admin.router,
    prefix="/admin",
    tags=["Admin"],
)


# --------------------------------------------------
# Root API
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "EcoStay AI Backend Running",
        "status": "success",
    }