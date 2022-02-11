# API docs

## Resources

Uses the library: https://github.com/typicode/json-server

- Profile

## products routes

```
GET    /products
GET    /products/:id
POST   /products
PUT    /products/:id
PATCH  /products/:id
```

## Filter

Use `.` to access deep properties

```
GET /products?subscription=true
GET /products?tags_like=Cat
GET /products?id=182&id=194
GET /products?thumbnail.width=770
```

## Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.


```
GET /products?_page=3
GET /products?_page=2&_limit=20
```

_10 items are returned by default_

## Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /products?_sort=title&_order=DESC
```

## Slice

Add `_start` and `_end` or `_limit` (an `X-Total-Count` header is included in the response)

```
GET /products?_start=20&_end=30
```

_Works exactly as [Array.slice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (i.e. `_start` is inclusive and `_end` exclusive)_

## Operators

Add `_gte` or `_lte` for getting a range

```
GET /products?thumbnail.width_gte=1500&width_lte=2000
```

Add `_ne` to exclude a value

```
GET /products?id_ne=1
```

Add `_like` to filter (RegExp supported)

```
GET /products?title_like=Ha
```

## Full-text search

Add `q`

```
GET /products?q=japan
```
