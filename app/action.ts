'use server';

export async function CreateComment(prevData: unknown, formData: FormData) {
   const comment = formData.get("comment")as string;

   if(!comment) {
      return {error: "Comment is required"};    
   } 
}

export async function createLike() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
    console.log("Post liked!");
}