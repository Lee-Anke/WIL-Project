-- 1. Insert a New User (use placeholders for dynamic insertion)
-- Replace 'first_name_value', 'last_name_value', 'email_value', 'hashed_password_value' with your own values.
INSERT INTO users (first_name, last_name, email, password) 
VALUES ('first_name_value', 'last_name_value', 'email_value', 'hashed_password_value');

-- Example:
-- INSERT INTO users (first_name, last_name, email, password) 
-- VALUES ('John', 'Doe', 'john.doe@example.com', 'hashed_password_here');

-- 2. Select a User by Email
-- Use this to retrieve a user by their email address.
-- Replace 'email_value' with the desired email.
SELECT * FROM users WHERE email = 'email_value';

-- Example:
-- SELECT * FROM users WHERE email = 'john.doe@example.com';

-- 3. Check for Existing Email
-- Useful during registration to see if an email is already registered.
-- Replace 'email_value' with the desired email.
SELECT * FROM users WHERE email = 'email_value';

-- Example:
-- SELECT * FROM users WHERE email = 'john.doe@example.com';

-- 4. Update User Password
-- Use this to update a user's password.
-- Replace 'new_hashed_password_value' and 'email_value' with your values.
UPDATE users 
SET password = 'new_hashed_password_value' 
WHERE email = 'email_value';

-- Example:
-- UPDATE users 
-- SET password = 'new_hashed_password_here' 
-- WHERE email = 'john.doe@example.com';

-- 5. Delete a User
-- Use this to delete a user based on their email.
-- Replace 'email_value' with the desired email.
DELETE FROM users WHERE email = 'email_value';

-- Example:
-- DELETE FROM users WHERE email = 'john.doe@example.com';

-- 6. Select All Users
-- Use this query to retrieve all user records (for admin purposes).
SELECT * FROM users;

-- Example:
-- This retrieves all user records without needing any modifications.
