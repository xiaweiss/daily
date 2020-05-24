package main

import "fmt"

func main () {
	var a, b = getMe("front-end:", 18)
	fmt.Println(a) // front-end:xiawei
	fmt.Println(b) // 18

}

func getMe (prefix string, age int) (string, int) {
	name := "xiawei"
	return prefix + name, age
}
