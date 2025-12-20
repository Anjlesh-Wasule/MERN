// Recursion, Backtracking and Permutations

// Tree like recursion -> a fucntion taht makes more than one recursive call


// Using Backtracking to find all the subsets of an array
// [1,2,3] => [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3];
// For an array of length n, total no.of subsets = 2^n;


/*
  function backtrack(state, choices){
    for(let choice of choices){
      makeChoice(state, choice);

      EXPLORE
      backtrack(state, choice)

      undoChoice(state, choice);
    }
  }
*/ 


function subsets(nums) {   // ChatGPT CODE
    const allSubsets = [];   // this will store the final answer
    const currentSubset = []; // this stores one subset while building it

    function helper(position) {

        // STEP 1: If we have checked all numbers
        if (position === nums.length) {
            // Save a COPY of the current subset
            allSubsets.push([...currentSubset]);
            return;
        }

        // STEP 2: TAKE the current number
        currentSubset.push(nums[position]);
        helper(position + 1);

        // STEP 3: UNDO the choice (important!)
        currentSubset.pop();

        // STEP 4: SKIP the current number
        helper(position + 1);
    }

    helper(0);
    return allSubsets;
}

// console.log(subsets([1,2]));




// CODE Written by sir
function subsetsDisInClass(nums) {
    const allSubsets = [];
    const currentSubset = [];

    function helper(position) {

        // Record the subset BEFORE branching
        allSubsets.push([...currentSubset]);

        for (let i = position; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            helper(i + 1);
            currentSubset.pop();
        }
    }

    helper(0);
    return allSubsets;
}

console.log(subsetsDisInClass([1,2,3]));