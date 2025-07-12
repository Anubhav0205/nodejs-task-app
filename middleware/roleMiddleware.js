// middleware/roleMiddleware.js

const rbac = {
  "Super-admin": {
    add: ["User", "Task"],
    update: ["User", "Task"],
    delete: ["User", "Task"],
    view: ["User", "Task"]
  },
  "Admin": {
    add: ["User", "Task"],
    update: ["User", "Task"],
    delete: ["User", "Task"],
    view: ["User", "Task"]
  },
  "Manager": {
    add: ["Task"],
    update: ["Task"],
    delete: [],
    view: ["User", "Task"]
  }
};

const checkPermission = (action, resource) => {
  return (req, res, next) => {
    const role = req.user.role;
    if (!rbac[role] || !rbac[role][action]?.includes(resource)) {
      return res.status(403).json({ message: `Access denied for ${role} to ${action} ${resource}` });
    }
    next();
  };
};

module.exports = checkPermission;
