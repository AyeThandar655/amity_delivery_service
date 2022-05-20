# Amity Delivery Service

## Step 1 : Install Node.js 
https://nodejs.org/en/download/package-manager/


## Step 2 : To run program for each cases

### Case 1 : Calculate the delivery cost of the given delivery route. Follow the route as given.
 
- Use this command  <i><b>"npm start"</b> 
<b> call in brower http://localhost:3000/calculateCost <b></i>
 
> Example. If you want to calculate the cost of Route A-B-E the entering input as you like uppercase or lowercase should be like this                            
> `A-B-E, A-D, E-A-C-F, A-D-F ` or `a-b-e, a-d, e-a-c-f, a-d-f `

### Case 2 : Calculate the number of possible delivery route that can be construct by the given conditions. 

- Use this command  <i><b>"npm start"</b> 
<b> call in brower http://localhost:3000/possibleRoute <b></i>

> Example. If you want to calculate the number of possible delivery route from E to D with a maximum of 4 stop the entering input as you like uppercase or lowercase should be like this                  
> ` E D 4, E E, E E null ` or ` e d 4, e e, e e null `

### Case 3 : Calculate the cheapest delivery route between two town.  

- Use this command  <i><b>"npm start"</b> 
<b> call in brower http://localhost:3000/lowestCostRoute <b></i>

> Example. If you want to calculate the cheapest delivery route between E to D the entering input as you like uppercase or lowercase should be like this         
> ` E D, E E ` or ` e d, e e `
