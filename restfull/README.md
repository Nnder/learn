# rest-api
## CRUD методы
#### Метод POST получает нескольк JSON элементов
### Example http://localhost:5000/api/users

    [
        {
            "name": "John1",
            "phone": 1234567
        },
        {
            "name": "John2",
            "phone": 124563732
        },
        {
            "name": "John3",
            "phone": 124557778
    ]
<hr>

#### Метод GET вернет всех
### Example http://localhost:5000/api/users

    [
    {
        "_id": "62a67ae9c578b73baf3354e9",
        "name": "John1",
        "phone": 124567,
        "__v": 0
    },
    {
        "_id": "62a67aeac578b73baf3354f3",
        "name": "John2",
        "phone": 124563732,
        "__v": 0
    }
]
<hr>

#### Метод GET по id
### Example http://localhost:5000/api/users/:id

    [
        {
            "_id": "62a67ae9c578b73baf3354e9",
            "name": "John1",
            "phone": 124567,
            "__v": 0
        }
    ]
<hr>

#### Метод DELETE по id
### Example http://localhost:5000/api/users/:id

    [
        {
            "_id": "62a67ae9c578b73baf3354e9",
            "name": "John1",
            "phone": 124567,
            "__v": 0
        }
    ]
<hr>

#### Метод UPDATE по id
### Example http://localhost:5000/api/users/:id

    [
        {
            "_id": "62a67ae9c578b73baf3354e9",
            "name": "John1",
            "phone": 124567,
            "__v": 0
        }
    ]
<hr>