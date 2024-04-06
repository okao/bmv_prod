"use client"
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import AdBanner from "@/components/common/ad-banner"
import HomeGallery from "@/components/home/home-gallery"
import HomePage from "@/components/pages/home.page"
import { useEffect, useState } from "react"
import { getHomeArticles } from '@/graph/apollo';


export default function LandingPage() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    const data = await getHomeArticles();
    setArticles(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HomePage articles={articles} loading={loading} />
    </div>
  )
}