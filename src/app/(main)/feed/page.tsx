"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const articles = [
  {
    id: 1,
    title: "Я снова в строю – берегите ваши марафоны!!",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    likes: 16,
    comments: 3,
  },
  {
    id: 2,
    title: "Я снова в строю – берегите ваши марафоны!!",
    image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
    likes: 16,
    comments: 3,
  },
  {
    id: 3,
    title: "«Хорошо, что есть марафон»: бегуны недовольны революцией IAAF",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    likes: 16,
    comments: 3,
  },
  {
    id: 4,
    title: "Как подготовиться к первому марафону: советы от профессионалов",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba3b5f5f?w=800&q=80",
    likes: 24,
    comments: 7,
  },
  {
    id: 5,
    title: "Топ-10 беговых маршрутов Москвы для тренировок",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    likes: 32,
    comments: 12,
  },
];

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="cursor-pointer group">
      {/* Title */}
      <p className="text-sm text-text-primary mb-2 leading-snug">
        {article.title}
      </p>

      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pb-4 border-b border-border-light mb-4">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1.5 text-sm transition-colors"
        >
          {liked ? (
            <HeartSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5 text-text-tertiary" />
          )}
          <span className={liked ? "text-red-500 font-medium" : "text-text-tertiary"}>
            {liked ? article.likes + 1 : article.likes}
          </span>
        </button>
        <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          <span>{article.comments}</span>
        </button>
      </div>
    </div>
  );
}

export default function FeedPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 lg:p-6">
      {/* Search */}
      <div className="relative mb-6">
        <div className="flex items-center border border-border rounded-lg bg-surface px-3 py-2.5">
          <input
            type="text"
            placeholder="Поиск по статьям"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-text-tertiary ml-2" />
        </div>
      </div>

      {/* Articles feed */}
      <div>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
