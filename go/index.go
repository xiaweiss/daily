package main

import "fmt"

func main() {
	var a, b = getMe("zhangsan")
	fmt.Println(a)
	fmt.Println(b)
}

func getMe(prefix string) (string, int) {
	name := prefix + "lisi"
	age := 19
	return name, age
}
