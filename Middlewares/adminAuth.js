const adminAuth = (req, res, next) => {
  const token = "abc";
  let isAdmin = "abc";
  if (isAdmin === token) {
    next();
  } else {
    res.send("You are not ADMIN");
  }
};

const userAuth = (req, res, next) => {
  const token = "abc";
  let isAdmin = "abc";
  if (isAdmin === token) {
    next();
  } else {
    res.send("You are not USER");
  }
};

module.exports = { adminAuth, userAuth };
