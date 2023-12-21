use pohub;
drop table file;
drop table board;
drop table user;

create table user (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id varchar(30) NOT NULL UNIQUE KEY,
    pw varchar(30) NOT NULL,
    created_at timestamp,
    user_role enum('user', 'admin'),
    email varchar(30)
);

create table board (
	board_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    writter varchar(30),
    board_type varchar(30),
    cnt text,
    title varchar(30),
    foreign key (writter) references user(user_id)
);

create table file (
	file_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    board_id int,
    file_dir varchar(30),
    file_type enum('img', 'file', 'video'),
    foreign key (board_id) references board(board_id)
);

insert into user(user_id, pw, created_at, user_role)
Values('testuser', 'kkkddd', current_timestamp(), 'admin');

insert into board(writter, board_type, cnt, title)
Values('testuser', 'freeBoard', 'Hello World', 'title1');
insert into board(writter, board_type, cnt, title)
Values('testuser', 'freeBoard', 'Hello World', 'title2');
insert into board(writter, board_type, cnt, title)
Values('testuser', 'freeBoard', 'Hello World', 'title3');

select * from user;
select * from board;
