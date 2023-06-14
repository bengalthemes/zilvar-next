import { Brand } from "@/types";
import Image from "next/image";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer w-28 group hover:opacity-80 relative">
        <Image
          className="scale-[0.80] transition-all group-hover:scale-100 dark:invert object-contain"
          alt={`${brand.name}`}
          fill
          src={brand.logo}
        />
      </div>
    </div>
  );
}
