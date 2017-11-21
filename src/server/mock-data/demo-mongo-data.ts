import * as mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.MongoClient;
// Create a class to manage the data manipulation.
export class DataAccess {
    static url: string = 'mongodb://nmtoan:uYzQSW3Cciw8p0rs@demo-mcare-shard-00-00-op5pw.mongodb.net:27017,demo-mcare-shard-00-01-op5pw.mongodb.net:27017,demo-mcare-shard-00-02-op5pw.mongodb.net:27017/test?ssl=true&replicaSet=DEMO-MCARE-shard-0&authSource=admin';
    dbConnection: any = null;

    // Open the MongoDB connection.
    public openDbConnection() {
        if (this.dbConnection == null) {
            MongoClient.connect(DataAccess.url, (err, db) => {
                if (err) {
                    throw err;
                }
                console.log('Connected correctly to MongoDB server.');
                this.dbConnection = db;
            });
        }
    }

    // // Close the existing connection.
    // public closeDbConnection() {
    //     if (this.dbConnection) {
    //         this.dbConnection.close();
    //         this.dbConnection = null;
    //     }
    // }

    // // Get the current count of user entities.
    // public getUsersCount(): any {
    //     let document = {};
    //     return this.getDocumentCount(document, 'users');
    // }

    // // Insert a new user.
    // public insertuser(user: any): any {
    //     return this.insertDocument(user, 'users');
    // }

    // // Get a new user based on the user name.
    // public getUser(userName: string, collectionName: string): any {
    //     let document = {name: userName};
    //     this.getDocumentCount(document, collectionName);
    // }

    // // Insert a new document in the collection.
    // private insertDocument(document: any, collectionName: string): any {
    //     this.dbConnection.collection(collectionName).insertOne(document, function (err: any, result: any) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log('document inserted');
    //         console.log(result);
    //     });
    // }

    // // Get the count of all documents in the collection.
    // private getDocumentCount(document: any, collectionName: string): any {
    //     this.dbConnection.collection(collectionName).find(document).toArray(function (err: any, result: any) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(result);
    //     });
    // }
}