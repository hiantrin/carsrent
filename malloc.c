#include <stdlib.h>
#include <stdio.h>

int ft_strlen(char *str)
{
	int i;
	i = 0;
	while (str[i])
	{
		i++;
	}
	return (i);
}
char	*ft_strdup(char *src)
{
	int len;
	int i;
	char	*str;

	i = 0;
	len = ft_strlen(src);
	str = (char *)malloc(sizeof(char) * (len + 1));
	str[len] = '\0';
	while (src[i])
	{
		str[i] = src[i];
		i++;
	}
	return (str);	
}

int main (void)
{
	char *src = ft_strdup("said");
	
	printf("result ==> %s\n", src);
	return 0;
}
