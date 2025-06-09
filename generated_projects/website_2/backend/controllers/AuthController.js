const prisma = require('../prisma/client');
const jwt = require('../utils/jwt');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).send('Email or password incorrect.');
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send('Email or password incorrect.');
    }

    // Generate JWT token
    const token = jwt.generateToken(user);

    res.send({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Internal server error.');
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    // Generate JWT token
    const token = jwt.generateToken(createdUser);

    res.send({ token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send('Internal server error.');
  }
};
