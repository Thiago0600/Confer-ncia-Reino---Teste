require('dotenv/config');

module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['backend/src/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['backend/src/system/database/migrations/*.ts'],
    cli: {
        migrationsDir: 'backend/src/system/database/migrations',
    },
};
