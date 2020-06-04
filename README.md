# JSON Server

Uses json-server to get mock stock data.

```
cp .env.example .env
npm install
npm start
```

Requires an authentication header to be set:

```
Authorization: "Bearer abc123"
```

### Request

A request to:

```
http://localhost:3000/stock
```

Returns:

```
{
  "stock": [
    {
      "id": 1,
      "name": "name",
      "type": "type",
      "units_available": 3
    }
  ]
}
```
