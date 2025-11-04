"use client";

import { Share } from "@/components/share";
import { dragons } from "@/lib/dragons";

export default function DragonResult({
  dragon,
}: {
  dragon: typeof dragons[0];
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src={dragon.image}
        alt={dragon.name}
        width={200}
        height={200}
        className="rounded"
      />
      <h2 className="text-2xl font-bold">{dragon.name}</h2>
      <p className="text-center">{dragon.description}</p>
      <Share text={`${dragon.name} is my dragon!`} />
    </div>
  );
}
