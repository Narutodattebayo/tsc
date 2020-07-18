import mongoose from 'mongoose';


export let createConnection = async (url: any) => {
    console.log(url,"??????????")
    mongoose.connect(url)

}