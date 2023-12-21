use pohub;
drop table file, board, user;
create table user (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id varchar(30) NOT NULL,
    pw varchar(30) NOT NULL,
    created_at timestamp,
    user_role enum('user', 'admin'),
    email varchar(30)
);

create table board (
	board_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    writter int,
    board_type varchar(30),
    cnt text,
    title varchar(30),
    foreign key (writter) references user(id)
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

select * from user;