def pangrams(s):
    letters_list = list("abcdefghijklmnopqrstuvwxyz ")
    for letter in letters_list:
        if letter not in s:
            return "not pangram"
    return "pangram"
