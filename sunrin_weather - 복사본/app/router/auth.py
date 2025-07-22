from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import get_db

router = APIRouter()

@router.post("/register", response_model=schemas.UserResponse)
async def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, user.username)

    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already registered")
    
    new_user = crud.create_user(db, user)
    return new_user

@router.post("/login", response_model=schemas.UserResponse)
async def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, user.username)

    if not db_user or db_user.password != user.password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid username or password")
    
    return db_user