"use server";
import "dotenv/config";
const ENDPOINT = `${process.env.BASE_API_URL}agenda`;

export async function fetchAllAgenda() {
  const res = await fetch(`${ENDPOINT}`);
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewAgenda(newAgenda) {
  return await fetch(`${ENDPOINT}`, {
    method: "POST",
    body: newAgenda,
  }).then((e) => e.json());
}
