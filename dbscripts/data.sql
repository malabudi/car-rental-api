USE driveshare;

INSERT INTO users (Email, Password)
VALUES
('testemail@yahoo.com', 'password'),
('driveshareuser@gmail.com', 'ilikecars');

INSERT INTO questions (Question)
VALUES 
('In what city were you born?'),
('What is the name of your favorite pet?'),
('What high school did you attend?'),
('What was the name of your elementary school?'),
('What was your favorite food as a child?'),
('What color do you like the most?'),
('What year did you enter college?'),
('What was the first concert you attended?'),
('What was your childhood nickname?');

INSERT INTO security_questions (UserID, QuestionID, Answer)
VALUES
(1, 1, 'Austin'),
(1, 6, 'Black'),
(1, 9, 'Mickey'),
(2, 7, '2020'),
(2, 4, 'McDonalds'),
(2, 5, 'Dolma');

INSERT INTO car_listings (RenterId, RenteeId, Model, CarYear, Mileage, AvailCalendar, BookedUntil, PickupLocation, Price, IsAvailable, Balance)
VALUES
(NULL, 1, 'Ford', 2012, 102384, '2023-10-18', NULL, 'Detroit, Michigan', 4999.99, true, NULL),
(NULL, 2, 'Buick', 2023, 75896, '2024-04-08', NULL, 'Austin, Texas', 6499.98, true, NULL);