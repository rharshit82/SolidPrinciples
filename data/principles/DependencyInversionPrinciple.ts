const withDependencyInversionPseudoCode = `
# Abstraction (defines a contract for low-level modules)
# Dependency Inversion Principle is applied here by creating an abstraction that the high-level module and low-level module can depend on.
interface SwitchableDevice {
    function turnOn()
    function turnOff()
}

# Lower-level module
# The LightBulb class is implementing the SwitchableDevice interface, adhering to the Dependency Inversion Principle by depending on abstraction rather than on details.
class LightBulb implements SwitchableDevice {
    function turnOn() {
        //... turn the bulb on ...
    }

    function turnOff() {
        //... turn the bulb off ...
    }
}

# Higher-level module
# Dependency Inversion is applied here since ElectricPowerSwitch relies on the abstraction of a SwitchableDevice, not on the lower-level detail like a specific LightBulb class.
class ElectricPowerSwitch {
    SwitchableDevice device  # This dependency on an interface is the core of the Dependency Inversion Principle.
    bool on

    # The constructor demonstrates Dependency Inversion Principle by accepting any 'SwitchableDevice' - it's not dependent on concrete classes.
    function constructor(SwitchableDevice device) {
        this.device = device
        this.on = false
    }

    function press() {
        if (this.on) {
            this.device.turnOff()
            this.on = false
        } else {
            this.device.turnOn()
            this.on = true
        }
    }
}

# Usage
# The client code here also follows Dependency Inversion Principle, as it can use any device implementing 'SwitchableDevice', not just a 'LightBulb'.
bulb = new LightBulb()
switch = new ElectricPowerSwitch(bulb)
switch.press()
`;
const withoutDependencyInversionPseudoCode = `
# Concrete class of a light bulb
# There's no application of Dependency Inversion here; high-level modules would directly depend on this low-level module.
class LightBulb {
    function turnOn() {
        //... turn the bulb on ...
    }

    function turnOff() {
        //... turn the bulb off ...
    }
}

# High-level module
# This class violates the Dependency Inversion Principle by directly interacting with the 'LightBulb', a low-level module, rather than an abstraction.
class ElectricPowerSwitch {
    LightBulb bulb  # Direct dependency on a concrete class, which is against Dependency Inversion Principle.

    # This constructor is directly dependent on a concrete class 'LightBulb', illustrating a violation of the Dependency Inversion Principle.
    function constructor(LightBulb bulb) {
        this.bulb = bulb
    }

    function press() {
        //... check whether the light is on...
        //... and then turn it off or on accordingly ...
        # The direct use of methods from the 'LightBulb' class here underlines the high-level module's dependency on the low-level module, against the principle of Dependency Inversion.
    }
}

# Usage
# Here too, the creation and usage of classes are tightly coupled, not adhering to Dependency Inversion. Any change in 'LightBulb' would necessitate changes here as well.
bulb = new LightBulb()
switch = new ElectricPowerSwitch(bulb)
switch.press()
`;
const withDependencyInversionCHash = `
using System;

// With Dependency Inversion Principle

// Here we define an interface to abide by the Dependency Inversion Principle, making higher-level modules not dependent on lower-level module implementations.
public interface ISwitchableDevice
{
    void TurnOn();
    void TurnOff();
}

// Lower-level module: This class implements the higher-level abstraction, conforming to the Dependency Inversion Principle.
public class LightBulb : ISwitchableDevice
{
    public void TurnOn()
    {
        Console.WriteLine("LightBulb: Bulb turned on...");
    }

    public void TurnOff()
    {
        Console.WriteLine("LightBulb: Bulb turned off...");
    }
}

// Higher-level module: By depending on an abstraction (ISwitchableDevice), this class adheres to the Dependency Inversion Principle.
public class ElectricPowerSwitch
{
    private ISwitchableDevice device;
    private bool on;

    // The constructor accepts the interface type, thus it's not directly dependent on the concrete 'LightBulb' class.
    public ElectricPowerSwitch(ISwitchableDevice device)
    {
        this.device = device;
        this.on = false;
    }

    public void Press()
    {
        if (this.on)
        {
            this.device.TurnOff();
            this.on = false;
        }
        else
        {
            this.device.TurnOn();
            this.on = true;
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // The client code depends on the interface, not on the concrete class, fulfilling the Dependency Inversion Principle.
        ISwitchableDevice bulb = new LightBulb();
        var powerSwitch = new ElectricPowerSwitch(bulb);
        powerSwitch.Press(); // Turn On
        powerSwitch.Press(); // Turn Off
    }
}
`;
const withoutDependencyInversionCHash = `
using System;

// Without Dependency Inversion Principle

// This is a concrete class with specific functionality, but there's no abstraction that separates high-level modules from low-level modules.
public class LightBulb
{
    public void TurnOn()
    {
        Console.WriteLine("LightBulb: Bulb turned on...");
    }

    public void TurnOff()
    {
        Console.WriteLine("LightBulb: Bulb turned off...");
    }
}

// This class directly interacts with a concrete class (LightBulb), violating the Dependency Inversion Principle.
public class ElectricPowerSwitch
{
    private LightBulb bulb;
    private bool on;

    // This constructor is directly dependent on a concrete class 'LightBulb', illustrating a violation of the Dependency Inversion Principle.
    public ElectricPowerSwitch(LightBulb bulb)
    {
        this.bulb = bulb;
        this.on = false;
    }

    public void Press()
    {
        if (this.on)
        {
            this.bulb.TurnOff();
            this.on = false;
        }
        else
        {
            this.bulb.TurnOn();
            this.on = true;
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Here, the 'ElectricPowerSwitch' is directly instantiated with a 'LightBulb', creating a high degree of coupling and thus violating the Dependency Inversion Principle.
        var bulb = new LightBulb();
        var powerSwitch = new ElectricPowerSwitch(bulb);
        powerSwitch.Press(); // Turn On
        powerSwitch.Press(); // Turn Off
    }
}
`;
const withDependencyInversionCPP = `
#include <iostream>

// With Dependency Inversion Principle

// SwitchableDevice acts as an abstract interface. This abstraction allows for the decoupling of higher-level modules from lower-level modules, adhering to the Dependency Inversion Principle.
class SwitchableDevice {
public:
    virtual ~SwitchableDevice() = default;
    virtual void turnOn() = 0; // Pure virtual function makes this an abstract class/interface.
    virtual void turnOff() = 0;
};

// LightBulb is a lower-level module implementing the SwitchableDevice interface.
class LightBulb : public SwitchableDevice {
public:
    void turnOn() override {
        std::cout << "LightBulb: Bulb turned on..." << std::endl;
    }

    void turnOff() override {
        std::cout << "LightBulb: Bulb turned off..." << std::endl;
    }
};

// ElectricPowerSwitch is a higher-level module that depends on the abstraction (SwitchableDevice), not on the lower-level module (LightBulb).
class ElectricPowerSwitch {
public:
    // Constructor takes a reference to the SwitchableDevice, allowing any device implementing this interface to be plugged in, following the Dependency Inversion Principle.
    ElectricPowerSwitch(SwitchableDevice& device) : device(device), on(false) {}

    void press() {
        if (on) {
            device.turnOff();
            on = false;
        } else {
            device.turnOn();
            on = true;
        }
    }

private:
    SwitchableDevice& device; // Reference to the abstract interface.
    bool on;
};

int main() {
    LightBulb bulb;
    // The high-level module is interacting with the abstraction, not the concrete implementation.
    ElectricPowerSwitch powerSwitch(bulb);
    powerSwitch.press(); // Turn On
    powerSwitch.press(); // Turn Off

    return 0;
}
`;
const withoutDependencyInversionCPP = `
#include <iostream>

// Without Dependency Inversion Principle

// LightBulb is a concrete class without an abstract interface, leading to high-level modules depending directly on this low-level module, which is against the Dependency Inversion Principle.
class LightBulb {
public:
    void turnOn() {
        std::cout << "LightBulb: Bulb turned on..." << std::endl;
    }

    void turnOff() {
        std::cout << "LightBulb: Bulb turned off..." << std::endl;
    }
};

// ElectricPowerSwitch directly interacts with a specific low-level module (LightBulb), making it tightly coupled and violating the Dependency Inversion Principle.
class ElectricPowerSwitch {
public:
    // Constructor directly uses LightBulb, a concrete instance, which increases the coupling between high-level and low-level modules.
    ElectricPowerSwitch(LightBulb& bulb) : bulb(bulb), on(false) {}

    void press() {
        if (on) {
            bulb.turnOff();
            on = false;
        } else {
            bulb.turnOn();
            on = true;
        }
    }

private:
    LightBulb& bulb; // Direct dependency on the concrete class LightBulb.
    bool on;
};

int main() {
    LightBulb bulb;
    // Direct instantiation and interaction with a specific class demonstrate the absence of the Dependency Inversion Principle.
    ElectricPowerSwitch powerSwitch(bulb);
    powerSwitch.press(); // Turn On
    powerSwitch.press(); // Turn Off

    return 0;
}

`;
const withDependencyInversionGo = `
package main

import "fmt"

// With Dependency Inversion Principle

// Switchable is an interface that abstracts the actions of a switchable device.
// It's a high-level abstraction.
type Switchable interface {
	TurnOn()
	TurnOff()
}

// LightBulb struct implementing the Switchable interface, representing a low-level module.
type LightBulb struct{}

// TurnOn method for LightBulb; implements Switchable interface.
func (lb *LightBulb) TurnOn() {
	fmt.Println("LightBulb: Bulb turned on...")
}

// TurnOff method for LightBulb; implements Switchable interface.
func (lb *LightBulb) TurnOff() {
	fmt.Println("LightBulb: Bulb turned off...")
}

// ElectricPowerSwitch is a high-level class that operates on the Switchable interface, not on the concrete LightBulb class.
type ElectricPowerSwitch struct {
	device Switchable // Dependency on an abstraction (Switchable interface).
	on     bool
}

// Press method toggles the state of the device.
func (s *ElectricPowerSwitch) Press() {
	if s.on {
		s.device.TurnOff() // Interacting through the interface method.
		s.on = false
	} else {
		s.device.TurnOn() // Interacting through the interface method.
		s.on = true
	}
}

func main() {
	bulb := &LightBulb{} // LightBulb as a Switchable device.
	switch := &ElectricPowerSwitch{device: bulb, on: false} // Injecting a Switchable into ElectricPowerSwitch.

	switch.Press() // Outputs: LightBulb: Bulb turned on...
	switch.Press() // Outputs: LightBulb: Bulb turned off...
}
`;
const withoutDependencyInversionGo = `
package main

import "fmt"

// Without Dependency Inversion Principle

// LightBulb struct, a specific low-level class with no abstraction.
type LightBulb struct{}

// TurnOn method for LightBulb.
func (lb *LightBulb) TurnOn() {
	fmt.Println("LightBulb: Bulb turned on...")
}

// TurnOff method for LightBulb.
func (lb *LightBulb) TurnOff() {
	fmt.Println("LightBulb: Bulb turned off...")
}

// ElectricPowerSwitch class is directly dependent on the LightBulb low-level class.
// This design violates the Dependency Inversion Principle.
type ElectricPowerSwitch struct {
	bulb *LightBulb // Direct dependency on a low-level module (LightBulb).
	on   bool
}

// Press method toggles the state of the bulb.
func (s *ElectricPowerSwitch) Press() {
	if s.on {
		s.bulb.TurnOff() // Direct interaction with a low-level module method.
		s.on = false
	} else {
		s.bulb.TurnOn() // Direct interaction with a low-level module method.
		s.on = true
	}
}

func main() {
	bulb := &LightBulb{} // Specific LightBulb instance.
	switch := &ElectricPowerSwitch{bulb: bulb, on: false} // ElectricPowerSwitch directly uses LightBulb.

	switch.Press() // Outputs: LightBulb: Bulb turned on...
	switch.Press() // Outputs: LightBulb: Bulb turned off...
}
`;
const withDependencyInversionJava = `
public class WithDependencyInversion {

    // Switchable interface acts as an abstract layer between the high-level ElectricPowerSwitch class and the low-level LightBulb class.
    interface Switchable {
        void turnOn();
        void turnOff();
    }

    // LightBulb, a low-level module, implements the Switchable interface, thus adhering to the Dependency Inversion Principle.
    static class LightBulb implements Switchable {
        @Override
        public void turnOn() {
            System.out.println("LightBulb: Bulb turned on...");
        }

        @Override
        public void turnOff() {
            System.out.println("LightBulb: Bulb turned off...");
        }
    }

    // ElectricPowerSwitch, a high-level module, depends on the abstraction (Switchable) rather than on the concrete LightBulb class.
    static class ElectricPowerSwitch {
        public Switchable client; // Reference to the abstract interface.
        public boolean on;

        // The constructor takes a Switchable, so it depends on the abstraction, not the concrete implementation.
        public ElectricPowerSwitch(Switchable client) {
            this.client = client;
            this.on = false;
        }

        public boolean isOn() {
            return this.on;
        }

        public void press() {
            boolean checkOn = isOn();
            if (checkOn) {
                client.turnOff();
                this.on = false;
            } else {
                client.turnOn();
                this.on = true;
            }
        }
    }

    public static void main(String[] args) {
        // Here, ElectricPowerSwitch is interacting with the Switchable abstraction, following the Dependency Inversion Principle.
        Switchable bulb = new LightBulb();
        ElectricPowerSwitch powerSwitch = new ElectricPowerSwitch(bulb);

        // Toggle the switch.
        powerSwitch.press();
        powerSwitch.press();
    }
}
`;
const withoutDependencyInversionJava = `
public class WithoutDependencyInversion {

    // LightBulb is a low-level module without an abstract interface, resulting in a direct dependency between ElectricPowerSwitch and LightBulb.
    static class LightBulb {
        public void turnOn() {
            System.out.println("LightBulb: Bulb turned on...");
        }

        public void turnOff() {
            System.out.println("LightBulb: Bulb turned off...");
        }
    }

    // ElectricPowerSwitch is a high-level module that directly interacts with a specific low-level module (LightBulb), which violates the Dependency Inversion Principle.
    static class ElectricPowerSwitch {
        private LightBulb bulb; // Direct dependency on the low-level module.
        private boolean on;

        // The constructor takes a LightBulb, indicating a direct dependence on a lower-level module.
        public ElectricPowerSwitch(LightBulb bulb) {
            this.bulb = bulb;
            this.on = false;
        }

        public void press() {
            boolean checkOn = isOn();
            if (checkOn) {
                bulb.turnOff();
                on = false;
            } else {
                bulb.turnOn();
                on = true;
            }
        }

        public boolean isOn() {
            return this.on;
        }
    }

    public static void main(String[] args) {
        // Here, ElectricPowerSwitch is directly instantiated with and using LightBulb, showing a lack of abstraction characteristic of the Dependency Inversion Principle.
        LightBulb bulb = new LightBulb();
        ElectricPowerSwitch powerSwitch = new ElectricPowerSwitch(bulb);

        // Toggle the switch.
        powerSwitch.press();
        powerSwitch.press();
    }
}
`;
const withDependencyInversionJavascript = `
// Abstract class (interface) representing any switchable device. It's a contract that switchable devices must adhere to.
function SwitchableDevice() {
  if (this.constructor === SwitchableDevice) {
    throw new Error("Can't instantiate an abstract class!");
  }
}

SwitchableDevice.prototype.turnOn = function() {
  throw new Error('Method turnOn() must be implemented.');
};

SwitchableDevice.prototype.turnOff = function() {
  throw new Error('Method turnOff() must be implemented.');
};

// LightBulb class is a concrete class implementing SwitchableDevice interface, representing a low-level module.
class LightBulb extends SwitchableDevice {
  turnOn() {
    console.log('LightBulb: Bulb turned on...');
  }

  turnOff() {
    console.log('LightBulb: Bulb turned off...');
  }
}

// ElectricPowerSwitch is a high-level class that depends on the abstract SwitchableDevice, not on the low-level module directly. 
// This way, it adheres to the Dependency Inversion Principle.
class ElectricPowerSwitch {
  constructor(device) {
    if (!(device instanceof SwitchableDevice)) {
      throw new Error('Device must implement the SwitchableDevice interface!');
    }
    this.device = device; // Dependency on the abstract interface.
    this.on = false;
  }

  press() {
    if (this.on) {
      this.device.turnOff(); // Interacting through the interface method.
      this.on = false;
    } else {
      this.device.turnOn(); // Interacting through the interface method.
      this.on = true;
    }
  }
}

// The high-level module ElectricPowerSwitch is interacting with the abstraction of a bulb, not the concrete LightBulb class.
const bulb = new LightBulb();
const powerSwitch = new ElectricPowerSwitch(bulb);

powerSwitch.press(); // Outputs: LightBulb: Bulb turned on...
powerSwitch.press(); // Outputs: LightBulb: Bulb turned off...
`;
const withoutDependencyInversionJavascript = `
// Concrete LightBulb class without any abstract interface, representing a low-level module.
class LightBulb {
  turnOn() {
    console.log('LightBulb: Bulb turned on...');
  }

  turnOff() {
    console.log('LightBulb: Bulb turned off...');
  }
}

// ElectricPowerSwitch is a high-level class that directly interacts with the low-level LightBulb class.
// This direct dependency on a concrete class represents a violation of the Dependency Inversion Principle.
class ElectricPowerSwitch {
  constructor() {
    this.bulb = new LightBulb(); // Direct instantiation and dependency on a low-level module.
    this.on = false;
  }

  press() {
    if (this.on) {
      this.bulb.turnOff(); // Direct interaction with a specific low-level module method.
      this.on = false;
    } else {
      this.bulb.turnOn(); // Direct interaction with a specific low-level module method.
      this.on = true;
    }
  }
}

// Here, ElectricPowerSwitch directly uses LightBulb, indicating a high-level module depending on a low-level module directly.
const switchUse = new ElectricPowerSwitch();
switchUse.press(); // Outputs: LightBulb: Bulb turned on...
switchUse.press(); // Outputs: LightBulb: Bulb turned off...
`;
const withDependencyInversionPHP = `
<?php

// Demonstrating Dependency Inversion Principle (DIP) in action.

// SwitchableDevice is an interface declaration, representing a high-level abstraction 
// for devices that can be switched on or off.
interface SwitchableDevice {
  public function turnOn();
  public function turnOff();
}

// LightBulb class is a low-level module as it implements the functionality 
// dictated by the SwitchableDevice interface.
class LightBulb implements SwitchableDevice {
  public function turnOn() {
    echo "LightBulb: Bulb turned on...\n"; // Specific implementation of turning on.
  }

  public function turnOff() {
    echo "LightBulb: Bulb turned off...\n"; // Specific implementation of turning off.
  }
}

// ElectricPowerSwitch class represents a high-level module because it relies on 
// an abstraction (SwitchableDevice) and not on the concrete implementation (LightBulb).
class ElectricPowerSwitch {
  private $device; // This will hold a device that implements SwitchableDevice.
  private $on; // Binary state indicator.

  // The constructor expects any device implementing SwitchableDevice, 
  // thereby inverting the dependency.
  public function __construct(SwitchableDevice $device) {
    $this->device = $device; // Storing the abstraction, not the concrete object.
    $this->on = false; // Initial state is 'off'.
  }

  // Method to toggle power based on the current state, 
  // interacting with the device via the SwitchableDevice interface.
  public function press() {
    if ($this->on) {
      $this->device->turnOff(); // Polymorphism in action.
      $this->on = false;
    } else {
      $this->device->turnOn(); // Polymorphism in action.
      $this->on = true;
    }
  }
}

// Client code: usage remains consistent even if a different SwitchableDevice is passed.
$bulb = new LightBulb(); // Though we instantiate LightBulb, we treat it as a SwitchableDevice.
$switch = new ElectricPowerSwitch($bulb); // ElectricPowerSwitch works with any SwitchableDevice.

$switch->press(); // Outputs: LightBulb: Bulb turned on...
$switch->press(); // Outputs: LightBulb: Bulb turned off...

?>
`;
const withoutDependencyInversionPHP = `
<?php

// Demonstrating the design without using the Dependency Inversion Principle (DIP).

// LightBulb class containing methods to turn a light bulb on or off.
// This is a low-level class in this scenario.
class LightBulb {
  public function turnOn() {
    echo "LightBulb: Bulb turned on...\n"; // Specific action.
  }

  public function turnOff() {
    echo "LightBulb: Bulb turned off...\n"; // Specific action.
  }
}

// ElectricPowerSwitch class directly controls the LightBulb, representing a high-level class.
// However, it violates DIP because it directly depends on a low-level module (LightBulb).
class ElectricPowerSwitch {
  private $bulb; // Fixed dependency on a LightBulb instance.
  private $on; // Binary state indicator.

  public function __construct() {
    $this->bulb = new LightBulb(); // Instantiating a specific low-level module.
    $this->on = false; // Initial state is 'off'.
  }

  // Method to toggle power, working directly with a LightBulb instance.
  public function press() {
    if ($this->on) {
      $this->bulb->turnOff(); // Direct control over low-level method.
      $this->on = false;
    } else {
      $this->bulb->turnOn(); // Direct control over low-level method.
      $this->on = true;
    }
  }
}

// Client code directly interacts with the high-level module without the flexibility 
// of substituting the low-level module with a different one.
$switch = new ElectricPowerSwitch(); // Dependent on LightBulb.

$switch->press(); // Outputs: LightBulb: Bulb turned on...
$switch->press(); // Outputs: LightBulb: Bulb turned off...

?>
`;
const withDependencyInversionPython = `
from abc import ABC, abstractmethod

# Abstract class or interface that will be used to adhere to the Dependency Inversion Principle.
class Switchable(ABC):
    @abstractmethod
    def turn_on(self):
        pass

    @abstractmethod
    def turn_off(self):
        pass


class LightBulb(Switchable):
    def turn_on(self):
        print("LightBulb: turned on...")

    def turn_off(self):
        print("LightBulb: turned off...")


class ElectricPowerSwitch:
    """The ElectricPowerSwitch class now relies on an abstraction (Switchable), 
    not a concrete class, which is a form of Dependency Inversion."""

    def __init__(self, device: Switchable):
        self.device = device  # Dependency is an instance of Switchable (abstraction).
        self.on = False

    def press(self):
        if self.on:
            self.device.turn_off()
            self.on = False
        else:
            self.device.turn_on()
            self.on = True


# We can now pass any object that implements Switchable to ElectricPowerSwitch.
bulb = LightBulb()
switch = ElectricPowerSwitch(bulb)

switch.press()  # Outputs: LightBulb: turned on...
switch.press()  # Outputs: LightBulb: turned off...

`;
const withoutDependencyInversionPython = `
# Simple example where the Dependency Inversion Principle is not applied.
# The high-level class ElectricPowerSwitch directly depends on the low-level class LightBulb.

class LightBulb:
    def turn_on(self):
        print("LightBulb: turned on...")

    def turn_off(self):
        print("LightBulb: turned off...")


class ElectricPowerSwitch:
    """The ElectricPowerSwitch class is directly dependent on the LightBulb class."""
    
    def __init__(self):
        self.bulb = LightBulb()  # Direct dependency
        self.on = False

    def press(self):
        if self.on:
            self.bulb.turn_off()
            self.on = False
        else:
            self.bulb.turn_on()
            self.on = True


# Testing the behavior
switch = ElectricPowerSwitch()
switch.press()  # Outputs: LightBulb: turned on...
switch.press()  # Outputs: LightBulb: turned off...

`;
const withDependencyInversionRuby = `
# Implementing Dependency Inversion Principle in Ruby.

# Switchable is an interface that enforces implementing classes to define turn_on and turn_off methods.
module Switchable
  def turn_on
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def turn_off
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

class LightBulb
  include Switchable

  def turn_on
    puts 'LightBulb: turned on...'
  end

  def turn_off
    puts 'LightBulb: turned off...'
  end
end

class ElectricPowerSwitch

  def initialize(device)
    @device = device  # Dependency on an interface (abstraction)
    @on = false
  end

  def press
    if @on
      @device.turn_off
      @on = false
    else
      @device.turn_on
      @on = true
    end
  end
end

# Now we can inject any object that includes the Switchable module.
bulb = LightBulb.new
switch = ElectricPowerSwitch.new(bulb)

switch.press # Outputs: LightBulb: turned on...
switch.press # Outputs: LightBulb: turned off...

`;
const withoutDependencyInversionRuby = `
# Here's a simplified example where the Dependency Inversion Principle is not followed.
# The high-level class ElectricPowerSwitch is directly dependent on the low-level class LightBulb.

class LightBulb
  def turn_on
    puts 'LightBulb: turned on...'
  end

  def turn_off
    puts 'LightBulb: turned off...'
  end
end

class ElectricPowerSwitch

  def initialize
    @bulb = LightBulb.new # Direct dependency
    @on = false
  end

  def press
    if @on
      @bulb.turn_off
      @on = false
    else
      @bulb.turn_on
      @on = true
    end
  end
end

# Testing the behavior
switch = ElectricPowerSwitch.new
switch.press # Outputs: LightBulb: turned on...
switch.press # Outputs: LightBulb: turned off...

`;
const withDependencyInversionRust = `
// Here's an example of adhering to the Dependency Inversion Principle in Rust.

// Switchable is a trait that enforces implementing structs to define turn_on and turn_off methods.
pub trait Switchable {
    fn turn_on(&self);
    fn turn_off(&self);
}

pub struct LightBulb;

impl LightBulb {
    pub fn new() -> LightBulb {
        LightBulb
    }
}

impl Switchable for LightBulb {
    fn turn_on(&self) {
        println!("LightBulb: Turned on...");
    }

    fn turn_off(&self) {
        println!("LightBulb: Turned off...");
    }
}

pub struct ElectricPowerSwitch<T: Switchable> {
    device: T,
    on: bool,
}

impl<T> ElectricPowerSwitch<T>
where
    T: Switchable,
{
    pub fn new(device: T) -> ElectricPowerSwitch<T> {
        ElectricPowerSwitch { device, on: false }
    }

    pub fn press(&mut self) {
        if self.on {
            self.device.turn_off();
            self.on = false;
        } else {
            self.device.turn_on();
            self.on = true;
        }
    }
}

fn main() {
    let bulb = LightBulb::new();
    let mut power_switch = ElectricPowerSwitch::new(bulb);

    power_switch.press(); // Outputs: LightBulb: Turned on...
    power_switch.press(); // Outputs: LightBulb: Turned off...
}

`;
const withoutDependencyInversionRust = `
// In this example, the Dependency Inversion Principle is not followed.
// The high-level module ElectricPowerSwitch is directly dependent on the low-level module LightBulb.

pub struct LightBulb;

impl LightBulb {
    pub fn new() -> LightBulb {
        LightBulb
    }

    pub fn turn_on(&self) {
        println!("LightBulb: Turned on...");
    }

    pub fn turn_off(&self) {
        println!("LightBulb: Turned off...");
    }
}

pub struct ElectricPowerSwitch {
    bulb: LightBulb,
    on: bool,
}

impl ElectricPowerSwitch {
    pub fn new(bulb: LightBulb) -> ElectricPowerSwitch {
        ElectricPowerSwitch { bulb, on: false }
    }

    pub fn press(&mut self) {
        if self.on {
            self.bulb.turn_off();
            self.on = false;
        } else {
            self.bulb.turn_on();
            self.on = true;
        }
    }
}

fn main() {
    let bulb = LightBulb::new();
    let mut power_switch = ElectricPowerSwitch::new(bulb);

    power_switch.press(); // Outputs: LightBulb: Turned on...
    power_switch.press(); // Outputs: LightBulb: Turned off...
}

`;
const withDependencyInversionSwift = `
import Foundation

// Defining a protocol that will act as an intermediary between the switch and the light bulbs or other devices.
protocol Switchable {
    func turnOn()
    func turnOff()
}

// The LightBulb class implements the Switchable protocol.
class LightBulb: Switchable {
    func turnOn() {
        print("LightBulb: turned on...")
    }

    func turnOff() {
        print("LightBulb: turned off...")
    }
}

// The Switch class now interacts with the Switchable type, not the concrete LightBulb class.
class Switch {
    private var device: Switchable // dependency on an abstraction
    private var on: Bool = false

    init(device: Switchable) {
        self.device = device
    }

    func press() {
        if on {
            device.turnOff()
            on = false
        } else {
            device.turnOn()
            on = true
        }
    }
}

// Usage
let bulb = LightBulb()
let lightSwitch = Switch(device: bulb) // Switch is now not directly dependent on LightBulb
lightSwitch.press() // Outputs: LightBulb: turned on...
lightSwitch.press() // Outputs: LightBulb: turned off...

`;

const withoutDependencyInversionSwift = `
import Foundation

// Here, the high-level module 'Switch' directly depends on the low-level module 'LightBulb'.
class LightBulb {
    func turnOn() {
        print("LightBulb: turned on...")
    }

    func turnOff() {
        print("LightBulb: turned off...")
    }
}

class Switch {
    private var lightBulb: LightBulb
    private var on: Bool = false

    init(lightBulb: LightBulb) {
        self.lightBulb = lightBulb
    }

    func press() {
        if on {
            lightBulb.turnOff()
            on = false
        } else {
            lightBulb.turnOn()
            on = true
        }
    }
}

// Usage
let bulb = LightBulb()
let lightSwitch = Switch(lightBulb: bulb)
lightSwitch.press() // Outputs: LightBulb: turned on...
lightSwitch.press() // Outputs: LightBulb: turned off...

`;

export {
  withDependencyInversionPseudoCode,
  withDependencyInversionCHash,
  withDependencyInversionCPP,
  withDependencyInversionGo,
  withDependencyInversionJava,
  withDependencyInversionJavascript,
  withDependencyInversionPHP,
  withDependencyInversionPython,
  withDependencyInversionRuby,
  withDependencyInversionRust,
  withDependencyInversionSwift,
  withoutDependencyInversionCHash,
  withoutDependencyInversionGo,
  withoutDependencyInversionCPP,
  withoutDependencyInversionJava,
  withoutDependencyInversionJavascript,
  withoutDependencyInversionPHP,
  withoutDependencyInversionPseudoCode,
  withoutDependencyInversionPython,
  withoutDependencyInversionRust,
  withoutDependencyInversionSwift,
  withoutDependencyInversionRuby,
};
