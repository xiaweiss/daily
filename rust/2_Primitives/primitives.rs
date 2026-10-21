fn main () {
  let x = "123";
  // let _: () = x;
  println!("{}", std::any::type_name_of_val(&x));  // i32

  // let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);

  // let mut inferred_type = 12; // Type i64 is inferred from another line.
  // inferred_type = 4294967296i64;

  println!("1 - 2 = {}", 1u32 - 2);
}

// rustc ./primitives.rs && ./primitives
