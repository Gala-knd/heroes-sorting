export default function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Input must be an array');
  }
  
  return [...heroes].sort((a, b) => b.health - a.health);
}
