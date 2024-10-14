---
title: Design Patterns in Functional Programming
description: Design patterns in functional programming paradigm has two distinct features - decoupling of data and methods, and first-class functions.
createdAt: 2023-01-16
---

The emergence of design patterns is primarily due to the fact that OOP organizes code into classes with data-centric methods.

As a result, we often find ourselves having to
abstract "an action" to "someone is taking that action". That is, we have to explicitly clarify the action's executor, and expand a verb into subject-verb structure.

FP, on the other hand, saves the trouble by treating action as-is, and passing everything else as arguments.

Design patterns in functional programming paradigm has two distinct features:

1. **Decoupling of data and methods.** The methods are no longer centered on the internal data of the class, but rather receives data via arguments. [Pure functions](https://en.wikipedia.org/wiki/Pure_function) are preferred.
2. **[First-class functions](https://en.wikipedia.org/wiki/First-class_function).** Functions can be used as variables, arguments or return values, making FP comparable to OOP by closure, currying, etc.

## ✂️ Decoupling of Data and Methods

This renders many design patterns nearly pointless.

For example, **Singleton**. We can simply expost the instance as a constant and export the value using the language's built-in export methods. If you are familiar with `Axios`, you've probably seen this pattern a million times:

```ts
export const axiosInstance = axios.create({
  // Configuration of the instance.
});
```

This trick also applies to patterns like **Flyweight, Composite, Prototype**.

We can also see such scenarios in OOP design patterns where a class contains an instance of another class as a field, e.g. **Adapter, Proxy, Decorator, Bridge**. In FP actually, this is as simple as one function calling another, which is much more intuitive. Take adapter for example, this is how the code looks like under OOP:

```ts
interface LegacyService {
  call: (value: string) => void;
}

interface ModernService {
  call: (value: number) => void;
}

class LegacyLibrary implements LegacyService {
  call(value: string) {
    console.log(value);
  }
}

class LegacyToModernAdapter implements ModernService {
  protected adaptee: LegacyService;

  constructor(adaptee: LegacyService) {
    this.adaptee = adaptee;
  }

  call(value: number) {
    this.adaptee.call(String(value));
  }
}

const adapter = new LegacyToModernAdapter(new LegacyLibrary());
adapter.call(1); // 1
```

While FP makes the code above ridiculously troublesome:

```ts
function legacyCall(value) {
  console.log(value);
}

function adaptLegacyToModernCall(value) {
  legacyCall(String(value));
}

adaptLegacyToModernCall(1); // 1
```

... and that's why we can see many are arguing that we don't even need design patterns in FP.

## 🏷️ Functions as Arguments

**Factory method** makes this obvious.

The purpose of factory method is to decouple macroscopic business logic and specific implementation details. Take express as example, the business logic is "shipping, transportation and receipt", while the transportation part can be implemented in various details, e.g. by land, by sea or by air.

In OOP, we do this by placing business logic in an abstract class, and override its dependency with different subclasses.

```ts
interface Transportation {
  carry: () => void;
}

abstract class Logistics {
  // Does not care about implementation details.
  abstract createTransportation(): Transportation;

  // Only cares about business logic.
  deliver() {
    const transportation = this.createTransportation();
    console.log("Shipping");
    transportation.carry(); // Whatever can carry.
    console.log("Receipt");
  }
}

class Ship implements Transportation {
  carry() {
    console.log("By ship");
  }
}

class SeaLogistics extends Logistics {
  // Override abstract "transportation" with specific "ship".
  createTransportation() {
    return new Ship();
  }
}

class Plane implements Transportation {
  carry() {
    console.log("By plane");
  }
}

class AirLogistics extends Logistics {
  // Override abstract "transportation" with specific "plane".
  createTransportation() {
    return new Plane();
  }
}

const seaLogistics = new SeaLogistics();
seaLogistics.deliver(); // Shipping, By ship, Receipt
const airLogistics = new AirLogistics();
airLogistics.deliver(); // Shipping, By plane, Receipt
```

Reasonable, but unnecessary. For the sake of OOP, we have to come up with a ship for shipping, a plane for airlifting. To hide this difference for the abstract class, we then abstract a `Transportation` interface to unify ship and plane.

But once we've finished writing all of these codes, let's take a look back and ask ourselves: what do we really want to do? We simply want to enable dynamic selection of various actions between shipping and receipt!

This is as easy as pie in FP, since we can pass the action itself as an argument to business logic.

```ts
function carryByShip() {
  console.log("By ship");
}

function carryByPlane() {
  console.log("By plane");
}

function deliver(carry: () => void) {
  console.log("Shipping");
  carry();
  console.log("Receipt");
}

deliver(carryByShip); // Shipping, By ship, Receipt
deliver(carryByPlane); // Shipping, By plane, Receipt
```

As stated in the beginning of this post, there is no need to imagine an executor of the action in FP. We simply need to tell `deliver` by arguments how to transport. That's all!

It's worth noting that **when OOP requires two classes to implement the same interface, FP will correspondingly require two functions to have the same signature.** In this example, `Ship` and `Plane` both implement `Transportation` interface, so correspondingly `carryByShip` and `carryByPlane` should both have `() => void` signature.

## 🖇️ Function Composition

**Builder** pattern is a perfect example for this.

```ts
type House = string[];
type Builder = (house: House) => House;

const buildLivingRoom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("living room");
  return nextHouse;
};

const buildBedroom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("bedroom");
  return nextHouse;
};

const buildBathRoom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("bathroom");
  return nextHouse;
};

function compose(...builders: Builder[]) {
  return (target: House) =>
    builders.reduce((result, build) => build(result), target);
}

const build = compose(
  buildLivingRoom,
  buildBedroom,
  buildBedroom,
  buildBathRoom,
);
const house = build([]);
console.log(house);
```

Functions are often deeply nested, since FP cannot chain methods by returning `this` at the end of each method. As a workaround, we can apply effects layer by layer with `reduce`, flattening the functions to call.

This involves two concepts: [Currying](https://en.wikipedia.org/wiki/Currying) and [pure functions](https://en.wikipedia.org/wiki/Pure_function), which are both important in FP.
