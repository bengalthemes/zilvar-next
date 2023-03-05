import Image from "next/image";

export default function BrandCard() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
        <Image
          className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
          alt="logo"
          width={80}
          height={80}
          src="../../assets/images/client/client-1.svg"
        />
      </div>
    </div>
  );
}
