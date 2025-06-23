export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  module: string;
  order: number;
}

export const sqlVideos: Video[] = [
  {
    id: "sql-intro",
    title: "Introduction to SQL",
    description: "Learn what SQL is, why it's important, and how it's used in modern data management.",
    duration: "15:30",
    thumbnail: "/assets/images/thumbnails/sql-intro.jpg",
    videoUrl: "/assets/videos/bg_hero.mp4",
    module: "Manipulation",
    order: 1
  },
  {
    id: "sql-select",
    title: "SELECT Statements",
    description: "Master the fundamental SELECT statement to retrieve data from databases.",
    duration: "22:15",
    thumbnail: "/assets/images/thumbnails/sql-select.jpg",
    videoUrl: "/assets/videos/sql-select.mp4",
    module: "Manipulation",
    order: 2
  },
  {
    id: "sql-where",
    title: "WHERE Clauses",
    description: "Learn to filter data using WHERE clauses and comparison operators.",
    duration: "18:45",
    thumbnail: "/assets/images/thumbnails/sql-where.jpg",
    videoUrl: "/assets/videos/sql-where.mp4",
    module: "Manipulation",
    order: 3
  },
  {
    id: "sql-create-insert",
    title: "CREATE and INSERT Statements",
    description: "Create tables and insert data into your database with hands-on examples.",
    duration: "25:10",
    thumbnail: "/assets/images/thumbnails/sql-create.jpg",
    videoUrl: "/assets/videos/sql-create-insert.mp4",
    module: "Manipulation",
    order: 4,
    isCompleted: true
  },
  {
    id: "sql-update-delete",
    title: "UPDATE and DELETE",
    description: "Modify and remove data from your database safely and efficiently.",
    duration: "20:30",
    thumbnail: "/assets/images/thumbnails/sql-update.jpg",
    videoUrl: "/assets/videos/sql-update-delete.mp4",
    module: "Manipulation",
    order: 5
  },
  {
    id: "sql-aggregate",
    title: "Aggregate Functions",
    description: "Use COUNT, SUM, AVG, MIN, and MAX to analyze your data.",
    duration: "28:20",
    thumbnail: "/assets/images/thumbnails/sql-aggregate.jpg",
    videoUrl: "/assets/videos/sql-aggregate.mp4",
    module: "Queries",
    order: 6
  },
  {
    id: "sql-joins",
    title: "JOIN Operations",
    description: "Combine data from multiple tables using different types of JOINs.",
    duration: "35:15",
    thumbnail: "/assets/images/thumbnails/sql-joins.jpg",
    videoUrl: "/assets/videos/sql-joins.mp4",
    module: "Queries",
    order: 7
  },
  {
    id: "sql-subqueries",
    title: "Subqueries",
    description: "Write complex queries using nested SELECT statements.",
    duration: "32:45",
    thumbnail: "/assets/images/thumbnails/sql-subqueries.jpg",
    videoUrl: "/assets/videos/sql-subqueries.mp4",
    module: "Queries",
    order: 8
  },
  {
    id: "sql-case",
    title: "CASE Statements",
    description: "Create conditional logic in your SQL queries using CASE statements.",
    duration: "19:30",
    thumbnail: "/assets/images/thumbnails/sql-case.jpg",
    videoUrl: "/assets/videos/sql-case.mp4",
    module: "Queries",
    order: 9
  },
  {
    id: "sql-design",
    title: "Database Design",
    description: "Learn database normalization and design principles.",
    duration: "40:20",
    thumbnail: "/assets/images/thumbnails/sql-design.jpg",
    videoUrl: "/assets/videos/sql-design.mp4",
    module: "Database Management",
    order: 10,
    isLocked: true
  },
  {
    id: "sql-indexes",
    title: "Indexes and Optimization",
    description: "Optimize your database performance with proper indexing strategies.",
    duration: "26:15",
    thumbnail: "/assets/images/thumbnails/sql-indexes.jpg",
    videoUrl: "/assets/videos/sql-indexes.mp4",
    module: "Database Management",
    order: 11,
    isLocked: true
  },
  {
    id: "sql-transactions",
    title: "Transactions",
    description: "Ensure data integrity with ACID transactions and proper error handling.",
    duration: "30:45",
    thumbnail: "/assets/images/thumbnails/sql-transactions.jpg",
    videoUrl: "/assets/videos/sql-transactions.mp4",
    module: "Database Management",
    order: 12,
    isLocked: true
  }
];

export const getVideosByModule = (moduleName: string): Video[] => {
  return sqlVideos.filter(video => video.module === moduleName);
};

export const getVideoById = (id: string): Video | undefined => {
  return sqlVideos.find(video => video.id === id);
};

export const getNextVideo = (currentVideoId: string): Video | undefined => {
  const currentVideo = getVideoById(currentVideoId);
  if (!currentVideo) return undefined;
  
  return sqlVideos.find(video => video.order === currentVideo.order + 1);
};

export const getPreviousVideo = (currentVideoId: string): Video | undefined => {
  const currentVideo = getVideoById(currentVideoId);
  if (!currentVideo) return undefined;
  
  return sqlVideos.find(video => video.order === currentVideo.order - 1);
}; 