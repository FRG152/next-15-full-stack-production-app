import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/query";
import StartupCard from "./StartupCard";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

type StartupType = {
  _id: string;
  createdAt: string;
  views: number;
  author: {
    id: string;
    name: string;
    image: string;
  };
  image: string;
  title: string;
  description: string;
  category: string;
};

const UserStartups = async ({ id }: { id: string }) => {
  const startups: StartupType[] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {
    id,
  });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupType) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((_, i: number) => (
      <li key={cn("skeleton", i)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default UserStartups;
