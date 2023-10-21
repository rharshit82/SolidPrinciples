const withDependencyInversionPseudoCode = `
# Abstraction
interface SwitchableDevice {
    function turnOn()
    function turnOff()
}

# Lower-level module
class LightBulb implements SwitchableDevice {
    function turnOn() {
        //... turn the bulb on ...
    }

    function turnOff() {
        //... turn the bulb off ...
    }
}

# Higher-level module
class ElectricPowerSwitch {
    SwitchableDevice device
    bool on

    # Depends on an abstraction, not the concrete class
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
bulb = new LightBulb()
switch = new ElectricPowerSwitch(bulb)  # ElectricPowerSwitch does not need to know the specific details of LightBulb
switch.press()
`;
const withoutDependencyInversionPseudoCode = `
class LightBulb {
    function turnOn() {
        //... turn the bulb on ...
    }

    function turnOff() {
        //... turn the bulb off ...
    }
}

# A high-level module depends directly on the low-level module
class ElectricPowerSwitch {
    LightBulb bulb

    # Directly depends on a concrete class LightBulb
    function constructor(LightBulb bulb) {
        this.bulb = bulb
    }

    function press() {
        //... check whether the light is on...
        //... and then turn it off or on accordingly ...
    }
}

# Usage
bulb = new LightBulb()
switch = new ElectricPowerSwitch(bulb)
switch.press()
`;
const withDependencyInversionCHash = `
using System;

// With Dependency Inversion Principle

public interface ISwitchableDevice
{
    void TurnOn();
    void TurnOff();
}

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

public class ElectricPowerSwitch
{
    private ISwitchableDevice device;
    private bool on;

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

public class ElectricPowerSwitch
{
    private LightBulb bulb;
    private bool on;

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

class SwitchableDevice {
public:
    virtual ~SwitchableDevice() = default;
    virtual void turnOn() = 0;
    virtual void turnOff() = 0;
};

class LightBulb : public SwitchableDevice {
public:
    void turnOn() override {
        std::cout << "LightBulb: Bulb turned on..." << std::endl;
    }

    void turnOff() override {
        std::cout << "LightBulb: Bulb turned off..." << std::endl;
    }
};

class ElectricPowerSwitch {
public:
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
    SwitchableDevice& device;
    bool on;
};

int main() {
    LightBulb bulb;
    ElectricPowerSwitch powerSwitch(bulb);
    powerSwitch.press(); // Turn On
    powerSwitch.press(); // Turn Off

    return 0;
}

`;
const withoutDependencyInversionCPP = `
#include <iostream>

// Without Dependency Inversion Principle

class LightBulb {
public:
    void turnOn() {
        std::cout << "LightBulb: Bulb turned on..." << std::endl;
    }

    void turnOff() {
        std::cout << "LightBulb: Bulb turned off..." << std::endl;
    }
};

class ElectricPowerSwitch {
public:
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
    LightBulb& bulb;
    bool on;
};

int main() {
    LightBulb bulb;
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

// Switchable interface
type Switchable interface {
	TurnOn()
	TurnOff()
}

// LightBulb struct
type LightBulb struct{}

// TurnOn method turns the light bulb on
func (lb *LightBulb) TurnOn() {
	fmt.Println("LightBulb: Bulb turned on...")
}

// TurnOff method turns the light bulb off
func (lb *LightBulb) TurnOff() {
	fmt.Println("LightBulb: Bulb turned off...")
}

// ElectricPowerSwitch struct
type ElectricPowerSwitch struct {
	device Switchable
	on     bool
}

// Press method toggles the power switch
func (s *ElectricPowerSwitch) Press() {
	if s.on {
		s.device.TurnOff()
		s.on = false
	} else {
		s.device.TurnOn()
		s.on = true
	}
}

func main() {
	bulb := &LightBulb{}
	switch := &ElectricPowerSwitch{device: bulb, on: false}
	switch.Press() // Turn On
	switch.Press() // Turn Off
}

`;
const withoutDependencyInversionGo = `
package main

import "fmt"

// Without Dependency Inversion Principle

// LightBulb struct
type LightBulb struct{}

// TurnOn method turns the light bulb on
func (lb *LightBulb) TurnOn() {
	fmt.Println("LightBulb: Bulb turned on...")
}

// TurnOff method turns the light bulb off
func (lb *LightBulb) TurnOff() {
	fmt.Println("LightBulb: Bulb turned off...")
}

// ElectricPowerSwitch struct
type ElectricPowerSwitch struct {
	bulb *LightBulb
	on   bool
}

// Press method toggles the power switch
func (s *ElectricPowerSwitch) Press() {
	if s.on {
		s.bulb.TurnOff()
		s.on = false
	} else {
		s.bulb.TurnOn()
		s.on = true
	}
}

func main() {
	bulb := &LightBulb{}
	switch := &ElectricPowerSwitch{bulb: bulb, on: false}
	switch.Press() // Turn On
	switch.Press() // Turn Off
}

`;
const withDependencyInversionJava = `
public class WithDependencyInversion {

    // Switchable interface is a high-level abstraction.
    interface Switchable {
        void turnOn();
        void turnOff();
    }

    // LightBulb class is a low-level module.
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

    // ElectricPowerSwitch class is a high-level module.
    static class ElectricPowerSwitch {
        public Switchable client;
        public boolean on;

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

    // Class ElectricPowerSwitch directly depends on LightBulb.
    static class ElectricPowerSwitch {
        private LightBulb bulb;
        private boolean on;

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

    static class LightBulb {
        public void turnOn() {
            System.out.println("LightBulb: Bulb turned on...");
        }

        public void turnOff() {
            System.out.println("LightBulb: Bulb turned off...");
        }
    }

    public static void main(String[] args) {
        LightBulb bulb = new LightBulb();
        ElectricPowerSwitch powerSwitch = new ElectricPowerSwitch(bulb);

        // Toggle the switch.
        powerSwitch.press();
        powerSwitch.press();
    }
}

`;
const withDependencyInversionJavascript = `
// Here we define an interface in a way that's possible in JavaScript
function SwitchableDevice() {
  if (this.constructor === SwitchableDevice) {
    throw new Error("Can't instantiate interface!");
  }
}

SwitchableDevice.prototype.turnOn = function() {
  throw new Error('Method turnOn() must be implemented.');
};

SwitchableDevice.prototype.turnOff = function() {
  throw new Error('Method turnOff() must be implemented.');
};

class LightBulb extends SwitchableDevice {
  turnOn() {
    console.log('LightBulb: Bulb turned on...');
  }

  turnOff() {
    console.log('LightBulb: Bulb turned off...');
  }
}

class ElectricPowerSwitch {
  constructor(device) {
    if (!(device instanceof SwitchableDevice)) {
      throw new Error('Device must implement the SwitchableDevice interface!');
    }
    this.device = device;
    this.on = false;
  }

  press() {
    if (this.on) {
      this.device.turnOff();
      this.on = false;
    } else {
      this.device.turnOn();
      this.on = true;
    }
  }
}

const bulb = new LightBulb();
const powerSwitch = new ElectricPowerSwitch(bulb);

powerSwitch.press(); // Outputs: LightBulb: Bulb turned on...
powerSwitch.press(); // Outputs: LightBulb: Bulb turned off...

`;
const withoutDependencyInversionJavascript = `
class LightBulb {
    turnOn() {
      console.log('LightBulb: Bulb turned on...');
    }
  
    turnOff() {
      console.log('LightBulb: Bulb turned off...');
    }
  }
  
  class ElectricPowerSwitch {
    constructor() {
      this.bulb = new LightBulb();
      this.on = false;
    }
  
    press() {
      if (this.on) {
        this.bulb.turnOff();
        this.on = false;
      } else {
        this.bulb.turnOn();
        this.on = true;
      }
    }
  }
  
  const switchUse = new ElectricPowerSwitch();
  switchUse.press(); // Outputs: LightBulb: Bulb turned on...
  switchUse.press(); // Outputs: LightBulb: Bulb turned off...
  
`;
const withDependencyInversionPHP = `
<?php

// An interface representing any switchable device. This is the abstraction.
interface SwitchableDevice {
  public function turnOn();
  public function turnOff();
}

// The LightBulb class implements the SwitchableDevice interface.
class LightBulb implements SwitchableDevice {
  public function turnOn() {
    echo "LightBulb: Bulb turned on...\n";
  }

  public function turnOff() {
    echo "LightBulb: Bulb turned off...\n";
  }
}

// The ElectricPowerSwitch class now depends on the abstraction rather than a concrete class.
class ElectricPowerSwitch {
  private $device;
  private $on;

  // Dependency is injected through the constructor.
  public function __construct(SwitchableDevice $device) {
    $this->device = $device; // Depends on an abstraction.
    $this->on = false;
  }

  // The method press() uses the methods from the SwitchableDevice interface.
  public function press() {
    if ($this->on) {
      $this->device->turnOff();
      this->on = false;
    } else {
      $this->device->turnOn();
      this->on = true;
    }
  }
}

// We can pass any object that implements SwitchableDevice to ElectricPowerSwitch.
$bulb = new LightBulb();
$switch = new ElectricPowerSwitch($bulb);

$switch->press(); // Outputs: LightBulb: Bulb turned on...
$switch->press(); // Outputs: LightBulb: Bulb turned off...

?>

`;
const withoutDependencyInversionPHP = `
<?php

// Here's a LightBulb class with methods to turn it on and off.
class LightBulb {
  public function turnOn() {
    echo "LightBulb: Bulb turned on...\n";
  }

  public function turnOff() {
    echo "LightBulb: Bulb turned off...\n";
  }
}

// The ElectricPowerSwitch class is directly dependent on the LightBulb class.
class ElectricPowerSwitch {
  private $bulb;
  private $on;

  public function __construct() {
    $this->bulb = new LightBulb(); // Direct dependency on the LightBulb class.
    $this->on = false;
  }

  // The method press() uses the turnOn() and turnOff() methods of the LightBulb class.
  public function press() {
    if ($this->on) {
      $this->bulb->turnOff();
      $this->on = false;
    } else {
      $this->bulb->turnOn();
      $this->on = true;
    }
  }
}

// Testing the behavior
$switch = new ElectricPowerSwitch();
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
