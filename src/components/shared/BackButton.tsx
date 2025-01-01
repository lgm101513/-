import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>返回</span>
    </button>
  );
};

export default BackButton;