export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  size: "large" | "medium" | "small";
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface Club {
  id: string;
  name: string;
  leader: string;
  link: string;
  image: string;
  mapImage: string;
}

export interface PacerPost {
  id: string;
  author: string;
  avatar: string;
  date: string;
  text: string;
  mapImage: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface Order {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  date: string;
  executor: string;
  rating: number;
}

export interface Application {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  date: string;
  executor: string;
  rating: number;
}

export interface Publication {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  date: string;
  views: string;
  likes: number;
}

export interface ErrorPageData {
  code: number;
  title: string;
  description: string;
  action: string;
}

export const sideNavItems: NavItem[] = [
  { label: "Найти пейсера", href: "/pacers", icon: "search" },
  { label: "Рассказать о маршруте", href: "/route", icon: "map" },
  { label: "Для организаторов", href: "/organizer", icon: "flag" },
  { label: "Лента новостей", href: "/feed", icon: "newspaper" },
  { label: "Клубы и локации для тренировок", href: "/clubs", icon: "building" },
  { label: "Всё для бега", href: "/gear", icon: "shopping" },
  { label: "Здоровье бегуна", href: "/health", icon: "heart" },
  { label: "Российские и зарубежные старты", href: "/events", icon: "calendar" },
  { label: "О проекте", href: "/about", icon: "info" },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Я снова в строю — берегите ваши марафоны!",
    image: "/images/article1.jpg",
    category: "Новости",
    date: "2024-03-15",
    size: "large",
  },
  {
    id: "2",
    title: "Я снова в строю — берегите ваши марафоны!",
    image: "/images/article2.jpg",
    category: "Тренировки",
    date: "2024-03-14",
    size: "medium",
  },
  {
    id: "3",
    title: "Я снова в строю — берегите ваши марафоны!",
    image: "/images/article3.jpg",
    category: "Результаты",
    date: "2024-03-13",
    size: "medium",
  },
  {
    id: "4",
    title: "«Хорошо, что есть марафон»: бегуны недовольны революцией IAAF",
    image: "/images/article4.jpg",
    category: "Аналитика",
    date: "2024-03-12",
    size: "small",
  },
  {
    id: "5",
    title: "Я снова в строю — берегите ваши марафоны!",
    image: "/images/article5.jpg",
    category: "Новости",
    date: "2024-03-11",
    size: "medium",
  },
];

export const cities: FilterOption[] = [
  { label: "Москва", value: "moscow" },
  { label: "Санкт-Петербург", value: "spb" },
  { label: "Казань", value: "kazan" },
  { label: "Новосибирск", value: "novosibirsk" },
  { label: "Екатеринбург", value: "ekb" },
  { label: "Сочи", value: "sochi" },
];

export const distances: FilterOption[] = [
  { label: "5 км", value: "5" },
  { label: "10 км", value: "10" },
  { label: "Полумарафон", value: "21" },
  { label: "Марафон", value: "42" },
  { label: "Ультра", value: "ultra" },
];

export const paceRanges: FilterOption[] = [
  { label: "3:30 – 4:00", value: "3.5-4" },
  { label: "4:00 – 4:30", value: "4-4.5" },
  { label: "4:30 – 5:00", value: "4.5-5" },
  { label: "5:00 – 5:30", value: "5-5.5" },
  { label: "5:30 – 6:00", value: "5.5-6" },
  { label: "6:00+", value: "6+" },
];

export const experienceLevels: FilterOption[] = [
  { label: "Начинающий", value: "beginner" },
  { label: "Любитель", value: "amateur" },
  { label: "Продвинутый", value: "advanced" },
];

export const eventTypes: FilterOption[] = [
  { label: "шоссейный", value: "road" },
  { label: "Кросс", value: "cross" },
  { label: "Горный", value: "mountain" },
  { label: "Суточный", value: "daily" },
];

// Clubs & locations mock data
export const clubs: Club[] = [
  {
    id: "1",
    name: "Wolf Pack",
    leader: "Степан Киселева",
    link: "Ссылка на сайт",
    image: "/images/club1.jpg",
    mapImage: "/images/map1.jpg",
  },
  {
    id: "2",
    name: "Thunder Gang",
    leader: "Александр Стрелков",
    link: "Ссылка на сайт",
    image: "/images/club2.jpg",
    mapImage: "/images/map2.jpg",
  },
  {
    id: "3",
    name: "Die Hard Run",
    leader: "Продвинутые любители",
    link: "Ссылка на сайт",
    image: "/images/club3.jpg",
    mapImage: "/images/map3.jpg",
  },
];

// Pacer activity feed
export const pacerPosts: PacerPost[] = [
  {
    id: "1",
    author: "Максим Кобрин",
    avatar: "/images/avatar1.jpg",
    date: "25 минут назад",
    text: "Я снова в строю — берегите ваши марафоны!",
    mapImage: "/images/route-map1.jpg",
    likes: 12,
    comments: 3,
    shares: 1,
  },
  {
    id: "2",
    author: "Максим Кобрин",
    avatar: "/images/avatar1.jpg",
    date: "25 минут назад",
    text: "Я снова в строю — берегите ваши марафоны!",
    mapImage: "/images/route-map2.jpg",
    likes: 8,
    comments: 2,
    shares: 0,
  },
  {
    id: "3",
    author: "Максим Кобрин",
    avatar: "/images/avatar1.jpg",
    date: "25 минут назад",
    text: "Я снова в строю — берегите ваши марафоны!",
    mapImage: "/images/route-map3.jpg",
    likes: 15,
    comments: 5,
    shares: 2,
  },
];

// Personal cabinet — orders
export const orders: Order[] = [
  {
    id: "1",
    name: "Поиск пейсера",
    status: "На рассмотрении",
    statusColor: "text-yellow-600",
    date: "18.05.2025",
    executor: "Зарубы М.",
    rating: 5,
  },
  {
    id: "2",
    name: "Поиск пейсера",
    status: "В работе",
    statusColor: "text-blue-600",
    date: "18.05.2025",
    executor: "Зарубы М.",
    rating: 5,
  },
  {
    id: "3",
    name: "Поиск напарника",
    status: "Выполнено",
    statusColor: "text-green-600",
    date: "18.05.2025",
    executor: "Павел С.",
    rating: 4,
  },
  {
    id: "4",
    name: "Поиск лучшего друга",
    status: "Завершено",
    statusColor: "text-green-700",
    date: "18.05.2025",
    executor: "Исполнитель",
    rating: 3,
  },
  {
    id: "5",
    name: "Поиск лучшего друга",
    status: "Отклонено",
    statusColor: "text-red-600",
    date: "18.05.2025",
    executor: "Исполнитель",
    rating: 3,
  },
];

// Personal cabinet — applications (same structure as orders)
export const applications: Application[] = [
  {
    id: "1",
    name: "Поиск пейсера",
    status: "На рассмотрении",
    statusColor: "text-yellow-600",
    date: "18.05.2025",
    executor: "Зарубы М.",
    rating: 5,
  },
  {
    id: "2",
    name: "Поиск пейсера",
    status: "В работе",
    statusColor: "text-blue-600",
    date: "18.05.2025",
    executor: "Зарубы М.",
    rating: 5,
  },
  {
    id: "3",
    name: "Поиск напарника",
    status: "Выполнено",
    statusColor: "text-green-600",
    date: "18.05.2025",
    executor: "Павел С.",
    rating: 4,
  },
  {
    id: "4",
    name: "Поиск лучшего друга",
    status: "Завершено",
    statusColor: "text-green-700",
    date: "18.05.2025",
    executor: "Исполнитель",
    rating: 3,
  },
  {
    id: "5",
    name: "Поиск лучшего друга",
    status: "Отклонено",
    statusColor: "text-red-600",
    date: "18.05.2025",
    executor: "Исполнитель",
    rating: 3,
  },
];

// Personal cabinet — publications
export const publications: Publication[] = [
  {
    id: "1",
    title: "Как выбирать пейсера в 11 километрах?",
    status: "Опубликовано",
    statusColor: "text-green-600",
    date: "18.05.2025",
    views: "14555",
    likes: 15,
  },
  {
    id: "2",
    title: "Почему на ДCТОР нам пробежать в Барнауле",
    status: "На модерации",
    statusColor: "text-yellow-600",
    date: "18.05.2025",
    views: "14555",
    likes: 15,
  },
  {
    id: "3",
    title: "Я перестал бегать и мне стало лучше",
    status: "Отклонено",
    statusColor: "text-red-600",
    date: "18.05.2025",
    views: "14555",
    likes: 15,
  },
];

// Error pages data
export const errorPages: ErrorPageData[] = [
  { code: 400, title: "Упс... Ошибка 400", description: "Что-то пошло не так с запросом.\nКажется, мы запутались в ваших данных. Давайте попробуем ещё раз.", action: "Обновите, пожалуйста, страницу" },
  { code: 401, title: "Упс... Ошибка 401", description: "Похоже, вы не авторизованы.\nЧтобы продолжить, войдите в свой аккаунт.", action: "Войдите в аккаунт" },
  { code: 403, title: "Упс... Ошибка 403", description: "Доступ запрещён.\nУ вас нет прав для просмотра этой страницы.", action: "Вернитесь на главную" },
  { code: 404, title: "Упс... Ошибка 404", description: "Этой страницы здесь нет.\nМы всё обыскали, но ничего не нашли.\nВозможно, ссылка устарела или была набрана с ошибкой.", action: "На главную" },
  { code: 405, title: "Упс... Ошибка 405", description: "Метод не поддерживается.\nСервер не может обработать запрос таким способом.", action: "Попробуйте другой способ" },
  { code: 408, title: "Упс... Ошибка 408", description: "Время ожидания истекло.\nСервер не дождался вашего запроса.", action: "Попробуйте ещё раз" },
  { code: 409, title: "Упс... Ошибка 409", description: "Конфликт данных.\nПохоже, данные были изменены кем-то другим.", action: "Обновите страницу" },
  { code: 410, title: "Упс... Ошибка 410", description: "Ресурс удалён.\nЭта страница больше не существует.", action: "Вернитесь на главную" },
  { code: 413, title: "Упс... Ошибка 413", description: "Файл слишком большой.\nПопробуйте загрузить файл поменьше.", action: "Уменьшите файл" },
  { code: 414, title: "Упс... Ошибка 414", description: "Слишком длинный URL.\nАдрес страницы превышает допустимую длину.", action: "Сократите адрес" },
  { code: 429, title: "Упс... Ошибка 429", description: "Слишком много запросов.\nВы слишком часто обращаетесь к серверу.", action: "Подождите немного" },
  { code: 451, title: "Упс... Ошибка 451", description: "Доступ ограничен.\nСодержимое недоступно по юридическим причинам.", action: "Вернитесь на главную" },
  { code: 500, title: "Упс... Ошибка 500", description: "Мы кое-что сломали.\nНа сервере случилась внутренняя ошибка.\nМы уже чиним, а вы можете попробовать чуть позже.", action: "На главную" },
  { code: 502, title: "Упс... Ошибка 502", description: "Плохой шлюз.\nСервер получил недопустимый ответ.", action: "Попробуйте позже" },
  { code: 503, title: "Упс... Ошибка 503", description: "Сервис недоступен.\nМы проводим технические работы.", action: "Попробуйте позже" },
  { code: 504, title: "Упс... Ошибка 504", description: "Шлюз не отвечает.\nСервер не получил ответ вовремя.", action: "Попробуйте позже" },
];
