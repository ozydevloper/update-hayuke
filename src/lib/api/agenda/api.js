"use server";
import "dotenv/config";
const ENDPOINT = `${process.env.BASE_API_URL}agenda`;

export async function fetchAllAgenda() {
  return await fetch(`${ENDPOINT}`).then((e) => e.json());
}

export async function mutationDeleteAgenda(id) {
  return await fetch(`${ENDPOINT}`, {
    method: "DELETE",
    body: JSON.stringify(id),
  }).then((e) => e.json());
}

export async function mutationNewAgenda(newAgenda) {
  return await fetch(`${ENDPOINT}`, {
    method: "POST",
    body: newAgenda,
  }).then((e) => e.json());
}
