
// Chunky monkey
function chunkArrayInGroups(arr, size) {
    var groups = [];
    while (arr.length > 0) {
      groups.push(arr.slice(0, size));
      arr = arr.slice(size);
  
    }
    return groups;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);




// Falsy Bouncer

function bouncer(arr) {
    return arr.filter(function(elem) {
      return elem;
    });
  }
  
  bouncer([7, "ate", "", false, 9]);