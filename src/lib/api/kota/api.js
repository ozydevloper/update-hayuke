"use server";
import "dotenv/config";

export async function fetchAllKota() {
  const res = await fetch(`${process.env.BASE_API_URL}kota`);
  const res_json = await res.json();
  return res_json;
}
