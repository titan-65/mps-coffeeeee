import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MPS Coffee - Where Code Meets Coffee" },
    { name: "description", content: "The perfect blend of premium coffee and coding atmosphere. Fuel your creativity, debug your day, and deploy your dreams at MPS Coffee." },
  ];
}

export default function Home() {
  return <Welcome />;
}
