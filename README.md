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

This can be done with a browser extension such as ModHeader

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
