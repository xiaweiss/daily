package models

type UserModel struct {
	Uid   int
	Uname string
}

func ToString() string {
	return "测试字符串"
}

func (u UserModel) ToString() string {
	return "用户名是：" + u.Uname
}

func (u UserModel) SetValue(id int, name string) string {
	u.Uname = name
	u.Uid = id
	return ""
}

/**
class UserModel
{
	public String ToString()
	{
		///
	}
}


*/
