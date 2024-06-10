// import express from "express";
// import bcrypt from "bcrypt";

// const app = express();
// app.use(express.json());
// const users = [];
// app.get("/", (req, res) => {
//     res.send("Welcome to our API");
// });
// app.post("/register", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         let FindUser = users.find((x) => x.email === email);
//         if (FindUser) {
//             res.status(400).send("User already exists");
//         } else {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             users.push({ email, password: hashedPassword });
//             res.status(201).send("User created successfully");
//         }
//     } catch (err){
//         res.status(500).send({ message: err.message });
//     }
// });
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const FindUser = users.find((x)=> x.email === email);
//         if (FindUser) {
//             const passMatch = await bcrypt.compare(password,FindUser.password)
//             if(passMatch){
//                 res.redirect('/')
//             }else{
//                 res.status(401).send("Invalid credentials");}
//         }else{
//             res.status(401).send("Invalid credentials");
//         }
//     }catch (err){
//         res.status(500).send({ message: err.message });
//     }
// })
// app.get("/register", (re, res) => {
//     res.status(202).send(users);
// });

// app.listen(4000, () => {
//     console.log("Running at port 4000");
// });
