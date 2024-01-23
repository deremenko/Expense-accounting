import { generateUniqueId } from './helpers/generateUniqueId.js';
import { createTimesTamp } from './helpers/createTimesTamp.js';

export const initialSpending = [
  { id: generateUniqueId(), 
    text: 'Магазин "Губительная восьмерка"', 
    date: createTimesTamp(),
    expense: 1771,
  },
  
  { id: generateUniqueId(), 
    text: 'Магазин "Последний восход"', 
    date: createTimesTamp(),
    expense: 982,
  },

  { id: generateUniqueId(), 
    text: 'Магазин "Для Людей и из Людей"', 
    date: createTimesTamp(), 
    expense: 12312,
  },
];