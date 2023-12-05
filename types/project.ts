type Image = {
  id: string;
  url: string;
};

type Summary = {
  text: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  projectType: string;
  skills: string[];
  images: Image[];
  summary: Summary;
};

export default Project;
