const solution = (arr) => {
    /**
     * This function iterates through arr. Starting with the left branch, and
     * and initialized size, first fills up the left branch with values, when left
     * branch reaches size, switch to filling up the right. This alternates and resets
     * as branches fill.
     */

    // handle [] or [n] cases
    if (arr.length == 0 || arr.length == 1) {
        return "";
    }
    let size = 1; // starts as 1, multiplied by 2 when both branches are full
    let left = true; // init as true, and false when filling right branch

    let leftSum = 0;
    let leftSize = 0;

    let rightSum = 0;
    let rightSize = 0;

    for (i in arr) {
        // ignore first index
        if (i == 0) {
            continue;
        }

        // check if left or right have reached `size` limit
        if (leftSize == size) {
            leftSize = 0;
            left = false;
        }
        if (rightSize == size) {
            rightSize = 0;
            left = true;
            size *= 2;
        }

        // filling respectives nodes depending on `left` flag
        if (left) {
            add(arr[i]);
            leftSize++;
            continue;
        }
        if (!left) {
            add(arr[i]);
            rightSize++;
        }
    }

    // return cases
    if (leftSum > rightSum) {
        return "Left";
    } else if (leftSum == rightSum) {
        return "";
    } else {
        return "Right";
    }

    function add(number) {
        /**
         * Helper function to add number to sum.
         * Handles case where number is -1
         */
        if (number == -1) {
            return;
        }
        if (left) {
            leftSum += number;
        } else {
            rightSum += number;
        }
    }
};
