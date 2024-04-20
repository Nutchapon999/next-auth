'use client';

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({
  href,
  label
}: BackButtonProps) => {
  return (
    <Button
      className="w-full font-normal"
      variant={'link'}
      size={'sm'}
    >
      <Link href={href}>
        { label }
      </Link>
    </Button>
  )
}