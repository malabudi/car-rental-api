DROP SCHEMA IF EXISTS driveshare;

CREATE SCHEMA driveshare;
USE driveshare;

CREATE TABLE Users (
    UserID          INT NOT NULL AUTO_INCREMENT,
    Email           VARCHAR(32) NOT NULL,
    Password        VARCHAR(32) NOT NULL,
    PRIMARY KEY     (UserID)
);

CREATE TABLE Security_Questions (
    AnswerID        INT NOT NULL AUTO_INCREMENT,
    UserID          INT NOT NULL,
    QuestionID      INT NOT NULL,
    Answer          VARCHAR(20) NOT NULL,
    PRIMARY KEY     (AnswerID)
);

CREATE TABLE Questions (
    QuestionID      INT NOT NULL AUTO_INCREMENT,
    Question        VARCHAR(150),
    PRIMARY KEY     (QuestionID)
);

ALTER TABLE Security_Questions ADD CONSTRAINT FK_SecurityQuestions_Users FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Security_Questions ADD CONSTRAINT FK_SecurityQuestions_Questions FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID);
