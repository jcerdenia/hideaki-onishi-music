import { createClient } from "next-sanity";

const client = createClient({
  projectId: "99izudq9",
  dataset: "production",
  apiVersion: "2022-06-30",
  useCdn: true,
});

export default client;
