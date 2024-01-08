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
    created_at timestamp,
    cnt text,
    title varchar(30),
    foreign key (writter) references user(user_id)
);

create table file (
	file_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    board_id int,
    file_dir varchar(100),
    file_type enum('img', 'file', 'video'),
    foreign key (board_id) references board(board_id)
);

CREATE TABLE sessions (
  session_id VARCHAR(255) NOT NULL,
  expires BIGINT,
  data TEXT,
  PRIMARY KEY (session_id)
);

insert into user(user_id, pw, created_at, user_role)
Values('testuser', 'kkkddd', current_timestamp(), 'admin');

insert into board(writter, board_type, created_at, cnt, title)
Values('testuser', 'freeBoard', current_timestamp(), '여기는 이제부터 캬루가 지배한다', '테스트 게시물 1');
insert into board(writter, board_type, created_at, cnt, title)
Values('testuser', 'freeBoard', current_timestamp(), '카링입니다', '테스트 게시물 2');

insert into file(board_id,  file_dir, file_type)
Values(2, 'http://www.pobijunior.com/img/test.png', 'img');
insert into file(board_id,  file_dir, file_type)
Values(2, 'http://www.pobijunior.com/img/logo192.png', 'img');
insert into file(board_id,  file_dir, file_type)
Values(1, 'http://www.pobijunior.com/img/manukyaru.png', 'img');
insert into file(board_id,  file_dir, file_type)
Values(1, 'http://www.pobijunior.com/img/1583773181.jpg', 'img');

select * from user;
select * from board;
select * from file;
select * from sessions;
delete from board where board_id > 2;
truncate table sessions;
truncate table board;
truncate table file;