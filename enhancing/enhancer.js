
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
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
