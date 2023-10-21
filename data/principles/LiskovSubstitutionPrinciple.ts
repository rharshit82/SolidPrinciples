const withLiskovSubstitutionPseudoCode = `
Class Bird {
}

Class FlyingBird Inherits Bird {
    Method fly() {
        // Code for flying, applicable to birds that can fly.
    }
}

Class Penguin Inherits Bird {
    // Penguin class doesn't have fly method, adhering to LSP.
}

Function makeBirdFly(FlyingBird bird) {
    bird.fly();  // This is correct as we are sure that the bird passed to this function can fly.
}

// Usage
FlyingBird sparrow = new FlyingBird();
makeBirdFly(sparrow);  // Correct usage, LSP is not violated.

Bird penguin = new Penguin();
// makeBirdFly(penguin); would be an error if uncommented because the penguin is not a FlyingBird, preserving LSP.

`;
const withLiskovSubstitutionCHash = `
using System;

public abstract class Bird
{
    // Basic bird class doesn't assume all birds can fly.
}

public class FlyingBird : Bird
{
    public virtual void Fly()
    {
        Console.WriteLine("Flying...");
    }
}

public class Penguin : Bird
{
    // Penguin is a bird but doesn't fly, and we don't implement a Fly method here.
}

public class Program
{
    public static void MakeBirdFly(FlyingBird bird)
    {
        // This method now specifically requires a FlyingBird, 
        // ensuring at compile time that the bird can fly.
        bird.Fly();
    }

    public static void Main()
    {
        FlyingBird sparrow = new FlyingBird();
        MakeBirdFly(sparrow);  // This is correct usage.

        Bird penguin = new Penguin();
        // MakeBirdFly(penguin);  // This is incorrect and now caught at compile time, not runtime, avoiding LSP violation.
    }
}

`;
const withLiskovSubstitutionCPP = `
#include <iostream>

// Base class
class Bird {
    // Intentionally empty: serves as a base type for birds
};

class FlyingBird : public Bird {
public:
    virtual void fly() {
        std::cout << "Flying...\n";
    }
};

// Subclass specifically for birds that do not fly
class Penguin : public Bird {
    // Penguin doesn't override fly because it can't fly.
    // No misleading representation here.
};

void makeBirdFly(FlyingBird& bird) {
    bird.fly();  // We're certain that we have birds that can fly here.
}

int main() {
    FlyingBird sparrow;
    // This works as expected since sparrows can fly.
    makeBirdFly(sparrow);

    Penguin penguin;
    // makeBirdFly(penguin); would cause a compiler error, avoiding the LSP violation.

    return 0;
}

`;
const withLiskovSubstitutionGo = `
package main

import (
	"fmt"
)

// Flyer interface that declares a method for flying behavior.
type Flyer interface {
	Fly()
}

// Bird struct can represent general birds without assuming specific behaviors.
type Bird struct{}

// FlyingBird struct represents birds that can fly.
type FlyingBird struct{}

// Fly method implementation for birds that can fly.
func (fb *FlyingBird) Fly() {
	fmt.Println("Flying...")
}

// Penguin struct for birds that cannot fly.
type Penguin struct{}

func makeItFly(f Flyer) {
	f.Fly() // We're certain that we have something that can fly.
}

func main() {
	flyingBird := &FlyingBird{}

	// This works because flyingBird implements the Flyer interface.
	makeItFly(flyingBird)

	penguin := &Penguin{}
	// makeItFly(penguin) // This won't compile because Penguin doesn't implement Flyer, adhering to LSP.
}

`;
const withLiskovSubstitutionJava = `
// The 'Bird' class doesn't have a 'fly' method anymore, making it a valid base class for all birds.
class Bird {}

// The 'FlyingBird' class is a subtype of 'Bird' that can fly.
class FlyingBird extends Bird {
    public void fly() {
        System.out.println("Flying...");
    }
}

// 'Penguin' is a subtype of 'Bird' but doesn't inherit 'fly' behavior.
class Penguin extends Bird {
    // Penguins can't fly, so we don't implement 'fly' method here.
}

public class Main {
    public static void makeItFly(FlyingBird bird) {
        bird.fly();
    }

    public static void main(String[] args) {
        FlyingBird sparrow = new FlyingBird();
        makeItFly(sparrow);  // This works well because sparrows can fly.

        Penguin penguin = new Penguin();
        // makeItFly(penguin);  // This wouldn't compile because Penguin isn't a FlyingBird, adhering to LSP.
    }
}

`;
const withLiskovSubstitutionJavascript = `
class Bird {
    // The Bird class doesn't assume that all birds can fly.
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flying...");
    }
}

class Penguin extends Bird {
    // The Penguin class doesn't have a 'fly' method because penguins can't fly.
}

function makeBirdFly(bird) {
    // We're checking if the 'fly' function exists before calling it.
    if (typeof bird.fly === 'function') {
        bird.fly();
    } else {
        console.log("This bird can't fly!");
    }
}

const myFlyingBird = new FlyingBird();
makeBirdFly(myFlyingBird); // Outputs: "Flying..."

const myPenguin = new Penguin();
makeBirdFly(myPenguin); // Outputs: "This bird can't fly!"

`;
const withLiskovSubstitutionPHP = `
<?php

class Bird {
    // The Bird class doesn't implement fly, acknowledging that not all birds fly.
}

class FlyingBird extends Bird {
    public function fly() {
        echo "Flying...\n";
    }
}

class Penguin extends Bird {
    // Penguin is a bird but doesn't fly, and it doesn't need to override fly().
}

function makeBirdFly(FlyingBird $bird) {
    // This function now explicitly requires flying birds, avoiding the issue altogether.
    $bird->fly();
}

// This works because FlyingBird implements fly().
$flyingBird = new FlyingBird();
makeBirdFly($flyingBird);

// This won't work and will throw a compile-time error, preventing the issue.
$penguin = new Penguin();
// makeBirdFly($penguin); // Uncommenting this line will lead to a compiler error, not a runtime failure.

?>

`;
const withLiskovSubstitutionPython = `
class Bird:
    # In this version, we're not assuming all birds can fly, so there's no 'fly' method here.
    pass

class FlyingBird(Bird):
    def fly(self):
        print("Flying...")

class Penguin(Bird):
    # 'Penguin' is a type of 'Bird' that doesn't fly, so we don't implement 'fly' here.
    pass

def make_bird_fly(bird):
    # We check if 'bird' is an instance of 'FlyingBird' before calling 'fly'.
    if isinstance(bird, FlyingBird):
        bird.fly()
    else:
        print("This bird doesn't fly.")

# Testing with a FlyingBird instance. This should work.
flying_bird = FlyingBird()
make_bird_fly(flying_bird)

# Testing with a Penguin instance. This won't cause an error, and the function handles the situation gracefully.
penguin = Penguin()
make_bird_fly(penguin)  # Outputs: "This bird doesn't fly."

`;
const withLiskovSubstitutionRuby = `
class Bird
  # Other bird-related behavior
end

class FlyingBird < Bird
  def fly
    puts 'Flying...'
  end
end

class Penguin < Bird
  # Penguins can't fly, so we don't implement the fly method here
end

def make_bird_fly(bird)
  if bird.respond_to?(:fly)
    bird.fly
  else
    puts 'This bird does not fly.'
  end
end

flying_bird = FlyingBird.new
make_bird_fly(flying_bird) # Outputs: 'Flying...'

penguin = Penguin.new
make_bird_fly(penguin) # Outputs: 'This bird does not fly.'

`;
const withLiskovSubstitutionRust = `
// Separate traits to respect the fact that not all birds can fly.
pub trait Bird {}

pub trait FlyingBird: Bird {
    fn fly(&self);
}

pub struct RegularBird;
pub struct Penguin;

impl Bird for RegularBird {}
impl Bird for Penguin {}

impl FlyingBird for RegularBird {
    fn fly(&self) {
        println!("Flying...");
    }
}

// Function that expects something that can fly, adhering to LSP.
fn make_bird_fly<T: FlyingBird>(bird: &T) {
    bird.fly(); // No panic, as we're sure the bird can fly.
}

fn main() {
    let bird = RegularBird;
    make_bird_fly(&bird); // Works as expected.

    // The following won't compile, which is good. The compiler catches the error.
    // let penguin = Penguin;
    // make_bird_fly(&penguin); // Compile-time error. Penguins aren't FlyingBirds.
}

`;
const withLiskovSubstitutionSwift = `
import Foundation

// Base class, without the assumption that all birds can fly.
class Bird {
    // ... other methods common to all birds
}

// Subclass specifically for birds that can fly
class FlyingBird: Bird {
    func fly() {
        print("Flying...")
    }
}

// Subclass for birds that cannot fly, with no 'fly' method.
class Penguin: Bird {
    // ... other methods specific to penguins
}

// Function expecting a FlyingBird. It's safe because it expects a bird that can fly.
func makeBirdFly(_ bird: FlyingBird) {
    bird.fly() // No risk of runtime errors since we're sure the bird can fly.
}

// Works as expected.
let flyingBird = FlyingBird()
makeBirdFly(flyingBird)

// This won't compile, which is good because we catch the error at compile time rather than runtime.
// let penguin = Penguin()
// makeBirdFly(penguin) // Uncommenting this will cause a compiler error.

`;
const withoutLiskovSubstitutionCHash = `
using System;

public class Bird
{
    public virtual void Fly()
    {
        Console.WriteLine("Flying...");
    }
}

public class Penguin : Bird
{
    public override void Fly()
    {
        // Penguins can't fly, and this method doesn't make sense for the Penguin class.
        throw new NotSupportedException("Penguins can't fly.");
    }
}

public class Program
{
    public static void MakeBirdFly(Bird bird)
    {
        // This method assumes all birds can fly, which isn't true for penguins.
        bird.Fly();
    }

    public static void Main()
    {
        Bird penguin = new Penguin();

        // This will cause a runtime error since we're trying to make a penguin fly.
        MakeBirdFly(penguin);
    }
}

`;
const withoutLiskovSubstitutionGo = `
package main

import (
	"fmt"
)

// Bird struct assuming all birds can fly, which isn't true for all bird types.
type Bird struct{}

func (b *Bird) Fly() {
	fmt.Println("Flying...")
}

// Penguin struct representing a bird that can't actually fly.
type Penguin struct {
	Bird // Embedding Bird struct
}

func main() {
	penguin := &Penguin{}

	// This will cause logical issues since we're trying to make a penguin "fly".
	penguin.Fly() // Calls the embedded Bird's Fly method, but it's nonsensical for a Penguin.
}

`;
const withoutLiskovSubstitutionCPP = `
#include <iostream>
#include <exception>

// Base class
class Bird {
public:
    virtual void fly() {
        std::cout << "Flying...\n";
    }
};

// Subclass
class Penguin : public Bird {
public:
    void fly() override {
        // Penguins can't fly, throwing an exception or providing improper behavior violates LSP
        throw std::logic_error("Penguins can't fly.");
    }
};

// Function expecting a Bird reference
void makeBirdFly(Bird& bird) {
    bird.fly();
}

int main() {
    Penguin penguin;
    try {
        // This will cause issues because Penguins can't fly, violating LSP
        makeBirdFly(penguin);
    }
    catch (const std::exception& e) {
        std::cerr << "Exception: " << e.what() << std::endl;
    }
    return 0;
}

`;
const withoutLiskovSubstitutionJava = `
class Bird {
    public void fly() {
        System.out.println("Flying...");
    }
}

class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly!");
    }
}

public class Main {
    public static void main(String[] args) {
        Bird myBird = new Penguin();
        // The client expects 'myBird' to fly, but an exception is thrown, violating LSP.
        myBird.fly();
    }
}

`;
const withoutLiskovSubstitutionJavascript = `
class Bird {
    fly() {
        console.log("Flying...");
    }
}

class Penguin extends Bird {
    fly() {
        // Overriding with a behavior that's not expected, or throwing an error, violates LSP.
        throw new Error("Penguins can't fly!");
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const myBird = new Bird();
makeBirdFly(myBird); // Outputs: "Flying..."

const myPenguin = new Penguin();
// This will cause an error, violating the Liskov Substitution Principle
// because we can't use a Penguin wherever we use a Bird.
makeBirdFly(myPenguin); 

`;
const withoutLiskovSubstitutionPHP = `
<?php

class Bird {
    public function fly() {
        echo "Flying...\n";
    }
}

class Penguin extends Bird {
    public function fly() {
        // Incorrect behavior while trying to substitute a Penguin for a Bird, violating LSP.
        throw new Exception("Penguins can't fly!");
    }
}

function makeBirdFly(Bird $bird) {
    // If a Penguin object is passed, it will cause an error at runtime.
    $bird->fly();
}

// This will work as expected.
$bird = new Bird();
makeBirdFly($bird);

// This will cause an error, demonstrating that Penguin is not substitutable for Bird.
$penguin = new Penguin();
makeBirdFly($penguin);

?>

`;
const withoutLiskovSubstitutionPseudoCode = `
Class Bird {
    Method fly() {
        // Code for flying
    }
}

Class Penguin Inherits Bird {
    Method fly() {
        // Penguin cannot fly, but since it's a bird, this method might be implemented inappropriately.
        // This scenario breaks the Liskov Substitution Principle because a penguin is not substitutable for a bird that can fly.
    }
}

Function makeBirdFly(Bird bird) {
    bird.fly();  // This seems correct because generally, birds fly, but it's not true for all birds (e.g., penguin).
}

// Usage
Bird penguin = new Penguin();
makeBirdFly(penguin);  // This will cause issues since penguins can't fly, violating LSP.

`;
const withoutLiskovSubstitutionPython = `
class Bird:
    def fly(self):
        print("Flying...")

class Penguin(Bird):
    def fly(self):
        # Changing behavior in a way that's not expected from the base class 'Bird'
        raise Exception("Penguins can't fly!")

def make_bird_fly(bird):
    # If 'bird' is a 'Penguin', this will cause an error, violating LSP.
    bird.fly()

# Testing the function with a Bird instance. This should work.
bird = Bird()
make_bird_fly(bird)

# Testing the function with a Penguin instance. This will cause an error because a Penguin isn't truly substitutable for a Bird.
penguin = Penguin()
make_bird_fly(penguin)  # Raises an Exception: "Penguins can't fly!"

`;
const withoutLiskovSubstitutionRust = `
// Rust doesn't support method overriding in the traditional OOP sense, so we demonstrate LSP violation through traits.

pub trait Bird {
    fn fly(&self);
}

pub struct RegularBird;
pub struct Penguin;

impl Bird for RegularBird {
    fn fly(&self) {
        println!("Flying...");
    }
}

impl Bird for Penguin {
    fn fly(&self) {
        // Penguins can't fly, so this implementation is misleading and violates LSP.
        panic!("Penguins can't fly!");
    }
}

// Accepts a reference to something that implements Bird, but panics if it's a Penguin.
fn make_bird_fly(bird: &dyn Bird) {
    bird.fly(); // Potential runtime panic if 'bird' is a Penguin.
}

fn main() {
    let bird = RegularBird;
    make_bird_fly(&bird); // Works as expected.

    let penguin = Penguin;
    make_bird_fly(&penguin); // Runtime panic: "Penguins can't fly!"
}

`;
const withoutLiskovSubstitutionSwift = `
import Foundation

// Base class
class Bird {
    func fly() {
        print("Flying...")
    }
}

// Subclass
class Penguin: Bird {
    override func fly() {
        fatalError("Penguins can't fly!") // Violates LSP
    }
}

// Function expecting a Bird, but it will crash if you pass a Penguin.
func makeBirdFly(_ bird: Bird) {
    bird.fly() // Runtime error if bird is a Penguin
}

// Works as expected.
let bird = Bird()
makeBirdFly(bird)

// Causes a runtime error because Penguin is not a proper substitute for Bird.
let penguin = Penguin()
makeBirdFly(penguin) // This will cause a crash.

`;
const withoutLiskovSubstitutionRuby = `
class Bird
  def fly
    puts 'Flying...'
  end
end

class Penguin < Bird
  def fly
    # Not substitutable behavior, violates LSP
    raise 'Penguins cannot fly!'
  end
end

def make_bird_fly(bird)
  bird.fly # Runtime error for Penguin
end

bird = Bird.new
make_bird_fly(bird) # Works as expected

penguin = Penguin.new
make_bird_fly(penguin) # Raises an error: 'Penguins cannot fly!'

`;
export {
  withLiskovSubstitutionPseudoCode,
  withLiskovSubstitutionCHash,
  withLiskovSubstitutionCPP,
  withLiskovSubstitutionGo,
  withLiskovSubstitutionJava,
  withLiskovSubstitutionJavascript,
  withLiskovSubstitutionPHP,
  withLiskovSubstitutionPython,
  withLiskovSubstitutionRuby,
  withLiskovSubstitutionRust,
  withLiskovSubstitutionSwift,
  withoutLiskovSubstitutionCHash,
  withoutLiskovSubstitutionGo,
  withoutLiskovSubstitutionCPP,
  withoutLiskovSubstitutionJava,
  withoutLiskovSubstitutionJavascript,
  withoutLiskovSubstitutionPHP,
  withoutLiskovSubstitutionPseudoCode,
  withoutLiskovSubstitutionPython,
  withoutLiskovSubstitutionRust,
  withoutLiskovSubstitutionSwift,
  withoutLiskovSubstitutionRuby,
};
