use std::io;
use rand::prelude::*;

fn main() {
    println!("Guess the number!");

    let mut rng = rand::rng();
    let secret_number = rng.random_range(1..=100);

    println!("The secret number is: {secret_number}");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}
