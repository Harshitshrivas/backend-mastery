// Controlllers ek folder hai, jisme hum apne route ke liye logic likhenge, taki humare routes clean rahe aur logic alag file me rahe, jise hum controllers kehte hai. Controllers me hum functions banayenge, jo ki route ke liye logic handle karenge. Jaise ki orderController me hum orders se related logic likhenge, aur productController me products se related logic likhenge. Isse humare code ka structure better hota hai, aur maintainability bhi badh jati hai.


// orderController.js ,  ya sab functions ko export karna hai, taki order.js me use kar sake
exports.getAllOrders = (req, res) => {
    res.send("Orders for All Users...");
};

exports.getOrdersByUserId = (req, res) => {
    res.send(`Orders for User ${req.params.userId}`);
};
exports.getOrderById = (req, res) => {
    res.send(`Order ID: ${req.params.id}`);
}   
exports.updateOrderById = (req, res) => {
    res.send(`Order Updated: ${req.params.id}`);
}
exports.deleteOrderById = (req, res) => {
    res.send(`Order Deleted: ${req.params.id}`);
}
