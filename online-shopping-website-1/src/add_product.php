<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product_name = $_POST['product_name'];
    $product_price = $_POST['product_price'];
    $product_image = $_FILES['product_image']['name'];
    $target_dir = "assets/images/";
    $target_file = $target_dir . basename($product_image);

    // Upload file
    if (move_uploaded_file($_FILES['product_image']['tmp_name'], $target_file)) {
        $sql = "INSERT INTO products (name, price, image) VALUES ('$product_name', '$product_price', '$product_image')";
        if ($conn->query($sql) === TRUE) { echo "New product added
successfully"; } else { echo "Error: " . $sql . "<br />" . $conn->error; } }
else { echo "Sorry, there was an error uploading your file."; } $conn->close();
} ?>