"use server";
import "dotenv/config";
import { generateSignature } from "../signature";
const ENDPOINT = `${process.env.BASE_API_URL}agenda`;

export async function fetchAllAgenda() {
  const signature = generateSignature();
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature,
    },
  }).then((e) => e.json());
}

export async function mutationDeleteAgenda(id) {
  const signature = generateSignature();
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature,
    },
    method: "DELETE",
    body: JSON.stringify(id),
  }).then((e) => e.json());
}

export async function mutationNewAgenda(newAgenda) {
  const signature = generateSignature();
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature,
    },
    method: "POST",
    body: newAgenda,
  }).then((e) => e.json());
}

export async function mutationEditAgenda(editAgenda) {
  const signature = generateSignature();
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature,
    },
    method: "PUT",
    body: JSON.stringify(editAgenda),
  }).then((e) => e.json());
}
