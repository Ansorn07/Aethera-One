"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SignInButtonProps {
  className?: string;
}

export function SignInButton({ className }: SignInButtonProps) {
  return (
    <Button asChild className={className}>
      <Link href="/login">Sign In</Link>
    </Button>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6c4e7886620c039c0a0d79987b939e6aef92bf4a
