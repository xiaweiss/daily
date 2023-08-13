package main

import (
	"fmt"
	"com.jtthink/services"
)

func main() {
	result := services.GetUser()
	fmt.Println(result)
}