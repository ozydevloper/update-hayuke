"use server";
import "dotenv/config";

export async function fetchAllTopik() {
  const res = await fetch(`${process.env.BASE_API_URL}topik`);
  const res_json = await res.json();
  return res_json;
}
