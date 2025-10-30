"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      className="font-bold text-xl text-center text-primary"
      onClick={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    >
      Hayuke
    </Button>
  );
};
export default Logo;
