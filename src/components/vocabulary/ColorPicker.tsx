import { type JSX } from 'react';
import { useColorStore } from '../../stores/colorStore';

export default function ColorPicker(): JSX.Element {
  const selectedColor = useColorStore((state) => state.selectedColor);
  const setSelectedColor = useColorStore((state) => state.setSelectedColor);
  const COLORS = [
    'bg-pastelRose',
    'bg-pastelLemon',
    'bg-pastelGreen',
    'bg-pastelSky',
    'bg-pastelLavender',
    'bg-pastelRoseLight',
    'bg-pastelLemonLight',
    'bg-pastelGreenLight',
    'bg-pastelSkyLight',
    'bg-pastelLavenderLight',
  ];
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {COLORS.map((colorClass, i) => (
        <button
          key={i}
          className={`w-10 h-10 rounded-full ${colorClass} border focus:border-red-800 border-gray-400`}
          onClick={() => setSelectedColor(colorClass)}
          value={selectedColor}
        />
      ))}
    </div>
  );
}
