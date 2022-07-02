drop database if exists leetcode;

create database leetcode;

\c leetcode;

create table if not exists entries (
  id SERIAL,
  name VARCHAR,
  difficulty VARCHAR,
  promptLink VARCHAR,
  totalTime VARCHAR,
  promptCode VARCHAR,
  prompt VARCHAR,
  custom Boolean,
  solution VARCHAR,
  readTime VARCHAR,
  whiteboardTime VARCHAR,
  psudocodeTime VARCHAR,
  codeTime VARCHAR,
  constraints VARCHAR
  -- examples: [{}]
);

create table if not exists examples (
  id SERIAL,
  entry_id INT,
  example VARCHAR
);

ALTER TABLE entries ADD CONSTRAINT entries_pkey PRIMARY KEY (id);

ALTER TABLE examples ADD CONSTRAINT examples_pkey PRIMARY KEY (id);

ALTER TABLE examples ADD CONSTRAINT examples_entry_id_fkey FOREIGN KEY (entry_id) REFERENCES entries(id);

CREATE INDEX examples_entry_id_idx ON examples (entry_id);

--    reload the schema.sql locally:
-- \i serverAPI/database/schema.sql

-- sudo -u postgres psql postgres