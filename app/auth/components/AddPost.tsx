'use client';
import { useState } from "react"

export default function CreatPost(){
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    return (
        <form className="bg-black my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <textarea 
                onChange={(e)=> setTitle(e.target.value)} 
                name="title"  
                value={title} 
                className="p-4 text-lg rounded-md my-2 bg-gray-200"
                placeholder="Whats on your mind"></textarea>
            </div>
            <div>
                <button
                disabled={isDisabled}
                className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                type="submit"
                > Create a post</button>
            </div>
        </form>
    )
}