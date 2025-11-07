"use server";
import "dotenv/config";
import { generateSignature } from "../signature";


const ENDPOINT = `${process.env.BASE_API_URL}kota`;

export async function fetchAllKota() {
  const signature = generateSignature()
  const res=  await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature
    }})
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewKota(req) {
  const signature = generateSignature()
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature
    },
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}

export async function mutationDeleteKota(req) {
  const signature = generateSignature()
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature
    },
    method: "DELETE",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
export async function mutationUpdateKota(req) {
  const signature = generateSignature()
  return await fetch(`${ENDPOINT}`, {
    headers: {
      sig: signature
    },
    method: "PUT",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
