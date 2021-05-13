module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gabriellji',
  password: 'pass123',
  database: 'coffees',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
