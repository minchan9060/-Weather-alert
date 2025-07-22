from pydantic import BaseModel
from datetime import date, datetime

class UserCreate(BaseModel) :
    username : str
    password : str

class UserLogin(BaseModel) :
    username : str
    password : str

class UserResponse(BaseModel) :
    id : int
    username : str
    class Config :
        orm_mode : True