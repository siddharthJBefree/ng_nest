export const ConnectionConst = Object.freeze({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'siddharth',
  database: 'bs'
});

export const DevConnectionConst = Object.freeze({
  host: '//live-database',
  port: 3600,
  user: 'postgres',
  password: 'siddharth',
  database: 'bs'
});

export type ConnectionT = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};
