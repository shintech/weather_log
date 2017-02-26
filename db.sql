DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE days (
  ID SERIAL PRIMARY KEY,
  temp_lo INTEGER,
  temp_hi INTEGER,
  humidity INTEGER,
  pressure INTEGER,
  dew_point INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);


INSERT INTO days ( temp_lo, temp_hi, humidity, pressure, dew_point )
VALUES ( 23, 67, 54, 76, 55 );

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE days (
  ID SERIAL PRIMARY KEY,
  temp_lo INTEGER,
  temp_hi INTEGER,
  humidity INTEGER,
  pressure INTEGER,
  dew_point INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE days (
  ID SERIAL PRIMARY KEY,
  temp_lo INTEGER,
  temp_hi INTEGER,
  humidity INTEGER,
  pressure INTEGER,
  dew_point INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);