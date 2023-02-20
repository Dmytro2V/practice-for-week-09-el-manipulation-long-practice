console.log("This is my profile page!");

// Phase 1A: Creating and appending new elements

const addElement = () => {
    const bodyDoc = document.body
    //h1
    let h1El = document.createElement("h1");
    document.body.appendChild(h1El);
    h1El.setAttribute("id", "name");

    h1El.innerText = "Dmytro"

    //Create a new unordered list element.
    let ul1 = document.createElement("ul");

    //Append at least four list items of details about yourself to your list.
    let li1 = document.createElement("li");
    ul1.appendChild(li1)
    let li2 = document.createElement("li");
    ul1.appendChild(li2)
    let li3 = document.createElement("li");
    ul1.appendChild(li3)
    let li4 = document.createElement("li");
    ul1.appendChild(li4)

    li1.innerText = "I am a junior program engineer"
    li2.innerText = "Currently I am finishing my study in the Application Academy"
    li3.innerText = "I like to learn programming and succeeding well"
    li4.innerText = "I am locating in Kiev, Ukraine"
    //Append your list to the body of your page.
    document.body.appendChild(ul1)

    //Phase 1B: Refactoring to make it programmatic
    // refactor the code for inserting li elements to be more programmatic and easily repeatable.
    let lis = [
        "App Academy is a great course of the program engeneering study",
        "It covers a lot of ctitical topics",
        "Total time is about 4-6 monthes of full-time study",
        "And level of material is quite good"
    ]
    const makeLis = function (ulEl, lisArr) {
        for (let i = 0; i < lisArr.length; i++) {
            let liI = document.createElement("li");
            ulEl.appendChild(liI);
            liI.innerText = lisArr[i];
        }
    }

    // Challenge: Use a function to programmatically create a chunk of HTML elements that has an HTML structure that you will be repeating often.

    const createEl = function (tag, parrent, attributeName, attributeValue, innerText) {
        let newEl = document.createElement(tag);
        parrent.appendChild(newEl);
        if (attributeName) {
            newEl.setAttribute(attributeName, attributeValue)
        };
        if (innerText) newEl.innerText = innerText

        return newEl;
    }

    let ul2 = createEl("ul", bodyDoc, "class", "my-details",)
    makeLis(ul2, lis)

    // // Phase 2: Adding CSS classes and styles

    // Add a class name of name to the h1 containing your name.
    h1El.setAttribute("class", "my-name")
    // Add a class name of my-details to the ul.
    ul1.setAttribute("class", "my-details")

    // Add a class name of detail to each li element you created inside your list.
    // skipping, need multiple set or using my function 


    // Phase 3: Adding a clock with the Date object

    //Create a new element and add it to the body of your page
    let spanClock = document.createElement('span')
    bodyDoc.appendChild(spanClock);
    
    //Use the JavaScript Date object to get the current time
    //Use setTimeout or setInterval to update the time every second
    spanClock.innerText ='current time is ...'
    setTimeout(function timeHandler() {
        spanClock.innerText = new Date();
        setTimeout(timeHandler, 1000);
        },500);
    // insert your clock into a new list item under your personal details that says "I live in City, State, and it's currently [CLOCK] here.
    let liClocked = document.createElement("li")
    liClocked.innerHTML = "I live in Kyiv, Ukraine, and it's currently "
    liClocked.appendChild(spanClock)
    let spanEnd = document.createElement('span')
    spanEnd.innerText =' here.'
    liClocked.appendChild(spanEnd)
    ul2.appendChild(liClocked)

//Bonus Phase: Get Custom
// just looked  for documentation, most of is easy

};





// run script when page is loaded
window.onload = addElement;