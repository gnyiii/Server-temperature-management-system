import express from "express";
import routes from "../routes";
import {
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controller/userController";
import { uploadAvatar, onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// Ediit Profile
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

// Change password
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

export default userRouter;
