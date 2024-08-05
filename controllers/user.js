const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cookieToken = require("../../utils/cookieToken");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Please provide all fields");
    }

    // console.log("Creating user with data:", { name, email, password });

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // console.log("User created successfully:", user);

    cookieToken(user, res);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: error.message });
  }
};
