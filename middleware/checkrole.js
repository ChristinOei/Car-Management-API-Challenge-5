module.exports = (role) => {
  return async function (req, res, next) {
    if (req.user.role !== role) {
      res.status(403).json({
        status: "failed",
        message: `Tidak berhak untuk akses karena bukan ${role}`,
      });
    } else {
      next();
    }
  };
};
