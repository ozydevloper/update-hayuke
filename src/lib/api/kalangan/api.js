"use server";
import "dotenv/config";

const ENDPOINT = `${process.env.BASE_API_URL}kalangan`;

export async function fetchAllKalangan() {
  const res = await fetch(`${ENDPOINT}`);
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewKalangan(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}

export async function mutationDeleteKalangan(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "DELETE",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
export async function mutationUpdateKalangan(req) {
  return await fetch(`${ENDPOINT}`, {
    method: "PUT",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
