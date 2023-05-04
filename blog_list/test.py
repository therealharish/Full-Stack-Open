n = 4
m = 4
M = [[1, 3, 1, 5],
     [2, 2, 4, 1],
     [5, 0, 2, 3], 
     [0, 6, 1, 2]]


def maxGold(n, m, M):
    # m,n are cols and rows respectively ugh
    table = [[0 for j in range(m)] for i in range(n)]
    for i in range(m):
        for j in range(n):
            if i == 0:
                table[j][i] = M[j][i]
            elif j == 0 and j+1<n:
                table[j][i] = max(table[j][i-1], table[j+1][i-1]) + M[j][i]
            elif(j==n-1 and j-1>=0):
                table[j][i] = max(table[j-1][i-1], table[j][i-1]) + M[j][i]
            else:
                table[j][i] = max(table[j-1][i-1], table[j][i-1], table[j+1][i-1]) + M[j][i]
            print(table)
    maximum = float("-inf")
    for i in range(n):
        maximum = max(maximum, table[m-1][i])
    return maximum

print(maxGold(n, m, M))
