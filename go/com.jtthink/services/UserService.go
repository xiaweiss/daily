package services

import "com.jtthink/models"

func GetUser () string {

	user := new(models.UserModel)
	// user.Uname = "shenyi"
	user.SetValue(123, "lisi")
	return user.ToString()
}
