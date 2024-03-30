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

CREATE TABLE Car_Listings (
    CarID               INT NOT NULL AUTO_INCREMENT,
    RenterId            INT,
    RenteeId            INT NOT NULL,
    Model               VARCHAR(20) NOT NULL,
    CarYear             VARCHAR(4) NOT NULL,
    Mileage             INT NOT NULL,
    AvailCalendar       DATE,
    BookedUntil         DATE,
    PickUpLocation      VARCHAR(50) NOT NULL,
    Price               DECIMAL(15,2),
    IsAvailable         BOOLEAN,
    Balance             DECIMAL(15,2),
    PRIMARY KEY         (CarID)
);

ALTER TABLE Security_Questions ADD CONSTRAINT FK_SecurityQuestions_Users FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Security_Questions ADD CONSTRAINT FK_SecurityQuestions_Questions FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID);
ALTER TABLE Car_Listings ADD CONSTRAINT FK_CarListings_RenterUsers FOREIGN KEY (RenterId) REFERENCES Users(UserID);
ALTER TABLE Car_Listings ADD CONSTRAINT FK_CarListings_RenteeUsers FOREIGN KEY (RenteeId) REFERENCES Users(UserID);
