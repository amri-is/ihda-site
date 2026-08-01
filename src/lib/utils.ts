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