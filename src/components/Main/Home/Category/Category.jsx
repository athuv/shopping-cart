import {
  PiTelevisionSimpleDuotone,
  PiTreeDuotone,
  PiArmchairDuotone,
  PiHouseDuotone,
  PiCarProfileDuotone,
  PiCatDuotone,
  PiFootballDuotone,
  PiGraduationCapDuotone,
  PiPlantDuotone,
  PiWatchDuotone,
  PiBriefcaseDuotone,
  PiPaintBrushHouseholdDuotone,
  PiBookDuotone,
  PiPenDuotone,
} from 'react-icons/pi';

export default function Category() {
  const categories = [
    {
      name: 'Electronics',
      icon: <PiTelevisionSimpleDuotone className="text-7xl" />,
    },
    {
      name: 'Garden',
      icon: <PiTreeDuotone className="text-7xl" />,
    },
    {
      name: 'Furniture',
      icon: <PiArmchairDuotone className="text-7xl" />,
    },
    {
      name: 'Property',
      icon: <PiHouseDuotone className="text-7xl" />,
    },
    {
      name: 'Vehicles',
      icon: <PiCarProfileDuotone className="text-7xl" />,
    },
    {
      name: 'Animals',
      icon: <PiCatDuotone className="text-7xl" />,
    },
    {
      name: 'Sports',
      icon: <PiFootballDuotone className="text-7xl" />,
    },
    {
      name: 'Education',
      icon: <PiGraduationCapDuotone className="text-7xl" />,
    },
    {
      name: 'Agriculture',
      icon: <PiPlantDuotone className="text-7xl" />,
    },
    {
      name: 'Fashion',
      icon: <PiWatchDuotone className="text-7xl" />,
    },
    {
      name: 'Jobs',
      icon: <PiBriefcaseDuotone className="text-7xl" />,
    },
    {
      name: 'Art',
      icon: <PiPaintBrushHouseholdDuotone className="text-7xl" />,
    },
    {
      name: 'Books',
      icon: <PiBookDuotone className="text-7xl" />,
    },
    {
      name: 'Stationery',
      icon: <PiPenDuotone className="text-7xl" />,
    },
  ];

  return (
    <section>
      <div className="px-6">
        <h1 className="py-4 text-2xl font-bold ">Category</h1>
        <div className="grid grid-cols-2 items-center justify-items-center gap-3">
          {categories.map((category, index) => (
            <div
              className="group flex flex-col items-center justify-center gap-4 "
              key={index}
            >
              <div className="rounded-full bg-primaryLight p-4 group-hover:bg-secondary">
                {category.icon}
              </div>
              <div>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
