def diagonalDifference(arr):
    def sumPrimaryDiagonal(matrix):
        i = 0
        sum = 0
        for row in matrix:
            sum += row[i]
            i+=1     
        return sum
    
    def sumSecondaryDiagonal(matrix):
        i = len(matrix) - 1 
        sum = 0
        for row in matrix:
            sum += row[i]
            i-=1
        return sum
        
    return abs(sumPrimaryDiagonal(arr) - sumSecondaryDiagonal(arr))