import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

type StartupCardType = {
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

const StartupCard = async ({ post }: { post: StartupCardType }) => {
  const {
    _id,
    createdAt,
    views,
    author: { id: author_id, name, image: author_image },
    image,
    title,
    description,
    category,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="gap-5 mt-5 flex-between">
        <div className="flex-1">
          <div>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </div>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <div>
          <Image
            src={`${author_image}`}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          alt="placeholder"
          width={400}
          height={200}
          className="startup-card_img"
        />
      </Link>

      <div className="gap-3 mt-5 flex-between">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
