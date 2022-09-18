def diagonal_difference(arr):
    def sum_diagonal(matrix, is_primary):
        col = 0 if is_primary else len(matrix) - 1

        sum = 0
        for row in matrix:
            sum += row[col]
            col += 1 if is_primary else -1
        return sum

    primary_sum = sum_diagonal(arr, True)
    secondary_sum = sum_diagonal(arr, False)
    difference = abs(primary_sum - secondary_sum)
    return difference
