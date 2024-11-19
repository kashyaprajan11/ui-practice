import { RadialHoverCard } from "@/components/ui/card-hover-radial";

export default function Home() {
  const cardData = [
    {
      id: 0,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
    {
      id: 1,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
    {
      id: 2,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
    {
      id: 3,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
    {
      id: 4,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
    {
      id: 5,
      title: "hello",
      description: "This is the description",
      image: "Some random image link",
      link: "Where should it take us",
    },
  ];
  return (
    <div className="p-8">
      <RadialHoverCard cardData={cardData} />
    </div>
  );
}
