"use server";
import "dotenv/config";

export async function fetchAllAgenda() {
  const res = await fetch(`${process.env.BASE_API_URL}agenda`);
  const res_json = await res.json();
  return res_json;
}
