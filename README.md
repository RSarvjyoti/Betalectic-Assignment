Frontend deployed url : https://betalectic-assignment-one.vercel.app/
Backend deployed url : https://dashboard.render.com/web/srv-d1fonq7fte5s73fp3u20

# API Endpoints

## Products (`/api/products`)

### GET `/api/products/get`
- **Description:** Get all products.
- **Response:**  
  `200 OK`  
  ```json
  [
    {
      "_id": "string",
      "code": "string",
      "name": "string",
      "price": number
    },
    ...
  ]
  ```

### POST `/api/products/add`
- **Description:** Add a new product.
- **Request Body:**
  ```json
  {
    "code": "string",
    "name": "string",
    "price": number
  }
  ```
- **Responses:**
  - `201 Created`  
    ```json
    {
      "_id": "string",
      "code": "string",
      "name": "string",
      "price": number
    }
    ```
  - `400 Bad Request`  
    ```json
    { "error": "code, name, and price are required" }
    ```
    or  
    ```json
    { "error": "Product code must be unique" }
    ```

---

## Carts (`/api/carts`)

### POST `/api/carts/add`
- **Description:** Add an item to the cart.
- **Request Body:**
  ```json
  {
    "productId": "string",
    "quantity": number
  }
  ```
- **Response:**  
  `200 OK`  
  ```json
  {
    "_id": "string",
    "items": [
      {
        "product": "string",
        "quantity": number,
        "_id": "string"
      }
    ]
  }
  ```

### GET `/api/carts/get`
- **Description:** Get the current cart with calculated totals and discounts.
- **Response:**  
  `200 OK`  
  ```json
  {
    "items": [
      {
        "product": {
          "_id": "string",
          "code": "string",
          "name": "string",
          "price": number
        },
        "quantity": number,
        "price": number,
        "subtotal": number,
        "discount": number
      }
    ],
    "total": number,
    "totalDiscount": number
  }
  ```

### POST `/api/carts/clear`
- **Description:** Clear the cart.
- **Response:**  
  `200 OK`  
  ```json
  { "message": "Cart cleared" }
  ```
