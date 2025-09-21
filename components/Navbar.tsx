import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";
import { LogOut, Plus } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <div className="flex items-center gap-5">
              <Link href={"/startup/create"}>
                <Plus className="mb-1 text-red-500 size-6 sm:hidden" />
                <span className="max-sm:hidden">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">
                  <LogOut className="text-red-500 size-6 sm:hidden" />
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar>
                  <AvatarImage
                    src={`${session?.user?.image}`}
                    alt={`${session?.user?.name}`}
                  />
                </Avatar>
              </Link>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
