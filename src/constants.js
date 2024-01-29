import { generateUniqueId } from './helpers/generateUniqueId.js';
import { createTimesTamp } from './helpers/createTimesTamp.js';

export const initialSpending = [
  { 
    id: generateUniqueId(), 
    text: 'Магазин "Губительная восьмерка"', 
    date: createTimesTamp(),
    amount: 1771,
  },
  
  { 
    id: generateUniqueId(), 
    text: 'Магазин "Последний восход"', 
    date: createTimesTamp(),
    amount: 982,
  },

  { 
    id: generateUniqueId(), 
    text: 'Магазин "Для Людей и из Людей"', 
    date: createTimesTamp(), 
    amount: 12312,
  },
];