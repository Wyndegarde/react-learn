# Summary

State management refers to how data is managed within an application in an efficient manner so that it can respond to changes from user interactions and change the interface accordingly.

When the state changes the UI must also updates to reflect those changes.

State ranges from a single variable to a complex object which representst all of the application's data.

## Local State

Local state is the internal state of a single component within an Application. It is used to manage data that only concerns a specific component that other components don't require access to. 

## Global State

Global state concerns data that needs to be shared across multiple components within the application that communicate with each other. 

There exist libraries within reach that handle global state management. These libraries provide a central store or state container that holds the applications global state. Components then read data from the store/container and update it if they make changes.

Changes to the global state will trigger updates to the other relevant components which use the shared data.


# Notes:
My understanding is that:

- The UI is deriving it's values from state variables. 
- When some event occurs, a JavaScript function triggers, changing that state variable
- The UI, still reading from that state variable, now displays the changed value (from the JS function).
