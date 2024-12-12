import AdminJS from "adminjs";
import  AdminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from "@adminjs/mongoose";
import Models  from "../models/index.js";
import { authenticate, COOKIE_PASSWORD, sessionStore } from "./config.js";
import {dark} from "@adminjs/themes"
AdminJS.registerAdapter(AdminJSMongoose);


export const admin = new AdminJS({
  resources: [
    {
      resource: Models.Customer,
      options: {
        listProperties: ["phone", "role", "isActivited"],
        filterProperties: ["phone", "role"],
      },
    },
    {
      resource: Models.DeleveryPartner,
      options: {
        listProperties: ["email", "role", "isActivited"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Admin,
      options: {
        listProperties: ["email", "role", "isActivited"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Branch,
    },
 
  ],
     branding :{
        companyName : "Blinkit",
        favicon : "https://yt3.googleusercontent.com/YnrIWet65YxJQJlwlXI33E5r22UzWWHYGoL4Jtx_V2pvdbyhgLN1SAASnFOGZ4CuKjBNZjMFTQ=s900-c-k-c0x00ffffff-no-rj",
        logo: "https://yt3.googleusercontent.com/YnrIWet65YxJQJlwlXI33E5r22UzWWHYGoL4Jtx_V2pvdbyhgLN1SAASnFOGZ4CuKjBNZjMFTQ=s900-c-k-c0x00ffffff-no-rj",
        withMadeWithLove : false,
        copyright : "Blinkit 2023",

     },
     defaultTheme :dark.id,
     availableThemes :[dark],
     rootPath : "/admin",
});

export const buildAdminRouter = async(app)=>{
    await AdminJSFastify.buildAuthenticatedRouter(
        admin,{
            authenticate,
            cookiePassword : COOKIE_PASSWORD,
            cookieName : "adminjs",
        },
        app,{
            store:sessionStore,
            saveUninitilized :true,
            secret :COOKIE_PASSWORD,
            cookie:{
                httpOnly :process.env.NODE_ENV==="production",
                secure :process.env.NODE_ENV==="production",
            }
        }
    )
}