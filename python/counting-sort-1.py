def countingSort(arr):
    n = len(arr)
    freqArr = [0] * 100

    for num in arr:
        freqArr[num] += 1

    return freqArr
