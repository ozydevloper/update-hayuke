"use server";
import "dotenv/config";

export async function fetchAllKategori() {
  const res = await fetch(`${process.env.BASE_API_URL}kategori`);
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewKategori(req) {
  return await fetch(`${process.env.BASE_API_URL}kategori`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}

export async function mutationDeleteKategori(req) {
  return await fetch(`${process.env.BASE_API_URL}kategori`, {
    method: "DELETE",
    body: JSON.stringify(req),
  }).then((e) => e.json());
}
