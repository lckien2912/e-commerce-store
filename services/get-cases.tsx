import { Case } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cases`;

const getCases = async (): Promise<Case[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCases;
