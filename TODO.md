# 🏠 Home Inventory App

##  🌐 Backend / Database

### 🔧 Refactor

#### ✅ Done

- [x] Use correct status codes for each API request
- [x] Create separate routers for each model
- [x] Compare plain and hashed passwords at login
- [x] Create created_at and updated_at fields for each model
- [x] Validate POST requests body with regular expressions
- [x] Create documentation for each router
- [x] Create documentation for each utility function

#### ❌ To Be Done

- [ ] Implement API docs with swagger
  - [x] Item endpoints
  - [ ] Shop endpoints
  - [ ] Location endpoints
  - [ ] User endpoints
- [ ] Extract database operations into separate functions
- [ ] Keep old user items when new item gets created and add a new one
- [ ] Check if user is logged before doing anything
- [ ] Create enum for shop type

### 🪒 To Fix

- [x] User logged state not changing after login in
- [x] Fix CORS error on frontend
- [ ] Check delete by id routes
- [ ] Check utility functions
### 💻 API

- [x] Create endpoints
  - [x] Items
    - [x] POST Create new item
    - [x] GET Get stored items
    - [x] PUT Update specific item
    - [x] DELETE Delete one or more items
- [x] Shops
  - [x] POST Create new shop
  - [x] GET Get stored shops
  - [x] PUT Update specific shop
  - [x] DELETE Delete one or more shops
- [x] Locations
  - [x] POST Create new location
  - [x] GET Get stored locations
  - [x] PUT Update specific location
  - [x] DELETE Delete one or more locations
- [x] Users
  - [x] POST Create new user / sign in
  - [x] POST login
  - [x] POST logout
  - [x] GET Get specific user info
  - [x] DELETE Delete specific user

### 📝 Database

- [x] Create schemas and models
  - [x] Item
    - name
    - description
    - Location
    - user
  - [x] Shop
    - name
    - description
    - type
    - address
    - schedule
  - [x] Location
    - name
    - description
    - room
  - [x] User
    - username
    - password
    - display name
    - items
    - logged
- [ ] Add auth methods
  - [ ] OAuth
  - [x] Sign Up / Login
- [ ] Add relationships between models
  - [x] User => Item - 0:N
  - [ ] Item => Shop - 1:N
  - [ ] Item => Location - 1:1

## ✅ Tests

- [ ] Add API tests
- [ ] Add database tests

## 🌎 Frontend

- [ ] Create frontend UI
- [ ] Deploy

## ⬆️ Stretch features

- [ ] Change login method for [mongo-auth](https://www.npmjs.com/package/mongo-auth) library
