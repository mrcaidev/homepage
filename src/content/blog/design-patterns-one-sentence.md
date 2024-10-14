---
title: Design Patterns in One Sentence
description: Describe 23 mostly commonly used design patterns each in one sentence.
createdAt: 2023-01-16
---

## Factory Method

The abstract class focuses on business logic, while its subclasses determine the implementation details.

## Abstract Factory

2D factory method. Create different products of the same variant.

## Builder

Create product part by part, usually in chain.

## Prototype

Provide a method to clone itself.

## Singleton

Always return the same instance.

## Adapter

Encapsulate an instance of old class, and provide new interface to the outside.

## Bridge

Different abstraction layer and different implementation layer can be mixed at will.

## Composition

A tree where all nodes provide the same interface, the leaves do the job, and non-leaves aggregate the results of their own leaves.

## Decorator

Encapsulate an instance of a class, and provide the same interface to the outside.

## Facade

Encapsulate complicated logic, and provide simple interface to the outside.

## Flyweight

Create a new class for those memory-consuming, shared attributes, for which a factory is created for caching.

## Proxy

Encapsulate an instance of a class, provide the same interface to the outside, and manage the lifecycle of the internal instance.

## Chain of Responsibility

Process an object through a chain, where each link can determine whether to continue or terminate processing.

## Command

Abstract a callback function as a class, and makes it fetch arguments - explicitly on initialization or on its own - every time the command is executed.

## Iterator

Encapsulate an instance of a class, and provide the iteration method of this instance.

## Mediator

Elements in a system send their interaction information to the mediator, and listen to its schedule, rather than directly interacting with each other.

## Memento

Create snapshots of another class.

## Observer

The object notifies all of its observers of its latest update.

## State

Divide a class with volatile states into state and context, where the state executes all state-related operations and can modify the state on its own.

## Strategy

Abstract different strategies into classes, and let the business logic pick which one to use.

## Template Method

The template parent class implements a set of standard methods, while its subclasses overload methods according to their needs.

## Visitor

The visited class redirects request to the visitor, who extends the interface of the visited class.
