def twoArrays(k, A, B):
    def check(a, b):
        return (a + b) >= k

    # permute both arrays A & B (O(n! * n!))
    # compare each permutation to each permutation

    # for i in range(len(A)):
    # if !(check(A[i], B[i])):
    # return "NO"
    # if for loop completes, success return "YES"
