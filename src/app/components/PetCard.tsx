import Image, { StaticImageData } from "next/image";

interface PetCardProps {
  name: string;
  description: string;
  imageUrl: string | StaticImageData;
}

export default function PetCard({ name, description, imageUrl }: PetCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={imageUrl}
        alt={name}
        width={300}
        height={300}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
