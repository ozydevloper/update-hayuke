"use server";
import "dotenv/config";

export async function fetchAllBiaya() {
  const res = await fetch(`${process.env.BASE_API_URL}biaya`);
  const res_json = await res.json();
  return res_json;
}
