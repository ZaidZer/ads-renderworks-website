export default function ProjectCard({ title, image, category }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
      </div>
    </div>
  );
}
