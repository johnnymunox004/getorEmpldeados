import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { collection } from '../models/userModels.js';
import dotenv from 'dotenv';

dotenv.config();

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const existingUser = await collection.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: existingUser._id, rol: existingUser.rol }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function register(req, res) {
  const {
    nombre,
    email,
    password,
    rol = 'Usuario', // Default role if not provided
    edad,
    dept,
    sexo,
    file,
    telefono,
    process,
  } = req.body;

  try {
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      nombre,
      email,
      password: hashedPassword,
      rol,
      edad,
      dept,
      sexo,
      file,
      telefono,
      process,
      date_create: new Date(),
    };

    const result = await collection.insertOne(newUser);
    console.log("User created:", result);

    const token = jwt.sign({ id: newUser._id, rol: newUser.rol }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(`Error registering: ${error}`);
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
}

async function logoutUser(req, res) {
  res.clearCookie('token');
  res.redirect('/');
}

export { login, register, logoutUser };
