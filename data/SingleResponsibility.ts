const withoutSingleResponsibilityPseudoCode = `Class UserManager {
    Properties: username, email

    // Method responsible for user creation logic.
    // Violation: Incorporates user validation and initialization, which is a separate concern from the core functionality of managing user data.
    Method CreateUser() {
        // Logic to create a user
    }

    // Method responsible for saving data to a database.
    // Violation: Manages database interactions, an entirely different responsibility from user creation or user management, indicating a breach of SRP.
    Method SaveToDatabase() {
        // Logic to save user to the database
    }
}

// Usage:
userManager = new UserManager('JohnDoe', 'john@example.com')

// UserManager class is doing more than one operation, handling both user creation and saving data to the database.
userManager.CreateUser()  // This should ideally be the responsibility of a 'UserCreator' class.
userManager.SaveToDatabase()  // This operation should be delegated to a dedicated 'DatabaseManager' class.

// Here, the UserManager class violates the Single Responsibility Principle by taking on responsibilities that should be handled by separate classes.
// This design intertwines unrelated functionalities, making the system harder to maintain, test, and extend.`;

const withoutSingleResponsibilityJavascript = `
class UserManager {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Method to create a user.
    // Violation: This class is managing the details of user creation, such as validation or setup.
    // It's mixing the logic of user entity handling with the business rules for creating a user.
    createUser() {
        // Logic for creating a user. This could involve several processes
        // like validating data, checking the uniqueness of the username, etc.
        console.log('User created:', this.username, this.email);
    }

    // Method to save the user to a database.
    // Violation: This class is also handling data storage, which is a separate concern.
    // It's not the UserManager's responsibility to know how users are stored in the database.
    saveToDatabase() {
        // Logic for saving a user in the database. This involves understanding and managing
        // database operations, which should be the responsibility of a separate class.
        console.log('User saved to database:', this.username, this.email);
    }
}

// Usage:
const userManager = new UserManager('JohnDoe', 'john@example.com');
userManager.createUser();  // UserManager is handling user creation, which should be one responsibility.
userManager.saveToDatabase();  // Here, UserManager also interacts with the database, adding a second responsibility.

// The above usage shows how a single class is managing different aspects of the system,
// which makes it harder to maintain and scale the code over time.
// If we need to change the database interaction logic, we'd also have to modify the UserManager class,
// which can introduce new bugs into the user creation logic (and vice versa).`;

const withoutSingleResponsibilityJava = `
public class UserManager {
    private String username;
    private String email;

    // Constructor method initializes the user's data.
    public UserManager(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Method to create a user.
    // Violation: This class is managing the details of user creation, such as validation or setup.
    // It's mixing the logic of user entity handling with the business rules for creating a user.
    public void createUser() {
        // Logic for creating a user goes here. This could involve several processes,
        // like validating data, checking the uniqueness of the username, etc.
        System.out.println("User created: " + this.username + ", " + this.email);
    }

    // Method to save the user to a database.
    // Violation: This class is also handling data storage, which is a separate concern.
    // It's not the UserManager's responsibility to know how users are stored in the database.
    public void saveToDatabase() {
        // Logic for saving a user in the database. This involves understanding and managing
        // database operations, which should be the responsibility of a separate class.
        System.out.println("User saved to database: " + this.username + ", " + this.email);
    }

    // Other getters and setters could be here if needed to access the properties outside.
}

// Usage example in a main or another method could look like this:
/*
public static void main(String[] args) {
    UserManager userManager = new UserManager("JohnDoe", "john@example.com");
    userManager.createUser(); // UserManager handles user creation, which should be one responsibility.
    userManager.saveToDatabase(); // UserManager also interacts with the database, a second responsibility.
    
    // This single class managing different aspects makes it harder to maintain and scale.
    // Changing database interaction logic involves modifying UserManager, potentially introducing bugs in user creation logic.
}
*/`;

const withoutSingleResponsibilityPython = `
class UserManager:
    def __init__(self, username, email):
        self.username = username
        self.email = email

    # Method to create a user.
    # Violation: This class is managing the details of user creation, such as validation or setup.
    # It's mixing the logic of user entity handling with the business rules for creating a user.
    def create_user(self):
        # Logic for creating a user goes here. This could involve several processes,
        # like validating data, checking the uniqueness of the username, etc.
        print(f'User created: {self.username}, {self.email}')

    # Method to save the user to a database.
    # Violation: This class is also handling data storage, which is a separate concern.
    # It's not the UserManager's responsibility to know how users are stored in the database.
    def save_to_database(self):
        # Logic for saving a user in the database. This involves understanding and managing
        # database operations, which should be the responsibility of a separate class.
        print(f'User saved to database: {self.username}, {self.email}')


# Usage:
# Creating an instance of UserManager.
# The constructor of the class will be called with 'JohnDoe' and 'john@example.com'.
user_manager = UserManager('JohnDoe', 'john@example.com')

# Calling the create_user method on the user_manager object.
user_manager.create_user()

# Calling the save_to_database method to simulate saving the user to a database.
user_manager.save_to_database()

# The above usage demonstrates how a single class is managing different aspects of the system,
# which makes it harder to maintain and scale the code over time.
# If we need to change the database interaction logic, we'd also have to modify the UserManager class,
# which can introduce new bugs into the user creation logic (and vice versa).`;

const withoutSingleResponsibilityCHash = `
using System;

namespace SRPExample
{
    public class UserManager
    {
        public string Username { get; }
        public string Email { get; }

        // Constructor initializes the user's data.
        public UserManager(string username, string email)
        {
            Username = username;
            Email = email;
        }

        // Method to create a user.
        // Violation: This class is managing the details of user creation, such as validation or setup.
        // It's mixing the logic of user entity handling with the business rules for creating a user.
        public void CreateUser()
        {
            // Logic for creating a user. This could involve several processes
            // like validating data, checking the uniqueness of the username, etc.
            Console.WriteLine($"User created: {Username}, {Email}");
        }

        // Method to save the user to a database.
        // Violation: This class is also handling data storage, which is a separate concern.
        // It's not the UserManager's responsibility to know how users are stored in the database.
        public void SaveToDatabase()
        {
            // Logic for saving a user in the database. This involves understanding and managing
            // database operations, which should be the responsibility of a separate class.
            Console.WriteLine($"User saved to database: {Username}, {Email}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Usage:
            var userManager = new UserManager("JohnDoe", "john@example.com");
            userManager.CreateUser(); // UserManager handles user creation, which should be one responsibility.
            userManager.SaveToDatabase(); // UserManager also interacts with the database, a second responsibility.

            // This single class managing different aspects makes it harder to maintain and scale.
            // Changing database interaction logic involves modifying UserManager, potentially introducing bugs in user creation logic.
        }
    }
}`;

const withoutSingleResponsibilityPHP = `
<?php

class UserManager {
    private $username;
    private $email;

    // Constructor method initializes the user's data.
    public function __construct($username, $email) {
        $this->username = $username;
        $this->email = $email;
    }

    // Method to create a user.
    // Violation: This class is managing the details of user creation, such as validation or setup.
    // It's mixing the logic of user entity handling with the business rules for creating a user.
    public function createUser() {
        // Logic for creating a user goes here. This could involve several processes,
        // like validating data, checking the uniqueness of the username, etc.
        echo "User created: " . $this->username . ", " . $this->email . "\n";
    }

    // Method to save the user to a database.
    // Violation: This class is also handling data storage, which is a separate concern.
    // It's not the UserManager's responsibility to know how users are stored in the database.
    public function saveToDatabase() {
        // Logic for saving a user in the database. This involves understanding and managing
        // database operations, which should be the responsibility of a separate class.
        echo "User saved to database: " . $this->username . ", " . $this->email . "\n";
    }
}

// Usage:
// Creating an instance of UserManager with specific user data.
$userManager = new UserManager("JohnDoe", "john@example.com");

// Calling the createUser method on the userManager object.
$userManager->createUser();

// Calling the saveToDatabase method to simulate saving the user to a database.
$userManager->saveToDatabase();

// Here, we see that the UserManager class has multiple responsibilities, which is a violation of the Single Responsibility Principle.
// Changes in the logic of database handling would require changes to the UserManager class, which also deals with user creation logic.
// This coupling leads to a design that is harder to maintain and evolve without affecting multiple functionalities.

?>
`;

const withoutSingleResponsibilityCPP = `
#include <iostream>
#include <string>

// Class representing a user manager that violates the Single Responsibility Principle (SRP) 
// by handling both user creation and database interaction logic.
class UserManager {
private:
    std::string username;
    std::string email;

public:
    // Constructor that initializes the user's data.
    UserManager(const std::string& username, const std::string& email) 
        : username(username), email(email) {}

    // Method to create a user.
    // SRP Violation: This class is responsible for user creation details,
    // combining the user entity's logic with the business rules for creating a user.
    void CreateUser() {
        // Logic for creating a user, such as validating the data, 
        // ensuring username uniqueness, etc., goes here.
        std::cout << "User created: " << username << ", " << email << std::endl;
    }

    // Method to save the user to a database.
    // SRP Violation: This class handles data storage, a separate concern.
    // The UserManager class shouldn't know how users are stored in the database.
    void SaveToDatabase() {
        // Logic for saving a user to the database. This involves understanding and managing 
        // database operations, which should be the responsibility of a dedicated database class.
        std::cout << "User saved to database: " << username << ", " << email << std::endl;
    }
};

int main() {
    // Creating an instance of UserManager with specific user data.
    UserManager userManager("JohnDoe", "john@example.com");

    // Calling the CreateUser method on the userManager object.
    userManager.CreateUser();

    // Calling the SaveToDatabase method to simulate saving the user to a database.
    userManager.SaveToDatabase();

    // The UserManager class, as used here, violates the SRP by having multiple reasons to change.
    // This design makes the system harder to maintain, as changes in the database interaction logic 
    // would require modifications to the UserManager class, potentially introducing bugs in user creation logic.

    return 0;
}
`;

const withoutSingleResponsibilityGo = `
package main

import (
	"fmt"
)

// User represents the user entity with basic properties.
type User struct {
	Username string
	Email    string
}

// UserManager represents a manager for users that violates the Single Responsibility Principle.
type UserManager struct {
	user User
}

// NewUserManager creates a new UserManager instance.
func NewUserManager(username, email string) *UserManager {
	return &UserManager{
		user: User{
			Username: username,
			Email:    email,
		},
	}
}

// CreateUser creates a user.
// Violation: The class handles the user creation details, combining user entity logic with user creation business rules.
func (manager *UserManager) CreateUser() {
	// Logic for creating a user, such as validating data and ensuring username uniqueness, goes here.
	fmt.Printf("User created: %s, %s\n", manager.user.Username, manager.user.Email)
}

// SaveToDatabase simulates saving the user data to a database.
// Violation: The class also handles data storage, which is a separate concern.
// The UserManager shouldn't know how users are stored in the database.
func (manager *UserManager) SaveToDatabase() {
	// Logic for saving a user to the database would go here. This involves understanding and handling
	// database operations, which should be the responsibility of a dedicated database class.
	fmt.Printf("User saved to database: %s, %s\n", manager.user.Username, manager.user.Email)
}

func main() {
	// Creating a new UserManager instance with specific user data.
	userManager := NewUserManager("JohnDoe", "john@example.com")

	// Calling the CreateUser method on the userManager instance.
	userManager.CreateUser()

	// Calling the SaveToDatabase method to simulate saving the user to a database.
	userManager.SaveToDatabase()

	// This use of UserManager violates the Single Responsibility Principle by managing different aspects of user handling.
	// If the way users are saved to the database changes, UserManager would need to change for a non-related reason,
	// making the system harder to maintain and extend.
}
`;

const withoutSingleResponsibilitySwift = `
import Foundation

// Defining a class 'UserManager' that handles user-related operations.
// This class violates the Single Responsibility Principle (SRP) by managing both user details and database operations.
class UserManager {
    
    var username: String
    var email: String
    
    // Initializing the 'UserManager' object with a username and email.
    init(username: String, email: String) {
        self.username = username
        self.email = email
    }
    
    // Function to create a user. This method might include logic to check if the user already exists or validate the user's data.
    // Violation: The class is managing the user creation logic, combining the user entity creation with the business rules for creating a user.
    func createUser() {
        // Logic for creating a user might go here.
        // For instance, setting up user properties, or preparing the user data for database entry.
        print("User created: \(self.username), \(self.email)")
    }
    
    // Function to simulate saving the user information to a database. In real scenarios, this method would involve actual database handling operations.
    // Violation: The class handles data storage, which is a separate concern. 
    // The 'UserManager' class shouldn't know how users are stored in the database.
    func saveToDatabase() {
        // Logic to save user to the database goes here.
        // This could be an API call, a database query, etc.
        print("User saved to database: \(self.username), \(self.email)")
    }
}

// Usage example:
// Creating an instance of 'UserManager' with the 'new' keyword. The constructor of the class will be called with 'JohnDoe' and 'john@example.com'.
let userManager = UserManager(username: "JohnDoe", email: "john@example.com")

// Calling the 'createUser()' method on the 'userManager' object. This would initiate the user creation process.
userManager.createUser()

// Calling the 'saveToDatabase()' method on the 'userManager' object. This would simulate a process where the user information is stored in a database.
userManager.saveToDatabase()

// The 'UserManager' class, as designed here, violates the SRP by having multiple reasons to change.
// This design makes the system harder to maintain. Changes in how the database interactions work would mean this class needs to be modified, potentially affecting the user creation logic.
`;

const withoutSingleResponsibilityRuby = `
# The UserManager class is responsible for handling operations related to a user.
# This class violates the Single Responsibility Principle by taking on responsibilities
# that should be handled by separate, specific classes.
class UserManager
  attr_accessor :username, :email

  # Initialize the UserManager instance with a username and email.
  def initialize(username, email)
    @username = username
    @email = email
  end

  # Method to create a user. It might include various checks such as whether the user already exists
  # or other business logic related to creating a user.
  # Violation: This class is handling the user creation logic, which could be considered a separate responsibility.
  # The user entity management and business rules/logic for user creation are mixed here.
  def create_user
    # Logic to create a user would go here.
    # For example, checking uniqueness of the username, setting other properties, etc.
    puts "User created: #{@username}, #{@email}"
  end

  # Method simulating saving the user's data to a database.
  # Violation: This class is also handling data persistence, which should be a separate concern.
  # The class shouldn’t be responsible for knowing how user details are stored in the database.
  def save_to_database
    # Logic for saving user data to the database would go here.
    # This might include connecting to a database, structuring the data appropriately, and handling any errors.
    puts "User saved to database: #{@username}, #{@email}"
  end
end

# Usage:
# Creating a new instance of UserManager with specific user details.
user_manager = UserManager.new('JohnDoe', 'john@example.com')

# Calling the create_user method to initiate the user creation process.
user_manager.create_user

# Calling the save_to_database method to simulate saving the user to a database.
user_manager.save_to_database

# In this setup, the UserManager class violates the Single Responsibility Principle, as it is managing different aspects of user handling.
# If the way users are saved to the database changes, UserManager would need to change for a non-related reason, making the system harder to maintain.
`;

const withoutSingleResponsibilityRust = `
// Importing necessary components from the standard library.
use std::fmt;

// Defining a struct 'UserManager' that handles user-related operations.
// This struct violates the Single Responsibility Principle by handling both user creation logic and data management.
pub struct UserManager {
    username: String,
    email: String,
}

// Implementation of 'UserManager', providing the methods for the struct.
impl UserManager {
    // Function to construct a new 'UserManager' instance.
    pub fn new(username: String, email: String) -> Self {
        UserManager { username, email }
    }

    // Method to simulate user creation. It might include business logic related to user validation or setup.
    // Violation: This function manages user entity creation, which is a distinct responsibility separate from data management.
    pub fn create_user(&self) {
        // Logic for creating a user might go here.
        println!("User created: {}, {}", self.username, self.email);
    }

    // Method to simulate saving the user information to a database.
    // Violation: This function handles another separate concern of data persistence.
    // It should not be the responsibility of 'UserManager' to know how data is saved to the database.
    pub fn save_to_database(&self) {
        // Logic to save user data would be placed here.
        println!("User saved to database: {}, {}", self.username, self.email);
    }
}

// Implementing the Display trait for the UserManager struct to enable printing.
impl fmt::Display for UserManager {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "UserManager({} - {})", self.username, self.email)
    }
}

// Main function to run it as a standalone program. In a library, this would be excluded.
fn main() {
    // Constructing a new 'UserManager' instance with specific user information.
    let user_manager = UserManager::new("JohnDoe".to_string(), "john@example.com".to_string());

    // Creating a user.
    user_manager.create_user();

    // Simulating saving the user data to a database.
    user_manager.save_to_database();
    
    // The UserManager struct is handling multiple responsibilities in the code, violating the Single Responsibility Principle.
    // Changes in the process of how users are saved or created would require changes to the UserManager struct, 
    // potentially affecting multiple functionalities and increasing the risk of bugs.
}
`;

const withSingleResponsibilityPseudoCode = `
// Defining a 'User' class that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
Class User {
    Properties: username, email
    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.
}

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
Class UserCreator {
    Method CreateUser(user) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
    }
}

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
Class UserDatabase {
    Method SaveUser(user) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
    }
}

// Demonstrating usage of the classes, each with their single responsibility, in a workflow.

// Creating a 'User' object, which is only concerned with data storage.
user = new User('JohnDoe', 'john@example.com')

// 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
userCreator = new UserCreator()
userCreator.CreateUser(user)

// 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
userDatabase = new UserDatabase()
userDatabase.SaveUser(user)

// In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
// This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
`;

const withSingleResponsibilityJavascript = `// A simple class that constructs a user object.
// It's only responsible for maintaining user data, adhering to SRP.
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

// This class is responsible for user creation logic.
// It's separate from the User class, highlighting that creating a user
// is a responsibility separate from maintaining user data.
class UserCreator {
    createUser(user) {
        // Logic to create a user might go here.
        // This can involve validation, logging, or other creation-related tasks.
        console.log('User created:', user.username, user.email);
        // You can return the user or a status, depending on your logic.
    }
}

// This class handles saving user data to a database.
// It takes the user data and performs the database save operation, 
// separating this responsibility from user creation and the maintenance of user data.
class UserDatabase {
    saveUser(user) {
        // Logic to save user to the database goes here.
        // This might involve database operations like INSERT queries, transaction handling, etc.
        console.log('User saved to database:', user.username, user.email);
        // You can return a status or confirmation from here.
    }
}

// Usage:
// Creating a new user object.
const user = new User('JohnDoe', 'john@example.com');

// Creating instances of UserCreator and UserDatabase, highlighting that these
// functionalities are separate concerns and adhering to the Single Responsibility Principle.
const userCreator = new UserCreator();
const userDatabase = new UserDatabase();

// The createUser method may involve complex logic but it's abstracted from the main flow.
userCreator.createUser(user);

// The saveUser method handles the database operation, separate from the user creation logic.
userDatabase.saveUser(user);
`;
const withSingleResponsibilityJava = `
// Defining a 'User' class that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
class User {
    private String username;
    private String email;

    // Constructor for the User class
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.
}

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator {
    // Method to create a user
    public User createUser(String username, String email) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
        return new User(username, email);
    }
}

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase {
    // Method to save a user to the database
    public void saveUser(User user) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
        // Implement your database interaction logic here.
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating a 'User' object, which is only concerned with data storage.
        User user = new User("JohnDoe", "john@example.com");

        // 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
        UserCreator userCreator = new UserCreator();
        User createdUser = userCreator.createUser("Alice", "alice@example.com");

        // 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
        UserDatabase userDatabase = new UserDatabase();
        userDatabase.saveUser(user);

        // In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
        // This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
    }
}
`;

const withSingleResponsibilityPython = `
# Defining a 'User' class that is only responsible for maintaining user information.
# It does not handle responsibilities beyond storing the data that defines a user.
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

# 'UserCreator' class is solely responsible for the logic behind creating a user.
# This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator:
    def create_user(self, username, email):
        # Logic to create a user
        # This includes all the checks and initializations necessary for establishing a valid user.
        # No concern with how the user object is stored or used beyond creation logic.
        return User(username, email)

# 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
# It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase:
    def save_user(self, user):
        # Logic to save user to the database
        # This could include connecting to the database, structuring data, handling exceptions, etc.
        # No understanding of user object creation or other business logic is necessary here.
        # Implement your database interaction logic here.

# Demonstrating usage of the classes, each with their single responsibility, in a workflow.

# Creating a 'User' object, which is only concerned with data storage.
user = User("JohnDoe", "john@example.com")

# 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
user_creator = UserCreator()
created_user = user_creator.create_user("Alice", "alice@example.com")

# 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
user_database = UserDatabase()
user_database.save_user(user)

# In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
# This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
`;

const withSingleResponsibilityCHash = `
using System;

// Defining a 'User' class that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
class User
{
    public string Username { get; }
    public string Email { get; }

    public User(string username, string email)
    {
        Username = username;
        Email = email;
    }
}

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator
{
    public User CreateUser(string username, string email)
    {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
        return new User(username, email);
    }
}

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase
{
    public void SaveUser(User user)
    {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
        // Implement your database interaction logic here.
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Creating a 'User' object, which is only concerned with data storage.
        User user = new User("JohnDoe", "john@example.com");

        // 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
        UserCreator userCreator = new UserCreator();
        User createdUser = userCreator.CreateUser("Alice", "alice@example.com");

        // 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
        UserDatabase userDatabase = new UserDatabase();
        userDatabase.SaveUser(user);

        // In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
        // This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
    }
}`;

const withSingleResponsibilityPHP = `
<?php

// Defining a 'User' class that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
class User {
    public $username;
    public $email;
    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.

    // Constructor for the 'User' class, initializing the properties.
    public function __construct($username, $email) {
        $this->username = $username;
        $this->email = $email;
    }
}

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator {
    public function CreateUser($user) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
    }
}

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase {
    public function SaveUser($user) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
    }
}

// Demonstrating usage of the classes, each with their single responsibility, in a workflow.

// Creating a 'User' object, which is only concerned with data storage.
$user = new User('JohnDoe', 'john@example.com');

// 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
$userCreator = new UserCreator();
$userCreator->CreateUser($user);

// 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
$userDatabase = new UserDatabase();
$userDatabase->SaveUser($user);

// In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
// This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
?>`;

const withSingleResponsibilityCPP = `
#include <string>

// Defining a 'User' class that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
class User {
public:
    std::string username;
    std::string email;
    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.
    User(const std::string &username, const std::string &email) : username(username), email(email) {}
};

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator {
public:
    void CreateUser(User &user) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
    }
};

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase {
public:
    void SaveUser(User &user) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
    }
};

int main() {
    // Demonstrating usage of the classes, each with their single responsibility, in a workflow.

    // Creating a 'User' object, which is only concerned with data storage.
    User user("JohnDoe", "john@example.com");

    // 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
    UserCreator userCreator;
    userCreator.CreateUser(user);

    // 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
    UserDatabase userDatabase;
    userDatabase.SaveUser(user);

    // In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
    // This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.

    return 0;
}`;

const withSingleResponsibilityGo = `
package main

import "fmt"

// User struct is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
type User struct {
	username string
	email    string
	// Possibly more properties defining a user, but no methods manipulating those or handling other logic.
}

// UserCreator struct is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
type UserCreator struct{}

func (uc *UserCreator) CreateUser(user User) {
	// Logic to create a user
	// This includes all the checks and initializations necessary for establishing a valid user.
	// No concern with how the user object is stored or used beyond creation logic.
}

// UserDatabase struct is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
type UserDatabase struct{}

func (udb *UserDatabase) SaveUser(user User) {
	// Logic to save user to the database
	// This could include connecting to the database, structuring data, handling exceptions, etc.
	// No understanding of user object creation or other business logic is necessary here.
}

func main() {
	// Demonstrating usage of the structs, each with their single responsibility, in a workflow.

	// Creating a 'User' object, which is only concerned with data storage.
	user := User{username: "JohnDoe", email: "john@example.com"}

	// 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
	userCreator := UserCreator{}
	userCreator.CreateUser(user)

	// 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
	userDatabase := UserDatabase{}
	userDatabase.SaveUser(user)

	// In this flow, each struct and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
	// This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.

	fmt.Println("Workflow completed.")
}
`;

const withSingleResponsibilitySwift = `
import Foundation

// Defining a 'User' struct that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
struct User {
    var username: String
    var email: String
    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.
}

// 'UserCreator' class is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator {
    func createUser(user: User) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
    }
}

// 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase {
    func saveUser(user: User) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
    }
}

// Demonstrating usage of the classes, each with their single responsibility, in a workflow.
func main() {
    // Creating a 'User' object, which is only concerned with data storage.
    let user = User(username: "JohnDoe", email: "john@example.com")

    // 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
    let userCreator = UserCreator()
    userCreator.createUser(user: user)

    // 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
    let userDatabase = UserDatabase()
    userDatabase.saveUser(user: user)

    // In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
    // This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
}

// Call the main function to initiate the workflow demonstration.
main()`;

const withSingleResponsibilityRuby = `
# Defining a 'User' class that is only responsible for maintaining user information.
# It does not handle responsibilities beyond storing the data that defines a user.
class User
  attr_accessor :username, :email
  # Possibly more properties defining a user, but no methods manipulating those or handling other logic.

  def initialize(username, email)
    @username = username
    @email = email
  end
end

# 'UserCreator' class is solely responsible for the logic behind creating a user.
# This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
class UserCreator
  def create_user(user)
    # Logic to create a user
    # This includes all the checks and initializations necessary for establishing a valid user.
    # No concern with how the user object is stored or used beyond creation logic.
  end
end

# 'UserDatabase' class is dedicated only to handling the database interactions for a user object.
# It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
class UserDatabase
  def save_user(user)
    # Logic to save user to the database
    # This could include connecting to the database, structuring data, handling exceptions, etc.
    # No understanding of user object creation or other business logic is necessary here.
  end
end

# Demonstrating usage of the classes, each with their single responsibility, in a workflow.

# Creating a 'User' object, which is only concerned with data storage.
user = User.new('JohnDoe', 'john@example.com')

# 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
user_creator = UserCreator.new
user_creator.create_user(user)

# 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
user_database = UserDatabase.new
user_database.save_user(user)

# In this flow, each class and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
# This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
`;

const withSingleResponsibilityRust = `
// The Rust language does not have classes; it uses structs and impl blocks for methods.
// Here's how you might set up your code:

// Defining a 'User' struct that is only responsible for maintaining user information.
// It does not handle responsibilities beyond storing the data that defines a user.
pub struct User {
    username: String,
    email: String,
    // Possibly more properties defining a user, but no methods manipulating those or handling other logic.
}

// 'UserCreator' struct is solely responsible for the logic behind creating a user.
// This separation adheres to SRP as it's only tasked with ensuring the correct creation of a user object.
pub struct UserCreator;

impl UserCreator {
    pub fn create_user(&self, user: &User) {
        // Logic to create a user
        // This includes all the checks and initializations necessary for establishing a valid user.
        // No concern with how the user object is stored or used beyond creation logic.
    }
}

// 'UserDatabase' struct is dedicated only to handling the database interactions for a user object.
// It doesn't need to know the user creation logic; its sole responsibility is to save the user object.
pub struct UserDatabase;

impl UserDatabase {
    pub fn save_user(&self, user: &User) {
        // Logic to save user to the database
        // This could include connecting to the database, structuring data, handling exceptions, etc.
        // No understanding of user object creation or other business logic is necessary here.
    }
}

fn main() {
    // Demonstrating usage of the structs, each with their single responsibility, in a workflow.

    // Creating a 'User' object, which is only concerned with data storage.
    let user = User {
        username: "JohnDoe".to_string(),
        email: "john@example.com".to_string(),
    };

    // 'UserCreator' is used to initialize and potentially validate a new user, ensuring it adheres to business rules.
    let user_creator = UserCreator;
    user_creator.create_user(&user);

    // 'UserDatabase' handles the saving of the user object, abstracting away the specifics of database interaction.
    let user_database = UserDatabase;
    user_database.save_user(&user);

    // In this flow, each struct and method has its own distinct responsibility, adhering to the Single Responsibility Principle.
    // This makes the code more maintainable and modular, reducing the complexity of each component and making debugging and testing easier.
}
`;

export {
  withSingleResponsibilityPseudoCode,
  withSingleResponsibilityCHash,
  withSingleResponsibilityCPP,
  withSingleResponsibilityGo,
  withSingleResponsibilityJava,
  withSingleResponsibilityJavascript,
  withSingleResponsibilityPHP,
  withSingleResponsibilityPython,
  withSingleResponsibilityRuby,
  withSingleResponsibilityRust,
  withSingleResponsibilitySwift,
  withoutSingleResponsibilityCHash,
  withoutSingleResponsibilityGo,
  withoutSingleResponsibilityCPP,
  withoutSingleResponsibilityJava,
  withoutSingleResponsibilityJavascript,
  withoutSingleResponsibilityPHP,
  withoutSingleResponsibilityPseudoCode,
  withoutSingleResponsibilityPython,
  withoutSingleResponsibilityRust,
  withoutSingleResponsibilitySwift,
  withoutSingleResponsibilityRuby,
};
