# Pure Heaven Backend

Node.js + Express API for contact form and booking submissions (MySQL).

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   - Copy `.env.example` to `.env`
   - Set `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (and optional `PORT`)

3. **Database**
   - Create the database and tables by running `schema.sql` in your MySQL client:
     ```bash
     mysql -u your_user -p < schema.sql
     ```
   - Or run the SQL inside MySQL Workbench / any MySQL client.

## Run

```bash
npm start
```

Server runs on `http://localhost:5000` (or the port in `.env`).

## API

| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| GET    | `/api/health`   | Health check (`{ ok: true }`)  |
| POST   | `/api/form`     | Submit contact form            |
| POST   | `/api/booking`  | Submit booking request         |

### POST /api/form

Body (JSON): `firstname`, `lastname`, `email`, `phone`, `message` (all required, email validated).

### POST /api/booking

Body (JSON): `serviceType`, `date`, `name`, `phone` (all required).
