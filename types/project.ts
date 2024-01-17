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
  position: string;
  startDate: string;
  endDate: string;
};

export default Project;
