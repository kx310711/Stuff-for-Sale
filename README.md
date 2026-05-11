# Stuff for Sale

Stuff for Sale is a small marketplace-style web app for managing a list of items. Users can view current listings, add a new item, rename an existing item, update its price, and remove it from the list.

The project started as a Coursera NodeJs and AngularJS exercise, then I refreshed with a cleaner storefront design so it feels more like a real local listings board. Here I improved and practice my nodeJs skill. 

## Features

- View all available items with their prices
- Add new items with a name and price
- Rename listed items
- Update item prices
- Delete items after confirmation
- Auto-refresh the listing data every few seconds
- Responsive layout for desktop and mobile screens

## Technologies Used

### HTML

`index.html` provides the page structure for the app. It contains the main layout, listing cards, add-item form, sidebar links, and AngularJS bindings.

### CSS

`css/master.css` controls the full visual design. The current design uses a warm neutral palette, simple card layouts, responsive grid behavior, and custom styling for the marketplace interface.

### AngularJS

`js/stuffforsale.js` powers the frontend behavior. AngularJS is used for:

- Rendering listings with `ng-repeat`
- Binding form fields with `ng-model`
- Handling button actions with `ng-click`
- Sending HTTP requests to the local server with `$http`
- Opening rename and price dialogs

### Angular UI Bootstrap

The app uses Angular UI Bootstrap for modal dialog support. These dialogs are used when renaming an item or updating an item price.

### Node.js

`server.js` creates a small HTTP server using Node's built-in `http` module. It handles API requests for reading, adding, updating, and deleting items.

### JSON

`items.json` stores the sample listing data. Each item includes:

```json
{
  "id": "2022-12-19T23:55:30.588Z",
  "name": "Exercise bench",
  "price": 120.00
}
```

## Project Structure

```text
.
├── css/
│   └── master.css
├── images/
│   ├── 1.jpg
│   └── 3.jpg
├── js/
│   └── stuffforsale.js
├── index.html
├── items.json
├── package.json
├── README.md
└── server.js
```

## How to Run

1. Install Node.js if it is not already installed.

2. Start the local API server:

```bash
node server.js
```

3. Open `index.html` in your browser.

The frontend expects the API server to be running at:

```text
http://localhost:3000
```

## API Overview

The server supports these actions:

- `GET /getlist` - returns all items
- `PUT /newItem?newItemName=...&newItemPrice=...` - adds a new item
- `POST /updateName?id=...&newItemName=...` - renames an item
- `POST /updatePrice?id=...&newPrice=...` - updates an item price
- `DELETE /deleteItem?id=...` - removes an item

## Notes

This project keeps the logic intentionally simple. The data is loaded from `items.json` and held in memory while the server is running, so changes are not written back permanently to the JSON file.

## Author

Original project by Harrison Kong. I followed the Course to create this nodeJS Project, and Design refreshed by me and README prepared for a GitHub upload.
