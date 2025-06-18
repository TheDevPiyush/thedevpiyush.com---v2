import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate a URL-friendly slug from a title
 * @param title - The title to convert to a slug
 * @returns A URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Generate a unique slug by appending a number if the slug already exists
 * @param title - The title to convert to a slug
 * @param existingSlugs - Array of existing slugs to check against
 * @returns A unique URL-friendly slug
 */
export function generateUniqueSlug(title: string, existingSlugs: string[]): string {
  let slug = generateSlug(title)
  let counter = 1
  let uniqueSlug = slug

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`
    counter++
  }

  return uniqueSlug
}
