// use std::thread;

fn main() {
    // let x = 5;

    // let x = x + 1;

    // {
    //   let x = x * 2;
    //   println!("The value of x in the inner scope is: {x}");
    // }
    // println!("The value of x is: {x}");

    // let spaces = "   ";
    // let spaces = spaces.len();
    // println!("The number of spaces is: {spaces}");

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
    // let big_stack_array = vec![0u8; 10_000_000];

    // println!("{}", big_stack_array.len());


    // 获取 CPU 逻辑核心数（包括超线程）
    // let core_num = thread::available_parallelism().unwrap().get();
    // println!("CPU 逻辑核心数：{}", core_num);

    // 推荐线程数
    // let cpu_bound_threads = core_num;                // CPU 密集型
    // let io_bound_threads = core_num * 2;             // IO 密集型（通用经验值）

    // println!("推荐 CPU 密集型线程数：{}", cpu_bound_threads);
    // println!("推荐 IO 密集型线程数：{}", io_bound_threads);


    // let tup: (i32, f64, u8) = (500, 6.4, 1);

    // let (_x, y, _z) = tup;

    // println!("The value of y is: {y}");


    // let x: (i32, f64, u8) = (500, 6.4, 1);


    // let five_hundred = x.0;

    // let six_point_four = x.1;

    // let one = x.2;

    // println!("The value of five_hundred is: {five_hundred}");

    // let a: [i32; 5] = [1, 2, 3, 4, 5];

    // let a = [3; 5]; // [3, 3, 3, 3, 3]

    // let first = a[0];

    // let second = a[1];

    println!("Hello, world!");

    another_function(5, 'h');
}


fn another_function(x: i32, unit_label: char) {
    println!("Another function. {x}{unit_label}")
}
