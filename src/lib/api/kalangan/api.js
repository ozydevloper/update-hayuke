"use server";
import "dotenv/config";

export async function fetchAllKalangan() {
  const res = await fetch(`${process.env.BASE_API_URL}kalangan`);
  const res_json = await res.json();
  return res_json;
}

export async function mutationNewKalangan(req) {
  return await fetch(`${process.env.BASE_API_URL}kalangan`, {
    method: "POST",
    body: req,
  });
}
