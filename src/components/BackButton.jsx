
import { IconButton } from '@mui/material';

const BackButton = () => {
  return (
    <IconButton
      aria-label="back"
      onClick={() => window.history.back()} 
      className="text-[#8692A6] flex items-center " 
    >
      <span className="material-symbols-outlined text-[#8692A6] " style={{ fontSize: '30px' }}>
        chevron_left
      </span>
      <span className="text-[#8692A6] text-xl">Back</span>
    </IconButton>
  );
};

export default BackButton;

