fun plusMinus(arr: List<Int>): Unit {
    var (pos, neg, zed) = listOf(0, 0, 0)

    for (num in arr) {
        if (num > 0) ++pos
        if (num < 0) ++neg
        if (num == 0) ++zed
    }

    val result = listOf(pos, neg, zed)

    for (count in result) {
        var fraction = count.toDouble() / arr.size
        var strFraction = "%.5f".format(fraction)
        println(strFraction)
    }
}

fun main() {
    plusMinus(listOf(1, 3, 0, -10, -1000, 5, 0))
}