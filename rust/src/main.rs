// 打印每个字符、字符串长度
// fn filter (text: &str) {
//   for c in text.chars() {
//     println!("{}", c)
//   }
//   println!("length:{}", text.len())
// }

// 判断用户名长度，4-10个字符是合法的
fn check_username(username: &str) {
  match username.len() {
    0..=3 => println!("too short"),
    4..=10 => println!("ok"),
    _ => println!("too long"),
  }
}

// 打印 1-10 的数字
fn show () {
  for i in 1..11 {
    println!("{}", i)
  }
}

fn main() {
  // let text = "Hello";
  // filter(text)

  let name = "123";
  check_username(name);

  show();
}
