
import Card from "./Card";

function Tours({tours, removeTour}){

   return(
   <div className="container">
        <div>    
          <h2 className="title">Plan with Love</h2>
        </div>
   <div className="cards">
       {  tours.map((tour)=>{
        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
       })}
   </div>
  
   </div>


   );

}


export default Tours;

/*This code defines a React component called "Tours" using a function component syntax. Here's a breakdown of what the code does:

1. The function component is defined with the name "Tours" and it takes a single parameter, "tours". This parameter is assumed to be an array of tour objects.

2. The component returns JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. The JSX code is wrapped in parentheses to return a single JSX expression.

3. The JSX code consists of a `<div>` element that contains two child elements.

4. The first child element is a `<div>` containing an `<h2>` element with the text "Plan with Love". This creates a heading for the component.

5. The second child element is another `<div>` element. Inside this `<div>`, the code uses the `map()` method on the "tours" array to iterate over each tour object.

6. For each tour object, a `<Card>` component is rendered with the spread operator `{...tour}`. The spread operator allows you to pass the properties of the tour object as individual props to the `<Card>` component.

7. Finally, the entire JSX expression is wrapped in a parent `<div>` element.

8. The component is then exported using the `export default` statement, which allows it to be imported and used in other parts of the application.

In summary, this React component takes an array of tour objects as input, and it renders a heading "Plan with Love" followed by a list of `<Card>` components, one for each tour object in the array.









// what spread operator does?





The spread operator (`...`) is a JavaScript syntax that allows you to expand elements of an iterable (like an array or an object) into individual elements. It can be used in various contexts, including arrays, function calls, and object literals.

In the given code, the spread operator is used in the following line:

```jsx
return <Card {...tour}></Card>
```

Here, the spread operator is used to pass the properties of the `tour` object as individual props to the `<Card>` component. It spreads the key-value pairs of the `tour` object and passes them as separate props to the `<Card>` component. This is a convenient way to pass multiple props without explicitly specifying each prop individually.

For example, if the `tour` object has properties like `title`, `description`, and `image`, the spread operator will expand these properties into separate props when passing them to the `<Card>` component:

```jsx
<Card title={tour.title} description={tour.description} image={tour.image}></Card>
```

Using the spread operator, the code above can be simplified to:

```jsx
<Card {...tour}></Card>
```

This shorthand notation can be especially useful when dealing with objects that have many properties, as it reduces the need to manually specify each prop.*/