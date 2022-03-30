CREATE TABLE countries(
    country_id serial PRIMARY KEY,
    country_name text not null
);

CREATE TABLE regions(
    region_id serial PRIMARY KEY,
    region_name text not null,
    region_price text not null,
    country_id int REFERENCES countries(country_id)
);


INSERT INTO countries(country_id, country_name) VALUES(1, 'Uzbekistan - Russia');
INSERT INTO countries(country_id, country_name) VALUES(2, 'Russia - Kazakhstan');
INSERT INTO countries(country_id, country_name) VALUES(3, 'Germany - Russia');

INSERT INTO regions(region_name, region_price, country_id) VALUES('Lux','500', 1);
INSERT INTO regions(region_name, region_price, country_id) VALUES('1-class', '400', 1);
INSERT INTO regions(region_name, region_price, country_id) VALUES('2-class', '300', 1);
INSERT INTO regions(region_name, region_price, country_id) VALUES('Lux', '400', 2);
INSERT INTO regions(region_name, region_price, country_id) VALUES('1-class', '200', 2);
INSERT INTO regions(region_name, region_price, country_id) VALUES('Lux','200', 3);
INSERT INTO regions(region_name, region_price, country_id) VALUES('1-class', '100', 3);
