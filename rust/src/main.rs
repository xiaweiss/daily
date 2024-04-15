// mod foo;

fn main () {
    // foo::helper::show_me();
    let result: &'static str = condiction(-111);
    println!("The number is {}", result);
}

fn condiction (num: i32) -> &'static str {
    if num > 0 {
        return "positive";
    } else if num < 0 {
        return "negative";
    } else {
        return "zero";
    }
}

