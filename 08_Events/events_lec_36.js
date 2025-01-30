// {
//   //* onclick

//   //*Method-I (using onclick in the HTML tag itself)
//   //! This method is avoided and not a good practice

//   // <img width="200px" id="prayer" src="" alt="" onclick = "alert ('Prayer done!')">

//   //* Method-II (using .onclick in JS)
//   //! This is also genrally avoided - since this gives us less features and is not the modern approach

//   document.getElementById("prayer").onclick = function () {
//     alert("Prayer done!");
//   };

//   //*Method-III (attachEvent() during early days)

//   //* Method-IV (using .onEvent in jQuery)

//   //* Method-V (using eventListener)
//   //! This is the best approach/practice (use this)

//   // .addEventListener ('event_name', inline function)

//   document.getElementById("owl").addEventListener("click", function () {
//     alert("Owl clicked!");
//   });

//   //Note: There are three parameters in .addEventListener. The third one is by default false.
// }

// {
//   document.getElementById("river").addEventListener(
//     "click",
//     function (e) {
//       console.log(e);
//     },
//     false
//   ); //false is the default value of third parameter

//   //? Types of event object to know (for interviews):

//   /*


//     -type
//     -timeStamp
//     -preventDefault
//     -target
//     -toElement
//     -srcElement
//     -currentTarget
//     -clientX
//     -clientY
//     -screenX
//     -screenY
//     -altkey
//     -ctrlkey
//     -shiftkey
//     -keyCode    
    
//     */
// }
// {
//     //? The parameter of the function is the event object. You can see by doing console.log ("parameter_name")
// }
// {
//   /*

//     The two types of events in JavaScript's event propagation model are:

//     //* Bubble Event (Event Bubbling) and Capture Event (Event Capturing or Trickling)
    
//     1️⃣ Event Bubbling (Default behavior)

//     The event starts at the target element and bubbles up through its ancestors.

//     Example: If you click a button inside a div, the event first triggers on the button, then on the div, and then on the body, etc.

//     Handlers set with .addEventListener(event, handler) by default use bubbling. (the third parameter is by default is false)


//     2️⃣ Event Capturing (Trickling)

//     The event starts at the topmost ancestor (like document or body) and trickles down to the target element.

//     Example: If you click a button inside a div, the event first triggers on body, then the div, then on the button, etc.

//     To enable capturing, you must set the useCapture parameter to true in .addEventListener(event, handler, true).


// */
// }

// {

//     //* Event Bubbling (default behaviour)


//     document.getElementById('images').addEventListener('click', function (e) {
//         console.log("Clicked inside images (ul)");
//     })

//     document.getElementById('river').addEventListener ('click', function (e) {
//         console.log("Clicked river (li)");
//     })

//     //! If we run this, we will first get "Clicked river (li)" and then "Clicked inside images (ul)". Since, here by default it is false



//     //* Event Capturing


//     document.getElementById('images').addEventListener('click', function (e) {
//         console.log("Clicked inside images (ul)");
//     }, true)

//     document.getElementById('japan').addEventListener ('click', function (e) {
//         console.log("Clicked japan (li)");
//     }, true)

//     //! If we run this, we will first get "Clicked inside images (ul)" and then "Clicked japan (li)". Since, here we have set the third parameter to true


// }

// {

//     //* .stopPropagation()

//     //? This prevents the event from propagating further

//     document.getElementById('images').addEventListener('click', function (e) {
//         console.log("Clicked inside images (ul)");
//     }, false)

//     document.getElementById('river').addEventListener ('click', function (e) {
        
        
//         console.log("Clicked river (li)");
//         e.stopPropagation() //! This prevents event from propagating (here bubbling). Therfore, only this event is triggered and not the above one (which would have been triggered after this one, due to bubbling)
        
//     }, false)


// }

{

    //* preventDefault()
    //? prevents the default behaviour of a tag

    document.getElementById('google').addEventListener ('click', function (e) {
        console.log("Google Clicked!");
        e.preventDefault()
    }, false);

    //! Here by default, google link should have been opened. But due to .preventDefault(), it didn't do so...

    //* .target
    //? gives us the target element

    document.querySelector ('#images').addEventListener ('click', function (e) {
        console.log(e.target); //gives us the element of images which was selected

        console.log(e.target.parentNode); //? gives us the parentNode of the target element (here the parent element of the img element is li element)
    }, false)


    //* .tagName 
    //? This gives us the tag name of the target element is uppercase

    document.querySelector ('#images').addEventListener ('click', function (e) {
        console.log(e.target.tagName); //? This gives us the tag name of the target element
    })

}

{

    //* Removing an image when clicked on it

    document.querySelector('#images').addEventListener ('click', function (e) {

        //* Method-I (modern approach)

        const toBeRemoved = e.target.parentNode

        if (e.target.tagName == 'IMG') {

        toBeRemoved.remove() //? This is the modern approach

        //* Method-II (used earlier)

        /*

        //? This method was used earlier to do the same

        const toBeRemoved2 = e.target.parentNode

        toBeRemoved2.parentNode.removeChild(toBeRemoved2) //here toBeRemoved2.parentNode gives us the ul element, of which we removed the toBeRemoved2 child

        */
        }

    })

    //? Why the if condition was used above?
    //! If we click on image then the target becomes img and hence its parent becomes li, which gets removed!! This is what we want.... BUT!!! If we click inside ul anywhere other than the image, the target element becomes li, whose parent element is ul, which when gets removed, removes the ul entirely (which causes every elements inside the ul to get deleted)
}



