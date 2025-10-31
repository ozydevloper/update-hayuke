"use server";
import "dotenv/config";

const ENDPOINT = `${process.env.BASE_API_URL}topik`;

export async function fetchAllTopik() {
  const res = await fetch(ENDPOINT);
  const res_json = await res.json();
  return res_json;
}
export async function mutationNewTopik(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
