// fn get_user(uid: i32) {
//   if uid == 101 {
//     println!("user is {}", "foo");
//   } else if uid == 102 {
//     println!("user is {}", "bar");
//   } else {
//     println!("user is {}", "unknown")
//   }
// }

fn get_user (uid: i32) {
  match uid {
    101 => println!("user is {}", "foo"),
    102 => println!("user is {}", "bar"),
    _ => println!("user is {}", "unknown")
  }
}

fn main() {
  let name = "张三";

  let uid = 101;
  get_user(uid);
}
