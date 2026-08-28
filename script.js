function orderProduct(productName, price, sizes) {

    let size = prompt(
        "Available sizes: " + sizes +
        "\n\nPlease enter your preferred size:"
    );

    if (!size) {
        return;
    }

    let message =
        "Hello ENAM WEARS! 👋\n\n" +
        "I would like to order:\n" +
        "Product: " + productName + "\n" +
        "Price: GH₵" + price + "\n" +
        "Size: " + size;

    let whatsappNumber = "233502991834";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
