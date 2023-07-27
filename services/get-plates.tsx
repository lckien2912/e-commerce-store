import { Plate } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/plates`;

const getPlates = async (): Promise<Plate[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getPlates;
