
function demonstrateObjectsAndArrays() {
    let myobject = { name: "Madras" };
    let newObject = myobject;
        myobject.name = "Chennai";
        let myarray = ["a", "e", "i", "o"];
        let vowelArray = myarray;
        myarray.push("u");
        console.log("Object Value:", newObject.name); 
        console.log("Array Values:", vowelArray);
        alert("Check the console output!");
    }
    window.onload = function () {
        demonstrateObjectsAndArrays();
};
export default demonstrateObjectsAndArrays;