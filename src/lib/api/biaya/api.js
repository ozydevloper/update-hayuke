"use server";
import "dotenv/config";

const ENDPOINT = `${process.env.BASE_API_URL}biaya`;

export async function fetchAllBiaya() {
  const res = await fetch(`${ENDPOINT}`);
  const res_json = await res.json();
  return res_json;
}
export async function mutationNewBiaya(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}

export async function mutationDeleteBiaya(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "DELETE",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
export async function mutationUpdateBiaya(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "PUT",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
