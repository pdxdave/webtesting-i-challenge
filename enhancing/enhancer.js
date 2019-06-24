
/*  Breakdown of the assignment
1. Keep track of name, durability and enhancement
2. Enhancement has a range from 0 to 20 
   Durability has a range from 0 to 100 
3. SUCCESS
   Item enhancement + 1 
   If item enhancement is 20, no level change
   Durability does not change
4. FAILURE
   If item enhancement < 15, the durability is - 5. ** Durability must be >= 5 to avoid neg number
   if item enhancement is 15 or 16, the durability is - 10 
   if item enhancement is > 16, enhancement + 1 
5. REPAIR
   Durability is set to 100
*/


module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    item.enhancement = 20;      // I know I could have skipped this line. I use it for clarity
  } else {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  // This line is to avoid a negative number. If durability is less than five, durability is set to 0
  if(item.enhancement < 15 && item.durability < 5){
    item.durability = 0;
  } else if (item.enhancement < 15){
    item.durability -= 5;
  } else if (item.enhancement === 15 || item.enhancement === 16){
    item.durability -= 10;
  } else if (item.enhancement > 16){
    item.enhancement += 1;
  }
  return { ...item };
}

// Repair sets durabiity back to 100 
function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
