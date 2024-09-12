import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.Cloudinary_client_name,
    api_key: process.env.Cloudinary_client_API,
    api_secret: process.env.Cloudinary_client_Secret,
});

app.listen(process.env.PORT,() =>{
    console.log(`server running on port ${process.env.PORT}`);
})