const { OrderModel } = require("../models/orderModel")


const showOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({});
        if(!orders){
            return res.status(404).json({message: "No orders found"})
        }
        return res.json(orders);
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}

const newOrder = async (req, res) => {
    try {
        console.log(req.body);
        
        const { firstName, lastName, email, street, city, state, zipcode, country, phone, items, Amount } = req.body;

        const newOrder = await OrderModel.create({
            firstName,
            lastName,
            email,
            street,
            city,
            state,
            zipcode,
            phone,
            items,
            Amount
            });
            return res.json({success:true, message:  "Order created successfully"});

    } catch (err) {
        console.error("Error fetching orders", err);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}

const order = async (req,res) => {
    try {
        const { id } = req.params;
        const order = await OrderModel.findById(id);

        if(!order) return res.json({ success:false, message: "Order not found"});

        return res.json({ success:true, message: "Order accepted", order});

    } catch (err) {
        console.error("Error while accepting order:", err);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}

module.exports = { showOrders, newOrder, order };