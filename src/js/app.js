
// TODO: write your code here
// let player = {name: "Маг" , health: 90};

export default function game(player) {
  if (player.health > 50) {
    return 'healthy';
  } if (player.health > 15 && player.health < 50) {
    return 'wounded';
  }
  return 'critical';
}
