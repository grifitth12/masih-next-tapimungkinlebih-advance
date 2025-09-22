'use server';

import { type CommentFormState } from "./types/commentFormState";

export async function CreateComment(prevData: CommentFormState, formData: FormData): Promise<CommentFormState>{
   const comment = formData.get("comment") as string;

   if(!comment) {
      return {error: "Comment is required"};    
   } 
   return {
      success: true
   }
 
}

export async function createLike(postId: string) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
    console.log("Post liked!: " + postId);   
}