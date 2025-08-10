// Switch to 'user-account' database
db = db.getSiblingDB("user-account");

// Create the 'users' collection by inserting a dummy document (this creates DB + collection)
db.users.insertOne({ initialized: true });

// Create a user 'appuser' with readWrite role on 'user-account' DB
db.createUser({
  user: "appuser",
  pwd: "your_password_here",
  roles: [{ role: "readWrite", db: "user-account" }]
});
