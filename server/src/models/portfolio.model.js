import mongoose, { Schema } from "mongoose";

const IntroSchema = new Schema({
  welcomeText1: {
    type: String,
    required: true,
  },
  welcomeText2: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new Schema({
  lotteURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: { type: [String], required: true },
});

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: { type: [String], default: [] },
  algorithms: { type: [String], default: [] },
  description: {
    type: String,
    required: true,
  },
  githublink: {
    type: String,
    required: true,
  },
});

const getinTouchSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Intro = mongoose.model("intro", IntroSchema);
export const About = mongoose.model("about", aboutSchema);
export const Projects = mongoose.model("project", projectSchema);
export const GetInTouch = mongoose.model("getInTouch", getinTouchSchema);
