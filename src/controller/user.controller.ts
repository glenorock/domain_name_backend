import db from "../config/db.config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const User = db.user;

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (user === null || user === undefined) {
      return res.json({ auth:false });
    }
    const auth = await bcrypt.compare(password, user.getDataValue("password"));
    if (auth) {
      const userId = user.getDataValue("id");
      const isAdmin = user.getDataValue("isAdmin")
      const token = jwt.sign(userId, "sercretKey");
      return res.json({
        auth,
        userId,
        token,
        isAdmin
      });
    }
    return res.json({ auth });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function logout(req: Request, res: Response) {
  try {
    const data = await User.findAll();
    return res.json(data);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function activate(req: Request, res: Response) {
  try {
    const {id} = req.params
    const data = await User.update({
      active: true
    },{
      where: {
        id
      }
    })
    return res.json(data);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function deactivate(req: Request, res: Response) {
  try {
    const {id} = req.params
    const data = await User.update({
      active: false
    },{
      where: {
        id
      }
    })
    return res.json(data);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await User.findAll({
      include: {
        all: true
      },
      attributes: {
        exclude: ['password']
      }
    });
    return res.json(data);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}