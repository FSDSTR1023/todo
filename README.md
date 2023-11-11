# Endpoints

<details>
  <summary>
    <code>GET</code> 
    <code>/tasks</code> 
    Get an incompleted task list
  </summary>
  
  ## Parameters

  > | name      |  type     | data type               | description     |
  > |-----------|-----------|-------------------------|-----------------|
  > | None      |  required | object (JSON or YAML)   | N/A  |

  
  ## Responses
  
</details>

<details>
  <summary>
    <code>GET</code> 
    <code>/tasks/:id</code> 
    Get a detail of a task
  </summary>
  
  ## Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |

  ## Responses
  
</details>

<details>
  <summary>
    <code>PUT</code> 
    <code>/tasks/:id</code> 
    Update a task
  </summary>
  
  ## Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |
  
  ## Responses
  
</details>

<details>
  <summary>
    <code>DELETE</code> 
    <code>/tasks/:id</code> 
    Remove a task
  </summary>
  
  ## Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |
  
  ## Responses
  
</details>

<details>
  <summary>
    <code>POST</code> 
    <code>/tasks/</code> 
    Create a new task
  </summary>
  
  ## Parameters

  > | name             |  type     | data type               | description                  |
  > |------------------|-----------|-------------------------|------------------------------|
  > | title            |  required | string                  | Title of the new task        |
  > | description      |  optional | string                  | Description of the new task  |
  > | datestart        |  optional | string                  | Date to start the task       |
  > | dateend          |  optional | string                  | Date to end the task         |
  
  ## Responses
  
</details>

<details>
  <summary>
    <code>PATCH</code> 
    <code>/tasks/:id</code> 
    Mark task as done
  </summary>
  
  ## Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |
  
  ## Responses
  
</details>

<details>
  <summary>
    <code>GET</code> 
    <code>/user</code> 
    Get user information
  </summary>
  
  ## Parameters

  > | name      |  type     | data type               | description     |
  > |-----------|-----------|-------------------------|-----------------|
  > | None      |  required | object (JSON or YAML)   | N/A  |
  
  ## Responses

  > | http code     | content-type                      | response                                                                      |
  > |---------------|-----------------------------------|-------------------------------------------------------------------------------|
  > | `200`         | `application/json`                | `{"firstname": "Jordi", "lastname": "Galobart", "email": "test@example.com"}` |
  
</details>

# Task
- title
- description
- status
- datestart
- dateend
- id
- user
- createdAt
- modifiedAt
- deletedAt

# User
- firstname
- lastname
- email
