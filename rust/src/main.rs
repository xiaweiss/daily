fn get_user(uid: i32) -> &'static str {
  let ret = if uid == 101 {
    "foo"
  } else if uid == 102 {
    "bar"
  } else {
    "unknown"
  };
  ret
}

fn main() {
  let a = 1;
  let b = if a == 1 { 5 } else { 10 };
  println!("{}", b);

  let uid = 101;
  let name = get_user(uid);
  println!("{}", name);
}
