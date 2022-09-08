# def alwaysHungry(arr):
#     yummy = False
#     for i in arr:
#         if i == "food":
#             print("yummy")
#             yummy = True
#         elif i != "food":
#             yummy = False
#     if yummy == False:
#         print("I'm hungry")

# alwaysHungry([3.14, "food", "pie", True, "food"])
# # this should print "yummy", "yummy"

# alwaysHungry([4, 1, 5, 7, 2])
# # this should print "I'm hungry"


# def highPass(arr, cutoff):
#     filteredArr = []
#     for i in arr:
#         if i > cutoff:
#             filteredArr.append(i)
#     return filteredArr

# result = highPass([6, 8, 3, 10, -2, 5, 9], 5)
# print(result); # we expect back [6, 8, 10, 9]



# def betterThanAverage(arr):
#     avg = 0
#     for i in arr:
#         avg += i
    
#     count = 0
#     avg /= len(arr) 
#     for i in arr:
#         if i > avg:
#             count += 1
#     return count

# result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
# print(result)


# def reverse(arr):
#     temp = []
#     for i in arr:
#         temp.insert(0, i)
#     arr = temp
#     return arr

# result = reverse(["a", "b", "c", "d", "e"])
# print(result) # we expect back ["e", "d", "c", "b", "a"]



# def fibonacciArray(n):
#     fibArr = [0, 1]
#     for i in range(1, n - 1):
#         fibArr.append(fibArr[i] + fibArr[i - 1])

#     return fibArr


# result = fibonacciArray(10)
# print(result)
