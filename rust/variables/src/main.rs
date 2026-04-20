fn main() {
    let x = 5;

    let x = x + 1;

    {
      let x = x * 2;
      println!("The value of x in the inner scope is: {x}");
    }
    println!("The value of x is: {x}");

    let spaces = "   ";
    let spaces = spaces.len();
    println!("The number of spaces is: {spaces}");

    // let sun = 5 + 10;

    // let differcene = 95.5 - 4.3;

    // let prudoct = 4 * 30;

    // let quotiene = 56.7 / 32.2;
    // let truncated = -5 / 3;

    // let remainer = 43 % 5;

    // let t = true;

    // let f: bool = false;

    // let c = 'z';

    // let z = 'Z';

    // let heart_eyed_cat = "cat";

    // let s = "Hello, world!";
    // let s = String::from("Hello, world!");
    // let s = "Hello, world!".to_string();

 // 在栈上创建一个巨大的固定大小数组
    // 1000 万个 u8 = 大约 10MB，远超默认栈大小
    let big_stack_array = vec![0u8; 10_000_000];

    println!("{}", big_stack_array.len());

}
