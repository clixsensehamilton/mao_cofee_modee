# Running Backend Locally with Docker Compose

This backend uses Docker Compose for local development and testing. It provides:
- A PostgreSQL database (matching the Prisma schema)
- The Node.js/TypeScript backend API

## Usage

1. **Copy the example environment file:**
   ```sh
   cp .env.example .env
   ```
   Edit `.env` if you need to change any variables.

2. **Start the services:**
   ```sh
   docker-compose up --build
   ```
   This will start both the database and backend API.

3. **Access the backend:**
   - The backend API will be available at [http://localhost:4000](http://localhost:4000)
   - The PostgreSQL database will be available at `localhost:5432` (user: `postgres`, password: `postgres`, db: `mao_coffee`)

4. **Stopping services:**
   ```sh
   docker-compose down
   ```
   This will stop and remove the containers, but the database data will persist in the `db_data` Docker volume.

## Notes
- The backend service uses the `DATABASE_URL` environment variable to connect to the database.
- Database data is persisted in a Docker volume (`db_data`).
- The backend code is mounted as a volume for live reload during development.
- Make sure you have Docker and Docker Compose installed.

## Prisma
- To run Prisma migrations or generate the client, use `docker-compose exec backend pnpm run prisma migrate dev` or similar commands inside the backend container.

---

For more details, see the Prisma and backend documentation.
