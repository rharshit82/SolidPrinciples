const withoutOpenClosedPrinciplePseudoCode = `
// Without Open/Closed Principle

function calculate_area(shapes_list):
    total_area = 0
    for shape in shapes_list:
        if shape.type == "circle":
            // Logic to calculate the area of a circle
            area = 3.14 * shape.radius * shape.radius
        elif shape.type == "square":
            // Logic to calculate the area of a square
            area = shape.side * shape.side
        // For any new shape, we'll have to come back and modify this function
        total_area += area
    return total_area
`;
const withOpenClosedPrinciplePseudoCode = `
// With Open/Closed Principle

// First, we declare an interface for our shapes to implement. Each shape will know how to calculate its own area.
interface Shape:
    function calculate_area()

class Circle implements Shape:
    // Constructor and other properties like radius...
    function calculate_area():
        return 3.14 * self.radius * self.radius

class Square implements Shape:
    // Constructor and other properties like side...
    function calculate_area():
        return self.side * self.side

// Any new shape can simply implement the Shape interface without the need to change existing code.

function calculate_total_area(shapes_list):
    total_area = 0
    for shape in shapes_list:
        // Now, the calculate_area method is part of the shape object, adhering to the Open/Closed Principle.
        total_area += shape.calculate_area()
    return total_area
`;

const withoutOpenClosedPrincipleCPP = `
#include <iostream>
#include <vector>
#include <cmath> // for M_PI

// Without Open/Closed Principle

// Classes for different shapes are defined without a common interface.

class Circle {
public:
    double radius;
    
    Circle(double r) : radius(r) {}
};

class Square {
public:
    double side;
    
    Square(double s) : side(s) {}
};

// The CalculateArea function is responsible for handling the logic for all shapes.
// This design violates the Open/Closed Principle because adding a new shape type
// would require modifying this function, increasing the risk of introducing errors 
// and making the system harder to maintain.

double CalculateArea(void* shape, const std::string& type) {
    if (type == "circle") {
        Circle* circle = static_cast<Circle*>(shape);
        return M_PI * circle->radius * circle->radius;
    } else if (type == "square") {
        Square* square = static_cast<Square*>(shape);
        return square->side * square->side;
    }
    // Must modify this function every time a new shape is added
    return 0;
}

// Usage
int main() {
    Circle circle(10);
    Square square(20);

    std::cout << "Area (Circle): " << CalculateArea(&circle, "circle") << std::endl;
    std::cout << "Area (Square): " << CalculateArea(&square, "square") << std::endl;

    return 0;
}
`;

const withOpenClosedPrincipleCPP = `
#include <iostream>
#include <vector>
#include <cmath> // for M_PI

// With Open/Closed Principle

// The Shape class follows the Open/Closed Principle by providing an interface
// that other shapes can implement. Each shape is responsible for its own area calculation logic.

class Shape {
public:
    virtual double CalculateArea() const = 0; // Pure virtual function making this class abstract.
};

class Circle : public Shape {
public:
    double radius;
    
    Circle(double r) : radius(r) {}
    
    // CalculateArea is overridden for Circle. Now, adding new shapes doesn't require changes here.
    double CalculateArea() const override {
        return M_PI * radius * radius;
    }
};

class Square : public Shape {
public:
    double side;
    
    Square(double s) : side(s) {}
    
    // CalculateArea is overridden for Square.
    double CalculateArea() const override {
        return side * side;
    }
};

// This function now complies with the Open/Closed Principle. It can handle any shape that
// implements the Shape interface, without the need to change its code when a new shape class is added.

double TotalArea(const std::vector<Shape*>& shapes) {
    double total = 0.0;
    for (const auto& shape : shapes) {
        total += shape->CalculateArea();
    }
    return total;
}

// Usage
int main() {
    // Polymorphism in action: Circle and Square are used through pointers to the Shape.
    std::vector<Shape*> shapes;
    shapes.push_back(new Circle(10));
    shapes.push_back(new Square(20));

    // Now, even if we introduce more shapes, we don't need to modify the TotalArea function.
    std::cout << "Total Area: " << TotalArea(shapes) << std::endl;

    // Clean up allocated memory
    for (auto& shape : shapes) {
        delete shape;
    }

    return 0;
}`;

const withoutOpenClosedPrincipleCHash = `
using System;

// Without Open/Closed Principle

// Here, we define classes for our shapes without any common interface or superclass.
public class Circle
{
    public double Radius { get; }

    public Circle(double radius)
    {
        Radius = radius;
    }
}

public class Square
{
    public double Side { get; }

    public Square(double side)
    {
        Side = side;
    }
}

// The AreaCalculator is responsible for calculating the areas of different shapes.
// This design violates the Open/Closed Principle because adding support for a new shape
// would require modifying the AreaCalculator class, thereby not being closed for modification.
public class AreaCalculator
{
    public double CalculateArea(object shape)
    {
        if (shape is Circle circle)
        {
            return Math.PI * circle.Radius * circle.Radius;
        }
        else if (shape is Square square)
        {
            return square.Side * square.Side;
        }
        else
        {
            throw new ArgumentException("Invalid shape type", nameof(shape));
        }
    }
}

// Usage
public class Program
{
    public static void Main()
    {
        var calculator = new AreaCalculator();

        // Without OCP, for each new shape, the CalculateArea method needs to be altered.
        Console.WriteLine($"Circle Area: {calculator.CalculateArea(new Circle(10))}");
        Console.WriteLine($"Square Area: {calculator.CalculateArea(new Square(5))}");
    }
}
`;

const withOpenClosedPrincipleCHash = `
using System;
using System.Collections.Generic;

// With Open/Closed Principle

// Here, we introduce an interface for our shapes. Each shape will implement this interface.
// This design adheres to the Open/Closed Principle because new shapes can be added without
// modifying the existing shape classes or the AreaCalculator logic.
public interface IShape
{
    double CalculateArea();
}

public class Circle : IShape
{
    public double Radius { get; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    public double CalculateArea()
    {
        return Math.PI * Radius * Radius; // specific implementation for Circle
    }
}

public class Square : IShape
{
    public double Side { get; }

    public Square(double side)
    {
        Side = side;
    }

    public double CalculateArea()
    {
        return Side * Side; // specific implementation for Square
    }
}

// The AreaCalculator now is closed for modification but open for extension.
// New shapes implementing the IShape interface can be added without requiring changes to this class.
public class AreaCalculator
{
    public double TotalArea(IEnumerable<IShape> shapes)
    {
        double totalArea = 0;
        foreach (var shape in shapes)
        {
            totalArea += shape.CalculateArea();
        }
        return totalArea;
    }
}

// Usage
public class Program
{
    public static void Main()
    {
        // We can add new shapes without modifying the AreaCalculator's TotalArea method.
        List<IShape> shapes = new List<IShape>
        {
            new Circle(10),
            new Square(5)
        };

        var calculator = new AreaCalculator();
        Console.WriteLine($"Total Area: {calculator.TotalArea(shapes)}");
    }
}
`;

const withoutOpenClosedPrincipleGo = `
package main

import (
	"fmt"
	"math"
)

// Without Open/Closed Principle

// Circle and Square structs are defined separately without any common interface.
type Circle struct {
	Radius float64
}

type Square struct {
	Side float64
}

// CalculateArea function is responsible for handling all shape types.
// This design violates the Open/Closed Principle because adding a new shape
// means modifying this function, making the system harder to maintain.
func CalculateArea(shape interface{}) float64 {
	switch s := shape.(type) {
	case Circle:
		return math.Pi * s.Radius * s.Radius
	case Square:
		return s.Side * s.Side
	default:
		// If a new shape is added, we must come back and alter this function
		panic("Shape not supported")
	}
}

func main() {
	circle := Circle{Radius: 2.5}
	square := Square{Side: 3}

	// The function needs to be modified for each new shape, violating the Open/Closed Principle.
	fmt.Println("Area of circle:", CalculateArea(circle))
	fmt.Println("Area of square:", CalculateArea(square))
}
`;

const withOpenClosedPrincipleGo = `
package main

import (
	"fmt"
	"math"
)

// With Open/Closed Principle

// Shape interface is defined that requires a CalculateArea method.
// This way, new shapes can be easily integrated without changing the calculation logic.
type Shape interface {
	CalculateArea() float64
}

type Circle struct {
	Radius float64
}

func (c Circle) CalculateArea() float64 {
	return math.Pi * c.Radius * c.Radius
}

type Square struct {
	Side float64
}

func (s Square) CalculateArea() float64 {
	return s.Side * s.Side
}

// TotalArea now accepts any struct that satisfies the Shape interface.
// This adheres to the Open/Closed Principle, making it easy to add new shapes without modifying this function.
func TotalArea(shapes []Shape) float64 {
	var total float64
	for _, shape := range shapes {
		total += shape.CalculateArea()
	}
	return total
}

func main() {
	// We can pass any shape that satisfies the Shape interface to our TotalArea function.
	shapes := []Shape{
		Circle{Radius: 2.5},
		Square{Side: 3},
		// Adding a new shape is easy, just make sure it satisfies the Shape interface.
	}

	fmt.Println("Total area:", TotalArea(shapes))
}
`;

const withoutOpenClosedPrinciplePHP = `
<?php

// Without Open/Closed Principle

class Circle {
    public $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }
}

class Square {
    public $side;

    public function __construct($side) {
        $this->side = $side;
    }
}

// The AreaCalculator is responsible for calculating areas of different shapes.
// This design violates the Open/Closed Principle because for every new shape,
// we have to come back and modify this class, thereby not being closed for modification.
class AreaCalculator {
    public function calculateArea($shape) {
        if ($shape instanceof Circle) {
            return pi() * $shape->radius * $shape->radius;
        } elseif ($shape instanceof Square) {
            return $shape->side * $shape->side;
        } else {
            throw new Exception("Shape not supported");
        }
    }
}

// Usage
$calculator = new AreaCalculator();

// For each new shape, the calculateArea method needs to be altered.
echo "Circle Area: " . $calculator->calculateArea(new Circle(10)) . "\n";
echo "Square Area: " . $calculator->calculateArea(new Square(5)) . "\n";

?>
`;

const withOpenClosedPrinciplePHP = `
<?php

// With Open/Closed Principle

interface Shape {
    public function calculateArea();
}

class Circle implements Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * $this->radius * $this->radius; // specific implementation for Circle
    }
}

class Square implements Shape {
    private $side;

    public function __construct($side) {
        $this->side = $side;
    }

    public function calculateArea() {
        return $this->side * $this->side; // specific implementation for Square
    }
}

// The AreaCalculator now is closed for modification but open for extension.
// New shapes implementing the Shape interface can be added without requiring changes to this class.
class AreaCalculator {
    public function totalArea($shapes) {
        $totalArea = 0;
        foreach ($shapes as $shape) {
            $totalArea += $shape->calculateArea();
        }
        return $totalArea;
    }
}

// Usage
$shapes = array(
    new Circle(10),
    new Square(5)
    // We can add new shapes without modifying the AreaCalculator's totalArea method.
);

$calculator = new AreaCalculator();
echo "Total Area: " . $calculator->totalArea($shapes) . "\n";

?>
`;

const withoutOpenClosedPrincipleJavascript = `
// Without Open/Closed Principle

// Circle and Square classes are defined without any common interface or superclass.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
}

// The calculateArea function is responsible for determining the shape
// and calculating the area based on it. Adding a new shape means modifying this function.
// This violates the Open/Closed Principle.
function calculateArea(shape) {
  if (shape instanceof Circle) {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape instanceof Square) {
    return shape.side * shape.side;
  } else {
    throw new Error('Shape not supported');
  }
}

// Usage
const circle = new Circle(5);
const square = new Square(4);

console.log('Area of Circle:', calculateArea(circle)); // Modifying function for new shapes
console.log('Area of Square:', calculateArea(square)); // violates the Open/Closed Principle
`;

const withOpenClosedPrincipleJavascript = `// With Open/Closed Principle

// A common Shape interface ensuring each shape must implement the calculateArea method.
class Shape {
  calculateArea() {
    throw new Error('Method calculateArea() must be implemented.');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius; // Circle's implementation of calculateArea
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side; // Square's implementation of calculateArea
  }
}

// The totalArea function can work with any shape that implements the Shape interface.
// This adheres to the Open/Closed Principle, as adding new shapes doesn't require changing this function.
function totalArea(shapes) {
  return shapes.reduce((total, shape) => {
    if (!(shape instanceof Shape)) {
      throw new Error('Object does not meet Shape interface');
    }
    return total + shape.calculateArea();
  }, 0);
}

// Usage
const shapes = [
  new Circle(5),
  new Square(4)
  // The system is now open for extension by simply adding more shapes here.
];

console.log('Total Area:', totalArea(shapes)); // No need to modify this if we add more shapes.
`;

const withoutOpenClosedPrincipleJava = `
public class WithoutOCP {

    // Without Open/Closed Principle

    // Circle and Square classes are defined separately without any common interface.
    static class Circle {
        public double radius;

        public Circle(double radius) {
            this.radius = radius;
        }
    }

    static class Square {
        public double side;

        public Square(double side) {
            this.side = side;
        }
    }

    // CalculateArea method is responsible for handling all shape types.
    // This design violates the Open/Closed Principle because adding a new shape
    // means modifying this method, making the system harder to maintain.
    public double calculateArea(Object shape) {
        if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            return Math.PI * circle.radius * circle.radius;
        } else if (shape instanceof Square) {
            Square square = (Square) shape;
            return square.side * square.side;
        }
        // If a new shape is added, we must come back and alter this function
        throw new IllegalArgumentException("Shape not supported");
    }

    public static void main(String[] args) {
        WithoutOCP example = new WithoutOCP();
        Circle circle = new Circle(5);
        Square square = new Square(4);

        // The method needs to be modified for each new shape, violating the Open/Closed Principle.
        System.out.println("Area of Circle: " + example.calculateArea(circle));
        System.out.println("Area of Square: " + example.calculateArea(square));
    }
}
`;

const withOpenClosedPrincipleJava = `import java.util.*;

public class WithOCP {

    // With Open/Closed Principle

    // A common interface for all shapes, requiring the implementation of the calculateArea method.
    interface Shape {
        double calculateArea();
    }

    static class Circle implements Shape {
        private final double radius;

        public Circle(double radius) {
            this.radius = radius;
        }

        @Override
        public double calculateArea() {
            return Math.PI * radius * radius;
        }
    }

    static class Square implements Shape {
        private final double side;

        public Square(double side) {
            this.side = side;
        }

        @Override
        public double calculateArea() {
            return side * side;
        }
    }

    // This method now accepts any Shape, making it compliant with the Open/Closed Principle.
    // New shapes implementing the Shape interface can be added without modifying this method.
    public double totalArea(List<Shape> shapes) {
        double total = 0;
        for (Shape shape : shapes) {
            total += shape.calculateArea();
        }
        return total;
    }

    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(5));
        shapes.add(new Square(4));

        WithOCP example = new WithOCP();

        // Now, even if we introduce more shapes, we don't need to modify the totalArea method.
        System.out.println("Total Area: " + example.totalArea(shapes));
    }
}
`;

const withoutOpenClosedPrinciplePython = `
# Without Open/Closed Principle

class Circle:
    def __init__(self, radius):
        self.radius = radius

class Square:
    def __init__(self, side):
        self.side = side

# The calculate_area function is responsible for determining the type of shape
# and calculating the area specifically for each. This design violates the
# Open/Closed Principle because adding a new shape means modifying this function.
def calculate_area(shape):
    if isinstance(shape, Circle):
        return 3.14 * shape.radius * shape.radius
    elif isinstance(shape, Square):
        return shape.side * shape.side
    else:
        raise ValueError("Shape not supported")

# Usage
circle = Circle(5)
square = Square(4)

# For each new shape, the calculate_area function needs to be altered,
# violating the Open/Closed Principle.
print(f"Area of Circle: {calculate_area(circle)}")
print(f"Area of Square: {calculate_area(square)}")
`;
const withOpenClosedPrinciplePython = `
from abc import ABC, abstractmethod

# With Open/Closed Principle

# A common interface for all shapes, requiring them to implement the calculate_area method.
class Shape(ABC):
    @abstractmethod
    def calculate_area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return 3.14 * self.radius * self.radius

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def calculate_area(self):
        return self.side * self.side

# This function adheres to the Open/Closed Principle.
# It works with any shape that implements the Shape interface.
# New shapes can be added without modifying this function.
def total_area(shapes):
    total = 0
    for shape in shapes:
        if not isinstance(shape, Shape):
            raise ValueError("Object is not a Shape")
        total += shape.calculate_area()
    return total

# Usage
shapes = [Circle(5), Square(4)]

# Now, even if we introduce more shapes, we don't need to modify the total_area function.
print(f"Total Area: {total_area(shapes)}")
`;

const withoutOpenClosedPrincipleRuby = `
# Without Open/Closed Principle

class Circle
  attr_accessor :radius

  def initialize(radius)
    @radius = radius
  end
end

class Square
  attr_accessor :side

  def initialize(side)
    @side = side
  end
end

# The calculate_area function is not compliant with the Open/Closed Principle.
# If we need to introduce a new shape, this function needs to be modified.
def calculate_area(shape)
  if shape.is_a?(Circle)
    return 3.14 * shape.radius * shape.radius
  elsif shape.is_a?(Square)
    return shape.side * shape.side
  else
    raise 'Shape not supported'
  end
end

# Usage
circle = Circle.new(5)
square = Square.new(4)

puts "Area of Circle: #{calculate_area(circle)}" # Adding new shapes requires changing this function.
puts "Area of Square: #{calculate_area(square)}" # This violates the Open/Closed Principle.
`;
const withOpenClosedPrincipleRuby = `
# With Open/Closed Principle

# The Shape interface, which will be the contract for all shapes, ensuring they implement the calculate_area method.
class Shape
  def calculate_area
    raise 'Method calculate_area needs to be implemented'
  end
end

class Circle < Shape
  attr_accessor :radius

  def initialize(radius)
    @radius = radius
  end

  def calculate_area
    3.14 * @radius * @radius
  end
end

class Square < Shape
  attr_accessor :side

  def initialize(side)
    @side = side
  end

  def calculate_area
    @side * @side
  end
end

# This method is now closed for modification and open for extension, adhering to the Open/Closed Principle.
# New shapes implementing the Shape interface can be introduced without modifying this method.
def total_area(shapes)
  shapes.reduce(0) { |sum, shape| sum + shape.calculate_area }
end

# Usage
shapes = [Circle.new(5), Square.new(4)] # We can easily add more shapes without modifying existing code.

puts "Total Area: #{total_area(shapes)}" # No change required for adding new shapes.
`;

const withoutOpenClosedPrincipleRust = `
// Without Open/Closed Principle

// Define structs for different shapes without any common trait.
pub struct Circle {
    pub radius: f64,
}

pub struct Square {
    pub side: f64,
}

// Enumeration to allow the function to accept different shapes.
// Adding a new shape requires modifying this enum, which violates the Open/Closed Principle.
pub enum Shape {
    Circle(Circle),
    Square(Square),
}

// A function to calculate the area that specifically checks each shape type.
// This function must be modified each time a new shape is added, violating the Open/Closed Principle.
pub fn calculate_area(shape: &Shape) -> f64 {
    match shape {
        Shape::Circle(circle) => 3.14 * circle.radius * circle.radius,
        Shape::Square(square) => square.side * square.side,
    }
}

fn main() {
    let circle = Shape::Circle(Circle { radius: 5.0 });
    let square = Shape::Square(Square { side: 4.0 });

    // The function needs to be modified for each new shape type added, not adhering to OCP.
    println!("Area of Circle: {}", calculate_area(&circle));
    println!("Area of Square: {}", calculate_area(&square));
}
`;

const withOpenClosedPrincipleRust = `
// With Open/Closed Principle

// A common trait for shapes, requiring the implementation of the calculate_area method.
pub trait Shape {
    fn calculate_area(&self) -> f64;
}

// Implementing the trait for Circle
pub struct Circle {
    pub radius: f64,
}

impl Shape for Circle {
    fn calculate_area(&self) -> f64 {
        3.14 * self.radius * self.radius
    }
}

// Implementing the trait for Square
pub struct Square {
    pub side: f64,
}

impl Shape for Square {
    fn calculate_area(&self) -> f64 {
        self.side * self.side
    }
}

// A function to calculate the total area, which does not need to be modified when new shapes are added.
// This adheres to the Open/Closed Principle.
pub fn total_area<T: Shape>(shapes: &[T]) -> f64 {
    shapes.iter().map(|shape| shape.calculate_area()).sum()
}

fn main() {
    let shapes: Vec<Box<dyn Shape>> = vec![
        Box::new(Circle { radius: 5.0 }),
        Box::new(Square { side: 4.0 }),
    ];

    // This setup adheres to the OCP, allowing new shape types to be added without modifying existing code.
    println!("Total Area: {}", total_area(&shapes));
}
`;
const withOpenClosedPrincipleSwift = `
import Foundation

// Without Open/Closed Principle

// Define classes for different shapes without any common protocol.
class Circle {
    var radius: Double

    init(radius: Double) {
        self.radius = radius
    }
}

class Square {
    var side: Double

    init(side: Double) {
        self.side = side
    }
}

// A function to calculate the area that discriminates the shape type.
// This function violates the Open/Closed Principle because adding a new shape
// requires modifying this function, making it open to modification.
func calculateArea(of shape: Any) -> Double {
    if let circle = shape as? Circle {
        return Double.pi * circle.radius * circle.radius
    } else if let square = shape as? Square {
        return square.side * square.side
    } else {
        fatalError("Shape not supported")
    }
}

// Usage
let circle = Circle(radius: 5.0)
let square = Square(side: 4.0)

// Calling the function requires type checking for different shapes, 
// and adding new shapes requires changes here, violating the Open/Closed Principle.
print("Area of Circle: \(calculateArea(of: circle))")
print("Area of Square: \(calculateArea(of: square))")
`;
const withoutOpenClosedPrincipleSwift = `
import Foundation

// With Open/Closed Principle

// A common protocol for shapes, ensuring they implement the calculateArea method.
protocol Shape {
    func calculateArea() -> Double
}

// Circle and Square conforming to the Shape protocol. They need to provide an implementation for calculateArea.
class Circle: Shape {
    var radius: Double

    init(radius: Double) {
        self.radius = radius
    }

    func calculateArea() -> Double {
        return Double.pi * radius * radius
    }
}

class Square: Shape {
    var side: Double

    init(side: Double) {
        self.side = side
    }

    func calculateArea() -> Double {
        return side * side
    }
}

// A function that calculates the total area from an array of shapes. 
// This function adheres to the Open/Closed Principle since it's closed for modification and open for extension.
// We can pass any shape that conforms to the Shape protocol without modifying this function.
func totalArea(of shapes: [Shape]) -> Double {
    return shapes.reduce(0) { $0 + $1.calculateArea() }
}

// Usage
let circle = Circle(radius: 5.0)
let square = Square(side: 4.0)

let shapes: [Shape] = [circle, square]

// totalArea doesn't need to know the details of how each shape calculates its area, 
// adhering to the Open/Closed Principle.
print("Total Area: \(totalArea(of: shapes))")

`;
export {
  withOpenClosedPrinciplePseudoCode,
  withOpenClosedPrincipleCHash,
  withOpenClosedPrincipleCPP,
  withOpenClosedPrincipleGo,
  withOpenClosedPrincipleJava,
  withOpenClosedPrincipleJavascript,
  withOpenClosedPrinciplePHP,
  withOpenClosedPrinciplePython,
  withOpenClosedPrincipleRuby,
  withOpenClosedPrincipleRust,
  withOpenClosedPrincipleSwift,
  withoutOpenClosedPrincipleCHash,
  withoutOpenClosedPrincipleGo,
  withoutOpenClosedPrincipleCPP,
  withoutOpenClosedPrincipleJava,
  withoutOpenClosedPrincipleJavascript,
  withoutOpenClosedPrinciplePHP,
  withoutOpenClosedPrinciplePseudoCode,
  withoutOpenClosedPrinciplePython,
  withoutOpenClosedPrincipleRust,
  withoutOpenClosedPrincipleSwift,
  withoutOpenClosedPrincipleRuby,
};
