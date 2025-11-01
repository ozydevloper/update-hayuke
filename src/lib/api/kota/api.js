"use server";
import "dotenv/config";

export async function fetchAllKota() {
  const res = await fetch(`${process.env.BASE_API_URL}kota`);
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewKota(req) {
  return await fetch(`${process.env.BASE_API_URL}kota`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
