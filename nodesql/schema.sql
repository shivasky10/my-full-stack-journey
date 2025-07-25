create table user
(
    id int primary key,
    username varchar(20) unique,
    email varchar(50) unique,
    password varchar(20) not null
);