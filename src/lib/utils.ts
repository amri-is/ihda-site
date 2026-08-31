import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Get random number in range.
 * First arg handle 'to' x range.
 * Second arg handle 'from' x range. 0 as default
 * Third arg handle many 'decimal to show'. 0 as default
 */
export function getRange(to: number, from: number = 0, decimals: number = 0): number {
  const num = Math.random() * (to - from) + from
  return Number(num.toFixed(decimals))
}

export function convertDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  
  // Custom 3-letter Indonesian month array (0-indexed)
  const monthsID = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ];
  
  // Convert "08" string to numeric index 7
  const monthIndex = parseInt(month, 10) - 1; 
  const shortMonth = monthsID[monthIndex];
  
  // Remove leading zero from day if you want "21" or "5" instead of "05"
  const cleanDay = parseInt(day, 10); 

  return `${cleanDay} ${shortMonth} ${year}`;
}