import Router from "express";
import {
  Intro,
  About,
  Projects,
  GetInTouch,
} from "../models/portfolio.model.js";

const router = Router();

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Projects.find();
    const GetTouch = await GetInTouch.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      GetInTouch: GetTouch,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
