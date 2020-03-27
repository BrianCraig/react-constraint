# Constraint Core

This is th core of react-constraint, for more general information go to [Main Documentation](../../README.md)  

## Technical information

Lets say you have the **LayoutDefinition** object, which contains the information about an entire view, this is used with **createLayoutComponent** to create the Component that will be showed in the client, this component requires _width_ and _height_ props to work; this is a Functional Component, so each re-render would basically compute everything again.

Then with the **LayoutDefinition** we must generate **ComponentInstance**'s, with this we can generate all our **ConstraintInstance**'s.

Each **ComponentInstance** holds information about the component _name_, and defined _positions for each side_, it starts with unknown definitions, and the work involves knowing this definitions.

Each **ConstraintInstance** holds information about a constraint between two _from and to components_, including _sides for each component_ involved, and _distance_ involved, also mantains the state of if it's resolver or not.

The **ResolveConstraint** is the function that tries to resolve a constraint.

The **ResolveLayout** is the function that given the _definition_, _width_ and _height_ creates the **ComponentInstance**'s and the **ConstraintInstance**'s, resolves them and returns the **ComponentInstance**'s or throws if there exists an error.
