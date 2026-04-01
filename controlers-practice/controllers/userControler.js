// userControler.js , Create user
exports.createUser = (req, res) => {
  res.send("All User Created by Routerr.....");
};

// Register user
exports.registerUser = (req, res) => {
  res.send("User Registered by Routerr.....");
};
// Get, Update, Delete user by ID
exports.getUserById = (req, res) => {
  res.send(`User with ID: ${req.params.idd}`);
};

exports.updateUserById = (req, res) => {
  res.send(`Upadte User id:  ${req.params.idd}`);
};

exports.deleteUserById = (req, res) => {
  res.send(`User Id ${req.params.idd} deleted..`);
};
