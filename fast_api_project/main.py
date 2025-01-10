from typing import Optional

from uvicorn import run
from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field

app = FastAPI()

class Painting(BaseModel):
    name: str = Field(example="Картина")
    author: str = Field(example="Автор")
    price: int = Field(example=2000)
    img_source: Optional[str] = Field(default=None, example="./assets/6014484247.jpg")
items = {}

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items")
async def get_items():
    return items

@app.get("/items/{item_id}")
async def get_item(item_id):
    if not (item_id in items):
        HTTPException(status_code=404, detail="item_id not found.")
    return items[item_id]

@app.post("/items/add")
async def create_item(item_id: str, item: Painting):
    if item_id in items:
        HTTPException(status_code=400, detail="item_id already exists.")
    items[item_id] = item
    return items[item_id]

@app.put("/items/update")
async def update_item(item_id: str, item: Painting):
    if not (item_id in items):
        HTTPException(status_code=404, detail="item_id not found.")
    items[item_id] = item
    return items[item_id]

@app.delete("/items/delete/{item_id}")
async def delete_item(item_id):
    if not (item_id in items):
        HTTPException(status_code=404, detail="item_id not found.")
    del items[item_id]


if __name__ == "__main__":
    run(app, host="127.0.0.1", port=8000)