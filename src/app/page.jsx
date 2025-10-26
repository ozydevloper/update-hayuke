"use client";
import { Button } from "@radix-ui/themes";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button variant="soft" onClick={() => setCount(count + 1)}>
        Tambah
      </Button>
      <h1>{count}</h1>
      <Button variant="soft" onClick={() => setCount(count - 1)}>
        Kurang
      </Button>
    </>
  );
}
