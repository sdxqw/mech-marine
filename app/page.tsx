import { HomePageContent } from "@/components/home-page-content";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  return <HomePageContent />;
}
