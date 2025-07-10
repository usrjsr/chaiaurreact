import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService { // AuthService class to handle authentication with Appwrite
    client = new Client()// Create a new Appwrite Client instance
        account;

        constructor() {  // Initialize Appwrite Client, we're using the constructor to set up the client
            this.client
                .setEndpoint(conf.appwriteurl) // Your Appwrite Endpoint
                .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

                this.account = new Account(this.client);// Initialize Account service
        }

        async createAccount({ email, password, name }) { 
            try {
                const userAccount=await this.account.create(ID.unique(), email, password, name); // Create a new account with email, password, and name
                if(userAccount) {
                    return this.account.createEmailSession(email, password); // If account creation is successful, create a session for the user
                    
                }
                else {
                    return userAccount;
                }
            } catch (error) {
                throw error;
            }
        }


        async login ({email, password}) { // Method to log in a user
            try {
                return await this .account.createEmailSession(email, password); // Create a session for the user with email and password
            }
            catch(error) {
                throw error;
            }
        }

        async getCurrentUser() { // Method to get the currently logged-in user
            try {
                 return await this.account.get(); // Fetch the current user's account information
            } 
            catch(error) {
               console.log("Appwrite serivce :: getCurrentUser :: error", error);
            }
            return null; // If there's an error, return null
        }

        async logout() {
            try {
                return await this.account.deleteSessions('current'); // Delete the current session to log out the user
            } catch(error) {
                console.log("Appwrite service :: logout :: error", error); 
            }
        
    }
}

const authService= new AuthService();// Create an instance of AuthService
export default authService;