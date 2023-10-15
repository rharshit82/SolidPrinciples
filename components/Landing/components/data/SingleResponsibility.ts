export const withoutSingleResponsibility = `Class UserManager {
    Properties: username, email

    Method CreateUser() {
        // Logic to create a user
    }

    Method SaveToDatabase() {
        // Logic to save user to the database
    }
}

// Usage:
userManager = new UserManager('JohnDoe', 'john@example.com')
userManager.CreateUser()
userManager.SaveToDatabase()`;
export const withSingleResponsibility = `
Class User {
    Properties: username, email
}

Class UserCreator {
    Method CreateUser(user) {
        // Logic to create a user
    }
}

Class UserDatabase {
    Method SaveUser(user) {
        // Logic to save user to the database
    }
}

// Usage:
user = new User('JohnDoe', 'john@example.com')
userCreator = new UserCreator()
userDatabase = new UserDatabase()

userCreator.CreateUser(user)
userDatabase.SaveUser(user)
`;
