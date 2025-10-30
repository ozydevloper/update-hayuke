"use server";
import "dotenv/config";

export async function fetchAllKategori() {
  const res = await fetch(`${process.env.BASE_API_URL}kategori`);
  const res_json = await res.json();
  return res_json;
}
