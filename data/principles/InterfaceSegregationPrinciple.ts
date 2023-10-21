const withInterfaceSegregationPseudoCode = `
// We break down the fat interface into smaller, more specific ones.

Interface WorkTask {
    function workOnTask()
}

Interface Lunch {
    function eatLunch()
}

Interface ExtraWork {
    function workOnExtraTask()
}

// Now, classes can implement only the interfaces they need.

Class HumanWorker implements WorkTask, Lunch, ExtraWork {
    function workOnTask() {
        // work on regular tasks
    }

    function eatLunch() {
        // human eating lunch
    }

    function workOnExtraTask() {
        // work on an extra task
    }
}

Class RobotWorker implements WorkTask, ExtraWork {
    function workOnTask() {
        // work on regular tasks
    }

    // No eatLunch() method here because the robot doesn't eat. The class is not forced to implement it anymore.

    function workOnExtraTask() {
        // work on an extra task
    }
}

// This way, the RobotWorker doesn't need to worry about the eatLunch() method anymore, adhering to the Interface Segregation Principle.

`;

const withoutInterfaceSegregationPseudoCode = `
// Here, we have a fat interface that requires implementing all methods for any class that uses it.

Interface WorkTasks {
    function workOnTask()
    function eatLunch()
    function workOnExtraTask()
}

// This class has to implement all functions, even if it doesn't use them all.
Class HumanWorker implements WorkTasks {
    function workOnTask() {
        // work on regular tasks
    }

    function eatLunch() {
        // human eating lunch
    }

    function workOnExtraTask() {
        // work on an extra task
    }
}

Class RobotWorker implements WorkTasks {
    function workOnTask() {
        // work on regular tasks
    }

    function eatLunch() {
        // Robots don't eat, so this method shouldn't be here.
        // However, due to the fat interface, it has to be.
    }

    function workOnExtraTask() {
        // work on an extra task
    }
}

// As we see, RobotWorker has a useless function eatLunch() that it's forced to implement. This is a violation of ISP.

`;
const withInterfaceSegregationCHash = `
using System;

// We have split the responsibilities into separate interfaces.
public interface IWorkTask
{
    void WorkOnTask();
}

public interface ILunch
{
    void EatLunch();
}

public interface IExtraWork
{
    void WorkOnExtraTask();
}

// Now, classes can implement only the interfaces they need.
public class HumanWorker : IWorkTask, ILunch, IExtraWork
{
    public void WorkOnTask()
    {
        Console.WriteLine("Human working on a regular task.");
    }

    public void EatLunch()
    {
        Console.WriteLine("Human eating lunch.");
    }

    public void WorkOnExtraTask()
    {
        Console.WriteLine("Human working on an extra task.");
    }
}

public class RobotWorker : IWorkTask, IExtraWork
{
    public void WorkOnTask()
    {
        Console.WriteLine("Robot working on a regular task.");
    }

    // No EatLunch() method here because the robot doesn't need it.

    public void WorkOnExtraTask()
    {
        Console.WriteLine("Robot working on an extra task.");
    }
}

// The RobotWorker class now only contains relevant methods, adhering to the Interface Segregation Principle.

`;
const withoutInterfaceSegregationCHash = `
using System;

// Here, we have a monolithic interface that requires implementing all methods for any class that uses it.
public interface IWorkTasks
{
    void WorkOnTask();
    void EatLunch();
    void WorkOnExtraTask();
}

// HumanWorker is forced to implement every method, even if they don't all make sense for this type.
public class HumanWorker : IWorkTasks
{
    public void WorkOnTask()
    {
        Console.WriteLine("Human working on a regular task.");
    }

    public void EatLunch()
    {
        Console.WriteLine("Human eating lunch.");
    }

    public void WorkOnExtraTask()
    {
        Console.WriteLine("Human working on an extra task.");
    }
}

// RobotWorker doesn't need to eat, but it's still forced to implement EatLunch() because of the interface.
public class RobotWorker : IWorkTasks
{
    public void WorkOnTask()
    {
        Console.WriteLine("Robot working on a regular task.");
    }

    public void EatLunch()
    {
        // This method doesn't make sense for a robot.
        throw new NotImplementedException("Robots do not eat.");
    }

    public void WorkOnExtraTask()
    {
        Console.WriteLine("Robot working on an extra task.");
    }
}

// The RobotWorker has to have the EatLunch method, even though it doesn't use it. This is a violation of the Interface Segregation Principle.

`;
const withInterfaceSegregationCPP = `
#include <iostream>

// Separate "interfaces" (abstract classes with pure virtual methods)
class IWorkTask {
public:
    virtual void WorkOnTask() = 0;
};

class ILunch {
public:
    virtual void EatLunch() = 0;
};

class IExtraWork {
public:
    virtual void WorkOnExtraTask() = 0;
};

// HumanWorker can implement all interfaces that are relevant
class HumanWorker : public IWorkTask, public ILunch, public IExtraWork {
public:
    void WorkOnTask() override {
        std::cout << "Human working on a regular task." << std::endl;
    }

    void EatLunch() override {
        std::cout << "Human eating lunch." << std::endl;
    }

    void WorkOnExtraTask() override {
        std::cout << "Human working on an extra task." << std::endl;
    }
};

// RobotWorker only implements what's necessary
class RobotWorker : public IWorkTask, public IExtraWork {
public:
    void WorkOnTask() override {
        std::cout << "Robot working on a regular task." << std::endl;
    }

    // No EatLunch method here

    void WorkOnExtraTask() override {
        std::cout << "Robot working on an extra task." << std::endl;
    }
};

// Now, each class only has methods that make sense for it. The RobotWorker doesn't have the unnecessary EatLunch method.


`;
const withoutInterfaceSegregationCPP = `
#include <iostream>

// 'IWorkTasks' acts similarly to an interface in C# or Java
class IWorkTasks {
public:
    virtual void WorkOnTask() = 0; // Pure virtual function
    virtual void EatLunch() = 0;
    virtual void WorkOnExtraTask() = 0;
};

// HumanWorker needs to implement all methods, relevant or not
class HumanWorker : public IWorkTasks {
public:
    void WorkOnTask() override {
        std::cout << "Human working on a regular task." << std::endl;
    }

    void EatLunch() override {
        std::cout << "Human eating lunch." << std::endl;
    }

    void WorkOnExtraTask() override {
        std::cout << "Human working on an extra task." << std::endl;
    }
};

// RobotWorker doesn't need to eat but still has to implement EatLunch
class RobotWorker : public IWorkTasks {
public:
    void WorkOnTask() override {
        std::cout << "Robot working on a regular task." << std::endl;
    }

    void EatLunch() override {
        // Not applicable for robots
        std::cout << "Robot cannot eat lunch." << std::endl;
    }

    void WorkOnExtraTask() override {
        std::cout << "Robot working on an extra task." << std::endl;
    }
};

// Both HumanWorker and RobotWorker classes are forced to implement functions they don't use.


`;
const withInterfaceSegregationGo = `
package main

import "fmt"

// WorkTask interface for working on tasks.
type WorkTask interface {
    WorkOnTask()
}

// LunchTask interface for having lunch.
type LunchTask interface {
    EatLunch()
}

// ExtraWorkTask interface for working on extra tasks.
type ExtraWorkTask interface {
    WorkOnExtraTask()
}

// HumanWorker struct for a human worker.
type HumanWorker struct{}

// RobotWorker struct for a robot worker.
type RobotWorker struct{}

// WorkOnTask method showing that the human is working on a task.
func (hw HumanWorker) WorkOnTask() {
    fmt.Println("Human working on a regular task.")
}

// EatLunch method showing that the human is eating lunch.
func (hw HumanWorker) EatLunch() {
    fmt.Println("Human eating lunch.")
}

// WorkOnExtraTask method showing that the human is working on an extra task.
func (hw HumanWorker) WorkOnExtraTask() {
    fmt.Println("Human working on an extra task.")
}

// WorkOnTask method showing that the robot is working on a task.
func (rw RobotWorker) WorkOnTask() {
    fmt.Println("Robot working on a regular task.")
}

// WorkOnExtraTask method showing that the robot is working on an extra task.
func (rw RobotWorker) WorkOnExtraTask() {
    fmt.Println("Robot working on an extra task.")
}

func main() {
    var worker1 WorkTask = HumanWorker{}
    var lunchEater LunchTask = HumanWorker{}
    var extraWorker ExtraWorkTask = HumanWorker{}

    var worker2 WorkTask = RobotWorker{}
    // No LunchTask for robots; they don't eat.
    var extraWorker2 ExtraWorkTask = RobotWorker{}

    worker1.WorkOnTask()
    lunchEater.EatLunch()
    extraWorker.WorkOnExtraTask()

    worker2.WorkOnTask()
    extraWorker2.WorkOnExtraTask()
    // Everything makes sense. Each type of worker only has methods that are applicable to it.
}

`;
const withoutInterfaceSegregationGo = `
package main

import "fmt"

// WorkerTasks interface representing tasks that a worker can do.
type WorkerTasks interface {
    WorkOnTask()
    EatLunch()
    WorkOnExtraTask()
}

// HumanWorker struct for a human worker.
type HumanWorker struct{}

// RobotWorker struct for a robot worker.
type RobotWorker struct{}

// WorkOnTask method showing that the human is working on a task.
func (hw HumanWorker) WorkOnTask() {
    fmt.Println("Human working on a regular task.")
}

// EatLunch method showing that the human is eating lunch.
func (hw HumanWorker) EatLunch() {
    fmt.Println("Human eating lunch.")
}

// WorkOnExtraTask method showing that the human is working on an extra task.
func (hw HumanWorker) WorkOnExtraTask() {
    fmt.Println("Human working on an extra task.")
}

// WorkOnTask method showing that the robot is working on a task.
func (rw RobotWorker) WorkOnTask() {
    fmt.Println("Robot working on a regular task.")
}

// EatLunch method that doesn't apply to the robot but is required by the interface.
func (rw RobotWorker) EatLunch() {
    // Robots don't eat, so this method shouldn't really exist for RobotWorker.
}

// WorkOnExtraTask method showing that the robot is working on an extra task.
func (rw RobotWorker) WorkOnExtraTask() {
    fmt.Println("Robot working on an extra task.")
}

func main() {
    var worker1 WorkerTasks = HumanWorker{}
    var worker2 WorkerTasks = RobotWorker{}

    worker1.WorkOnTask()
    worker1.EatLunch()
    worker1.WorkOnExtraTask()

    worker2.WorkOnTask()
    // worker2's EatLunch method doesn't make sense, but it's still implemented because of the WorkerTasks interface.
    worker2.WorkOnExtraTask()
}

`;
const withInterfaceSegregationJava = `
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public class HumanWorker implements Workable, Eatable {
    @Override
    public void work() {
        // Human working...
        System.out.println("Human is working.");
    }

    @Override
    public void eat() {
        // Human eating...
        System.out.println("Human is eating.");
    }
}

public class RobotWorker implements Workable {
    @Override
    public void work() {
        // Robot working...
        System.out.println("Robot is working.");
    }

    // No need to implement 'eat' for a robot.
}

public class Main {
    public static void main(String[] args) {
        HumanWorker human = new HumanWorker();
        human.work();
        human.eat();  // Makes sense for a human.

        RobotWorker robot = new RobotWorker();
        robot.work();
        // No 'eat' method for robot, and thus no chance of misuse or errors.
    }
}

`;
const withoutInterfaceSegregationJava = `
public interface Worker {
    void work();
    void eat();
}

public class HumanWorker implements Worker {
    @Override
    public void work() {
        // Human working...
        System.out.println("Human is working.");
    }

    @Override
    public void eat() {
        // Human eating...
        System.out.println("Human is eating.");
    }
}

public class RobotWorker implements Worker {
    @Override
    public void work() {
        // Robot working...
        System.out.println("Robot is working.");
    }

    @Override
    public void eat() {
        // Robots don't eat, so this shouldn't be here.
        throw new UnsupportedOperationException("Robots don't eat.");
    }
}

public class Main {
    public static void main(String[] args) {
        Worker human = new HumanWorker();
        human.work();
        human.eat();  // Makes sense for a human.

        Worker robot = new RobotWorker();
        robot.work();
        try {
            robot.eat();  // Doesn't make sense for a robot and throws an exception.
        } catch (UnsupportedOperationException e) {
            e.printStackTrace();
        }
    }
}

`;
const withInterfaceSegregationJavascript = `
class Workable {
    work() {
        // method to be overridden by actual worker
        throw new Error("Method 'work()' must be implemented.");
    }
}

class Eatable {
    eat() {
        // method to be overridden by actual worker
        throw new Error("Method 'eat()' must be implemented.");
    }
}

class HumanWorker {
    constructor() {
        this.workable = new Workable();
        this.eatable = new Eatable();
    }

    work() {
        this.workable.work();
    }

    eat() {
        this.eatable.eat();
    }
}

// Implementing the 'work' functionality directly in the class, since it's the only needed one.
class RobotWorker {
    work() {
        console.log("Robot is working.");
    }
}

// Correcting the HumanWorker's methods
HumanWorker.prototype.work = function() {
    console.log("Human is working.");
};

HumanWorker.prototype.eat = function() {
    console.log("Human is eating.");
};

// usage
const human = new HumanWorker();
human.work(); // Output: Human is working.
human.eat(); // Output: Human is eating.

const robot = new RobotWorker();
robot.work(); // Output: Robot is working.
// robot.eat(); // This line would cause an error if uncommented, as RobotWorker doesn't have an eat method.

`;
const withoutInterfaceSegregationJavascript = `
class Worker {
    work() {
        // method to be overridden by actual worker
        throw new Error("Method 'work()' must be implemented.");
    }

    eat() {
        // method to be overridden by actual worker
        throw new Error("Method 'eat()' must be implemented.");
    }
}

class HumanWorker extends Worker {
    work() {
        console.log("Human is working.");
    }

    eat() {
        console.log("Human is eating.");
    }
}

class RobotWorker extends Worker {
    work() {
        console.log("Robot is working.");
    }

    eat() {
        // Not applicable for robots, but we're forced to implement it.
        console.log("Robot cannot eat, but I have to implement this method.");
    }
}

// usage
const human = new HumanWorker();
human.work(); // Output: Human is working.
human.eat(); // Output: Human is eating.

const robot = new RobotWorker();
robot.work(); // Output: Robot is working.
robot.eat(); // Output: Robot cannot eat, but I have to implement this method.

`;
const withInterfaceSegregationPHP = `
<?php

interface WorkableInterface {
    public function work();
}

interface EatableInterface {
    public function eat();
}

class HumanWorker implements WorkableInterface, EatableInterface {
    public function work() {
        // ... working
        echo "Human working\n";
    }

    public function eat() {
        // ... eating
        echo "Human eating\n";
    }
}

class RobotWorker implements WorkableInterface {
    public function work() {
        // ... working
        echo "Robot working\n";
    }
    // No need to implement 'eat' method
}

// Usage
$human = new HumanWorker();
$human->work(); // Human working
$human->eat();  // Human eating

$robot = new RobotWorker();
$robot->work(); // Robot working
// $robot->eat(); // Not available, no method error if called

?>

`;

const withoutInterfaceSegregationPHP = `
<?php

interface WorkerInterface {
    public function work();
    public function eat();
}

class HumanWorker implements WorkerInterface {
    public function work() {
        // ... working
        echo "Human working\n";
    }

    public function eat() {
        // ... eating
        echo "Human eating\n";
    }
}

class RobotWorker implements WorkerInterface {
    public function work() {
        // ... working
        echo "Robot working\n";
    }

    public function eat() {
        // Not applicable for robots, but method needs to be present due to the interface.
        throw new Exception('Robot cannot eat, but forced to implement method.');
    }
}

// Usage
try {
    $human = new HumanWorker();
    $human->work(); // Human working
    $human->eat();  // Human eating

    $robot = new RobotWorker();
    $robot->work(); // Robot working
    $robot->eat();  // Exception: Robot cannot eat, but forced to implement method.
} catch(Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>

`;
const withInterfaceSegregationPython = `
from abc import ABC, abstractmethod

class WorkableInterface(ABC):
    
    @abstractmethod
    def work(self):
        pass

class EatableInterface(ABC):
    
    @abstractmethod
    def eat(self):
        pass

class HumanWorker(WorkableInterface, EatableInterface):
    
    def work(self):
        print("Human working")
    
    def eat(self):
        print("Human eating")

class RobotWorker(WorkableInterface):
    
    def work(self):
        print("Robot working")
    
    # No need to implement 'eat' method because RobotWorker doesn't implement EatableInterface

# Usage
human = HumanWorker()
human.work()  # Output: Human working
human.eat()   # Output: Human eating

robot = RobotWorker()
robot.work()  # Output: Robot working
# robot.eat() would raise an AttributeError if called, as the method doesn't exist for robot objects

`;

const withoutInterfaceSegregationPython = `
from abc import ABC, abstractmethod

class WorkerInterface(ABC):
    
    @abstractmethod
    def work(self):
        pass
    
    @abstractmethod
    def eat(self):
        pass

class HumanWorker(WorkerInterface):
    
    def work(self):
        print("Human working")
    
    def eat(self):
        print("Human eating")

class RobotWorker(WorkerInterface):
    
    def work(self):
        print("Robot working")
    
    def eat(self):
        # Robots don't eat, but we need to implement the method because of the interface
        raise NotImplementedError("Robots don't eat")

# Usage
human = HumanWorker()
human.work()  # Output: Human working
human.eat()   # Output: Human eating

robot = RobotWorker()
robot.work()  # Output: Robot working
try:
    robot.eat()  # Raises NotImplementedError
except NotImplementedError as e:
    print(f"Error: {e}")

`;
const withInterfaceSegregationRuby = `
module WorkableInterface
  def work
    raise NotImplementedError, 'Implement this method in a subclass'
  end
end

module EatableInterface
  def eat
    raise NotImplementedError, 'Implement this method in a subclass'
  end
end

class HumanWorker
  include WorkableInterface
  include EatableInterface

  def work
    puts 'Human working'
  end

  def eat
    puts 'Human eating'
  end
end

class RobotWorker
  include WorkableInterface

  def work
    puts 'Robot working'
  end

  # No need to implement 'eat' method as it's not part of the WorkableInterface
end

# Usage
human = HumanWorker.new
human.work  # Output: Human working
human.eat   # Output: Human eating

robot = RobotWorker.new
robot.work  # Output: Robot working
# robot.eat would cause a NoMethodError if called, as 'eat' is not defined for RobotWorker

`;
const withoutInterfaceSegregationRuby = `
module WorkerInterface
  def work
    raise NotImplementedError, 'Implement this method in a subclass'
  end

  def eat
    raise NotImplementedError, 'Implement this method in a subclass'
  end
end

class HumanWorker
  include WorkerInterface

  def work
    puts 'Human working'
  end

  def eat
    puts 'Human eating'
  end
end

class RobotWorker
  include WorkerInterface

  def work
    puts 'Robot working'
  end

  # The RobotWorker class is forced to implement an 'eat' method that it doesn't need.
  def eat
    # Not applicable for robots, but we're forced to define this because of our interface
    raise 'Robots do not eat'
  end
end

# Usage
human = HumanWorker.new
human.work  # Output: Human working
human.eat   # Output: Human eating

robot = RobotWorker.new
robot.work  # Output: Robot working
begin
  robot.eat   # Raises an error: Robots do not eat
rescue => e
  puts "Error: #{e.message}"
end

`;
const withInterfaceSegregationRust = `
// Separate traits are defined following the Interface Segregation Principle.
trait Workable {
    fn work(&self);
}

trait Eatable {
    fn eat(&self);
}

struct HumanWorker;

impl Workable for HumanWorker {
    fn work(&self) {
        println!("Human working");
    }
}

impl Eatable for HumanWorker {
    fn eat(&self) {
        println!("Human eating");
    }
}

struct RobotWorker;

impl Workable for RobotWorker {
    fn work(&self) {
        println!("Robot working");
    }

    // No need to implement 'eat', because RobotWorker doesn't implement Eatable.
}

fn main() {
    let human = HumanWorker;
    human.work();  // Output: Human working
    human.eat();   // Output: Human eating

    let robot = RobotWorker;
    robot.work();  // Output: Robot working
    // robot.eat(); This line wouldn't compile if uncommented, because RobotWorker doesn't implement Eatable.
}

`;
const withoutInterfaceSegregationRust = `
// Defining a trait that encompasses more functionality than some implementors require
trait Worker {
    fn work(&self);
    fn eat(&self);
}

struct HumanWorker;

impl Worker for HumanWorker {
    fn work(&self) {
        println!("Human working");
    }

    fn eat(&self) {
        println!("Human eating");
    }
}

struct RobotWorker;

impl Worker for RobotWorker {
    fn work(&self) {
        println!("Robot working");
    }

    // Robots don't need to eat, but we still have to implement this method due to the trait.
    fn eat(&self) {
        // Not applicable for robots.
    }
}

fn main() {
    let human = HumanWorker;
    human.work();  // Output: Human working
    human.eat();   // Output: Human eating

    let robot = RobotWorker;
    robot.work();  // Output: Robot working
    // robot.eat(); There's no output or action for this line if uncommented.
}

`;
const withInterfaceSegregationSwift = `
import Foundation

// Creating separate protocols
protocol Workable {
    func work()
}

protocol Eatable {
    func eat()
}

// HumanWorker needs to eat and work, so it conforms to both protocols
class HumanWorker: Workable, Eatable {
    func work() {
        print("Human working")
    }
    
    func eat() {
        print("Human eating")
    }
}

// RobotWorker only needs to work, so it only conforms to Workable
class RobotWorker: Workable {
    func work() {
        print("Robot working")
    }

    // No need to implement 'eat'
}

// Usage
let workers: [Workable] = [HumanWorker(), RobotWorker()]
workers.forEach { $0.work() }  // Both human and robot will work

let eaters: [Eatable] = [HumanWorker()]  // Only humans can eat
eaters.forEach { $0.eat() }  // Only appropriate entities will eat

`;

const withoutInterfaceSegregationSwift = `
import Foundation

// A protocol that requires conforming types to implement all methods
protocol Worker {
    func work()
    func eat()
}

// HumanWorker conforms to Worker, so it needs to implement all methods
class HumanWorker: Worker {
    func work() {
        print("Human working")
    }
    
    func eat() {
        print("Human eating")
    }
}

// RobotWorker doesn't need to eat but still has to conform to Worker
class RobotWorker: Worker {
    func work() {
        print("Robot working")
    }
    
    func eat() {
        // Robots don't eat, but we're forced to implement this method.
    }
}

// Usage
let workers: [Worker] = [HumanWorker(), RobotWorker()]
workers.forEach { $0.work() }  // Both human and robot will work
workers.forEach { $0.eat() }   // Inappropriate for robot to have 'eat' behavior

`;

export {
  withInterfaceSegregationPseudoCode,
  withInterfaceSegregationCHash,
  withInterfaceSegregationCPP,
  withInterfaceSegregationGo,
  withInterfaceSegregationJava,
  withInterfaceSegregationJavascript,
  withInterfaceSegregationPHP,
  withInterfaceSegregationPython,
  withInterfaceSegregationRuby,
  withInterfaceSegregationRust,
  withInterfaceSegregationSwift,
  withoutInterfaceSegregationCHash,
  withoutInterfaceSegregationGo,
  withoutInterfaceSegregationCPP,
  withoutInterfaceSegregationJava,
  withoutInterfaceSegregationJavascript,
  withoutInterfaceSegregationPHP,
  withoutInterfaceSegregationPseudoCode,
  withoutInterfaceSegregationPython,
  withoutInterfaceSegregationRust,
  withoutInterfaceSegregationSwift,
  withoutInterfaceSegregationRuby,
};
