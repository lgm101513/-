import { Plus } from 'lucide-react';

interface AddButtonProps {
  onClick: () => void;
  text: string;
}

const AddButton = ({ onClick, text }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
    >
      <Plus className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
};

export default AddButton;