import conf from "../conf/conf";
import { Client, Account , ID, Databases, Storage,Query } from "appwrite";

export class Service{
    client= new Client() // Create a new Appwrite Client instance
    databases;// Initialize Databases service
    bucket;// Initialize Storage service

    constructor() {
        this.client
        .setEndpoint(conf.appwriteurl) // Your Appwrite Endpoint
        .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
        this.databases = new Databases(this.client); // Initialize Databases service
        this.bucket= new Storage(this.client);// Initialize Storage service
    }

    async createPost({title,slug,content,image,status,userid}) {
     try {
       return await this.databases.createDocument(
         conf.appwriteDatabaseId,
         conf.appwriteCollectionId,
         slug,
         {
            title,
            content,
            image,
            status,
            userid

         }
       )

     }
        catch(error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title,content,image,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                }
            )
        }
        catch(error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }


    async deletePost(slug) {
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; // Return true if deletion is successful
        }
        catch(error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false; // Return false if there's an error
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false; // Return false if there's an error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                

            )
        }
        catch(error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false; // Return false if there's an error
        }
    }

    async uploadFile(file){
        try {
           return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file // Upload the file to the specified bucket
            );
        }
        catch(error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false; // Return false if there's an error
        }
    }

    async deleteFile(fileId) {
        try {
              await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId // Delete the specified file from the bucket
            )
            return true; // Return true if deletion is successful
            
        }
        catch(error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false; // Return false if there's an error
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }




}

const service=new Service()

export default service;