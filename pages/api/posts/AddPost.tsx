import type { NextApiRequest, NextApiResponse } from "next";
import {getServerSession} from 'next-auth/next'
import { authOptions } from "../auth/[...nextauth]";
import prisma from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    //this is to check if the user is logged in or not 
    if(req.method === 'POST'){
        const session = await getServerSession(req, res, authOptions)
        if(!session)
        return res.status(401).json({message: "Please sign in to make a post"}
        )
       
      const title: string = req.body.title

      //Get User with email 
      const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email},
      })

        //check title
        if(title.length > 300){
            return res.status(403).json({message: "Please write a shorter message"})
        }
        if(!title.length){
            return res.status(403).json({message: "Please do not leave this empty"})
        }

        //Create post
        try {
           const result = await prisma.post.create({
            data:{
                title,
                userId: prismaUser.Id
            },
           })
            res.status(200).json(result)
           
        } catch (error) {
            res.status(403).json({err: 'Error has occured'})
        }
    }
}