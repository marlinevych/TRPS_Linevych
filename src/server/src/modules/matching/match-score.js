'use strict';

const VALID_CATEGORIES = Object.freeze([
  'documents', 'electronics', 'clothing', 'keys', 'other',
]);

function isValidCategory(category) {
  if (typeof category !== 'string') return false;
  return VALID_CATEGORIES.includes(category);
}

function calculateMatchScore(lostItem, foundItem) {
  if (!lostItem || !foundItem) {
    throw new Error('Both listings are required');
  }
  if (!lostItem.category || !foundItem.category) {
    throw new Error('Category is required');
  }

  let score = 0;

  if (lostItem.category === foundItem.category) {
    score += 50;
  }

  const words1 = String(lostItem.title || '').toLowerCase().split(/\s+/).filter(Boolean);
  const words2 = String(foundItem.title || '').toLowerCase().split(/\s+/).filter(Boolean);
  const common = words1.filter((w) => words2.includes(w)).length;
  const total = Math.max(words1.length, words2.length, 1);
  score += Math.round((common / total) * 30);

  if (typeof lostItem.location === 'number' && typeof foundItem.location === 'number') {
    const distance = Math.abs(lostItem.location - foundItem.location);
    if (distance < 1) score += 20;
    else if (distance < 5) score += 10;
    else if (distance < 10) score += 5;
  }

  return Math.min(score, 100);
}

module.exports = { VALID_CATEGORIES, isValidCategory, calculateMatchScore };