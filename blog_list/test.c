// C program to implement Simple Code Generator.
#include
#include
#include
#include
#include
typedef struct
{
    char var[10];
    int alive;
} regist;

regist preg[10];

void substring(char exp[], int st, int end)
{
    for(i=st;i
    dup[j++]=exp[i];
    strcpy(exp,dup);
}

int getregister(char var[])
{
    for (i = 0; i < 10; i++)
    {
        if (preg[i].alive == 0)
        {
            strcpy(preg[i].var, var);
            break;
        }
    }
    return (i);
}

void getvar(char exp[], char v[])
{
    for (i = 0; exp[i] != '\0'; i++)
        if (isalpha(exp[i]))
            var[j++] = exp[i];
        else
            break;
    strcpy(v, var);
}

void main()
{
    for(j=0;j
    {
            getvar(basic[j], var[vc++]);
            strcpy(fstr, var[vc - 1]);
            substring(basic[j], strlen(var[vc - 1]) + 1, strlen(basic[j]));
            getvar(basic[j], var[vc++]);

            if (preg[reg].alive == 0)
            {
                printf("\nMov R%d,%s", reg, var[vc - 1]);
                preg[reg].alive = 1;
            }
            op = basic[j][strlen(var[vc - 1])];

            getvar(basic[j], var[vc++]);
            switch (op)
            {
            case '+':
                printf("\nAdd");
                break;
            case '-':
                printf("\nSub");
                break;
            case '*':
                printf("\nMul");
                break;
            case '/':
                printf("\nDiv");
                break;
            }
            if (flag)
            {
                printf(" %s,R%d", var[vc - 1], reg);
                printf("\nMov %s,R%d", fstr, reg);
            }
            strcpy(preg[reg].var, var[vc - 3]);
            getch();
    }
}