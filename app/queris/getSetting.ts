import { Settings } from "../types/setting";

export default async function getSettings(): Promise<Settings> {
  const res = await fetch("http://localhost:2000/settings");
  const settings = await res.json();
  return settings;
}