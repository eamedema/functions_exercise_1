
//Circle dimensions
var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:",0));

  function getAreaOfCircle(myRadius) {
    return myRadius * myRadius * Math.PI;
  }

  function getCircumferenceOfCircle(myRadius) {
    return myRadius * 2 * Math.PI;
  }
  var areaCircle = getAreaOfCircle(myRadius);
  var circumCircle = getCircumferenceOfCircle(myRadius);

  console.log("A circle with a " + myRadius + " centimeter radius has an area of " + areaCircle + " centimeters, a circumeference of " + circumCircle);




//Square Dimension
var mySide = parseFloat(prompt("Enter the side length of your square in cm:",0));

  function getAreaOfSquare(mySide) {
    return mySide * mySide;
  }

  var areaSquare = getAreaOfSquare(mySide);

  console.log("A square with a " + mySide + " centimeter length has an area of " + areaSquare + " centimeters.");




//Triangle Dimension
var triangleBase = parseFloat(prompt("Enter the side base length of your triangle in cm:",0));
var triangleHeight = parseFloat(prompt("Enter the side height of your triangle in cm:",0));

  function getAreaOfTriangle() {
    return (triangleBase * triangleHeight) / 2;
  }

  var areaTriangle = getAreaOfTriangle();

  console.log("A triangle with a " + triangleBase + " centimeter base and a " + triangleHeight + " centimeter length has an area of " + areaTriangle)
