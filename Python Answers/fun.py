st = [2, 4, 5, 1, 12, 7]
def fun(st):
    if(not st):
        return
    else:
        s1 = [None]*4
        while(st):
            s1.append(st.pop())
            s1.append(st.pop())
            s1.append(s1.pop()*s1.pop())
    return (st, s1)

print(fun(st))