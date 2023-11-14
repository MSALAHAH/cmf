//              بِسْم اللَّه الرَّحْمن الرَّحِيم
//  وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا

var sentenceParts = [];

function updateSentence() {
    document.getElementById('sentence').value = sentenceParts.join('\n').trim();
}


// =============Head Title Href JS=============

document.getElementById('headSubject').addEventListener('click', function () {
    window.location.href = './index.html';
});




// =============Custom User Input JS=============

function updateSentenceWithUserInput() {
    var userInput = document.getElementById('userInput').value;

    // Remove the user input from sentenceParts if it's already there
    var userInputIndex = sentenceParts.indexOf(userInput);
    if (userInputIndex !== -1) {
        sentenceParts.splice(userInputIndex, 1);
    }

    // Add the user input to sentenceParts with space, hyphen, and space
    sentenceParts.push(userInput + ' - ');

    updateSentence();
}

// Function to clear the user input
function clearUserInput() {
    var userInput = document.getElementById('userInput');
    userInput.value = '';
    updateSentence();
}


// Add an event listener to the user input element
document.getElementById("userInput").addEventListener("input", updateSentence);

// Add event listeners to checkboxes
var checkboxes = document.getElementsByName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", updateSentence);
}

// Add an event listener to the clear button
document.getElementById("clearButton").addEventListener("click", clearUserInput);




// =============Alert JS=============

$(document).ready(function () {
    function hideAlert() {
        $(".alert").fadeOut();
    }

    setTimeout(hideAlert, 15000); // 30 seconds
});




// =============iFrame JS=============

const spanBold = document.getElementById('spanBold');
const iframeContainer = document.getElementById('iframeContainer');

spanBold.addEventListener('mouseover', () => {
    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.src = 'https://msalahah.github.io/R4/';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = 0;

    // Append the iframe to the container
    iframeContainer.innerHTML = ''; // Clear previous content
    iframeContainer.appendChild(iframe);

    // Display the container
    iframeContainer.style.display = 'block';
});

spanBold.addEventListener('mouseout', () => {
    // Hide the container when mouse leaves the spanBold element
    iframeContainer.style.display = 'none';
});




// =============the main two buttons and the alert message JS=============

function reloadPage() {
    window.location.reload();
}

function copyToClipboard() {
    var textarea = document.getElementById('sentence');
    textarea.select();
    document.execCommand('copy');
    alertFunction(); // Call the alertFunction to display the alert
}

function alertFunction() {
    var x = document.getElementById("alertMessage");
    x.style.display = "block";  // Set to "block" to make it visible

    setTimeout(function () {
        x.style.display = "none";  // Set to "none" to hide it after 3 seconds
    }, 3000);
}


// MAIN FUNCTIONS BELOW
// MAIN BOXES=======================================================================


// MAIN BOX 00 FUNCTION
function togglemainCheckbox00Options() {
    var mainCheckbox00Checkbox = document.getElementById('mainCheckbox00');
    var mainCheckbox00Options = document.getElementById('mainCheckbox00Options');

    if (mainCheckbox00Checkbox.checked) {
        mainCheckbox00Options.style.display = 'block';
    } else {
        mainCheckbox00Options.style.display = 'none';
    }
    updateSentence();
}


// MAIN BOX 01 FUNCTION
function togglemainCheckbox01Options() {
    var mainCheckbox01Checkbox = document.getElementById('mainCheckbox01');
    var mainCheckbox01Options = document.getElementById('mainCheckbox01Options');

    if (mainCheckbox01Checkbox.checked) {
        mainCheckbox01Options.style.display = 'block';
    } else {
        mainCheckbox01Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 02 FUNCTION
function togglemainCheckbox02Options() {
    var mainCheckbox02Checkbox = document.getElementById('mainCheckbox02');
    var mainCheckbox02Options = document.getElementById('mainCheckbox02Options');

    if (mainCheckbox02Checkbox.checked) {
        mainCheckbox02Options.style.display = 'block';
    } else {
        mainCheckbox02Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 03 FUNCTION
function togglemainCheckbox03Options() {
    var mainCheckbox03Checkbox = document.getElementById('mainCheckbox03');
    var mainCheckbox03Options = document.getElementById('mainCheckbox03Options');

    if (mainCheckbox03Checkbox.checked) {
        mainCheckbox03Options.style.display = 'block';
    } else {
        mainCheckbox03Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 04 FUNCTION
function togglemainCheckbox04Options() {
    var mainCheckbox04Checkbox = document.getElementById('mainCheckbox04');
    var mainCheckbox04Options = document.getElementById('mainCheckbox04Options');

    if (mainCheckbox04Checkbox.checked) {
        mainCheckbox04Options.style.display = 'block';
    } else {
        mainCheckbox04Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 05 FUNCTION
function togglemainCheckbox05Options() {
    var mainCheckbox05Checkbox = document.getElementById('mainCheckbox05');
    var mainCheckbox05Options = document.getElementById('mainCheckbox05Options');

    if (mainCheckbox05Checkbox.checked) {
        mainCheckbox05Options.style.display = 'block';
    } else {
        mainCheckbox05Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 06 FUNCTION
function togglemainCheckbox06Options() {
    var mainCheckbox06Checkbox = document.getElementById('mainCheckbox06');
    var mainCheckbox06Options = document.getElementById('mainCheckbox06Options');

    if (mainCheckbox06Checkbox.checked) {
        mainCheckbox06Options.style.display = 'block';
    } else {
        mainCheckbox06Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 07 FUNCTION
function togglemainCheckbox07Options() {
    var mainCheckbox07Checkbox = document.getElementById('mainCheckbox07');
    var mainCheckbox07Options = document.getElementById('mainCheckbox07Options');

    if (mainCheckbox07Checkbox.checked) {
        mainCheckbox07Options.style.display = 'block';
    } else {
        mainCheckbox07Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 08 FUNCTION
function togglemainCheckbox08Options() {
    var mainCheckbox08Checkbox = document.getElementById('mainCheckbox08');
    var mainCheckbox08Options = document.getElementById('mainCheckbox08Options');

    if (mainCheckbox08Checkbox.checked) {
        mainCheckbox08Options.style.display = 'block';
    } else {
        mainCheckbox08Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 09 FUNCTION
function togglemainCheckbox09Options() {
    var mainCheckbox09Checkbox = document.getElementById('mainCheckbox09');
    var mainCheckbox09Options = document.getElementById('mainCheckbox09Options');

    if (mainCheckbox09Checkbox.checked) {
        mainCheckbox09Options.style.display = 'block';
    } else {
        mainCheckbox09Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 10 FUNCTION
function togglemainCheckbox10Options() {
    var mainCheckbox10Checkbox = document.getElementById('mainCheckbox10');
    var mainCheckbox10Options = document.getElementById('mainCheckbox10Options');

    if (mainCheckbox10Checkbox.checked) {
        mainCheckbox10Options.style.display = 'block';
    } else {
        mainCheckbox10Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 11 FUNCTION
function togglemainCheckbox11Options() {
    var mainCheckbox11Checkbox = document.getElementById('mainCheckbox11');
    var mainCheckbox11Options = document.getElementById('mainCheckbox11Options');

    if (mainCheckbox11Checkbox.checked) {
        mainCheckbox11Options.style.display = 'block';
    } else {
        mainCheckbox11Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 12 FUNCTION
function togglemainCheckbox12Options() {
    var mainCheckbox12Checkbox = document.getElementById('mainCheckbox12');
    var mainCheckbox12Options = document.getElementById('mainCheckbox12Options');

    if (mainCheckbox12Checkbox.checked) {
        mainCheckbox12Options.style.display = 'block';
    } else {
        mainCheckbox12Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 13 FUNCTION
function togglemainCheckbox13Options() {
    var mainCheckbox13Checkbox = document.getElementById('mainCheckbox13');
    var mainCheckbox13Options = document.getElementById('mainCheckbox13Options');

    if (mainCheckbox13Checkbox.checked) {
        mainCheckbox13Options.style.display = 'block';
    } else {
        mainCheckbox13Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 14 FUNCTION
function togglemainCheckbox14Options() {
    var mainCheckbox14Checkbox = document.getElementById('mainCheckbox14');
    var mainCheckbox14Options = document.getElementById('mainCheckbox14Options');

    if (mainCheckbox14Checkbox.checked) {
        mainCheckbox14Options.style.display = 'block';
    } else {
        mainCheckbox14Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 15 FUNCTION
function togglemainCheckbox15Options() {
    var mainCheckbox15Checkbox = document.getElementById('mainCheckbox15');
    var mainCheckbox15Options = document.getElementById('mainCheckbox15Options');

    if (mainCheckbox15Checkbox.checked) {
        mainCheckbox15Options.style.display = 'block';
    } else {
        mainCheckbox15Options.style.display = 'none';
    }
    updateSentence();
}


// SUB_MAIN FUNCTIONS BELOW
// SUB_MAIN BOXES=======================================================================


// SUB BOX 00 FUNCTION 
function togglesubMainCheckbox00Options() {
    var subMainCheckbox00Checkbox = document.getElementById('subMainCheckbox00');
    var subMainCheckbox00Options = document.getElementById('subMainCheckbox00Options');

    if (subMainCheckbox00Checkbox.checked) {
        subMainCheckbox00Options.style.display = 'block';
    } else {
        subMainCheckbox00Options.style.display = 'none';
    }
    updateSentence();
}
// SUB BOX 01 FUNCTION
function togglesubMainCheckbox01Options() {
    var subMainCheckbox01Checkbox = document.getElementById('subMainCheckbox01');
    var subMainCheckbox01Options = document.getElementById('subMainCheckbox01Options');

    if (subMainCheckbox01Checkbox.checked) {
        subMainCheckbox01Options.style.display = 'block';
    } else {
        subMainCheckbox01Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 02 FUNCTION
function togglesubMainCheckbox02Options() {
    var subMainCheckbox02Checkbox = document.getElementById('subMainCheckbox02');
    var subMainCheckbox02Options = document.getElementById('subMainCheckbox02Options');

    if (subMainCheckbox02Checkbox.checked) {
        subMainCheckbox02Options.style.display = 'block';
    } else {
        subMainCheckbox02Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 03 FUNCTION
function togglesubMainCheckbox03Options() {
    var subMainCheckbox03Checkbox = document.getElementById('subMainCheckbox03');
    var subMainCheckbox03Options = document.getElementById('subMainCheckbox03Options');

    if (subMainCheckbox03Checkbox.checked) {
        subMainCheckbox03Options.style.display = 'block';
    } else {
        subMainCheckbox03Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 04 FUNCTION
function togglesubMainCheckbox04Options() {
    var subMainCheckbox04Checkbox = document.getElementById('subMainCheckbox04');
    var subMainCheckbox04Options = document.getElementById('subMainCheckbox04Options');

    if (subMainCheckbox04Checkbox.checked) {
        subMainCheckbox04Options.style.display = 'block';
    } else {
        subMainCheckbox04Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 05 FUNCTION
function togglesubMainCheckbox05Options() {
    var subMainCheckbox05Checkbox = document.getElementById('subMainCheckbox05');
    var subMainCheckbox05Options = document.getElementById('subMainCheckbox05Options');

    if (subMainCheckbox05Checkbox.checked) {
        subMainCheckbox05Options.style.display = 'block';
    } else {
        subMainCheckbox05Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 06 FUNCTION
function togglesubMainCheckbox06Options() {
    var subMainCheckbox06Checkbox = document.getElementById('subMainCheckbox06');
    var subMainCheckbox06Options = document.getElementById('subMainCheckbox06Options');

    if (subMainCheckbox06Checkbox.checked) {
        subMainCheckbox06Options.style.display = 'block';
    } else {
        subMainCheckbox06Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 07 FUNCTION
function togglesubMainCheckbox07Options() {
    var subMainCheckbox07Checkbox = document.getElementById('subMainCheckbox07');
    var subMainCheckbox07Options = document.getElementById('subMainCheckbox07Options');

    if (subMainCheckbox07Checkbox.checked) {
        subMainCheckbox07Options.style.display = 'block';
    } else {
        subMainCheckbox07Options.style.display = 'none';
    }
    updateSentence();
}





window.onload = function () {


    // GROUP01-togglesubMainCheckbox00Options()
    var togglesubMainCheckbox00Options1 = document.getElementById('subMainCheckbox00-0');
    var togglesubMainCheckbox00Options2 = document.getElementById('subMainCheckbox00-1');
    var togglesubMainCheckbox00Options3 = document.getElementById('subMainCheckbox00-2');
    var checkboxes = document.getElementsByName('checkbox');

    togglesubMainCheckbox00Options1.addEventListener('change', function () {
        if (togglesubMainCheckbox00Options1.checked) {
            togglesubMainCheckbox00Options2.checked = false;
            togglesubMainCheckbox00Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox00Options2.addEventListener('change', function () {
        if (togglesubMainCheckbox00Options2.checked) {
            togglesubMainCheckbox00Options1.checked = false;
            togglesubMainCheckbox00Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox00Options3.addEventListener('change', function () {
        if (togglesubMainCheckbox00Options3.checked) {
            togglesubMainCheckbox00Options1.checked = false;
            togglesubMainCheckbox00Options2.checked = false;
        }
        handleCheckboxChange();
    });


    // GROUP02-togglesubMainCheckbox01Options()
    var togglesubMainCheckbox01Options1 = document.getElementById('subMainCheckbox01-0');
    var togglesubMainCheckbox01Options2 = document.getElementById('subMainCheckbox01-1');
    var togglesubMainCheckbox01Options3 = document.getElementById('subMainCheckbox01-2');
    var checkboxes = document.getElementsByName('checkbox');

    togglesubMainCheckbox01Options1.addEventListener('change', function () {
        if (togglesubMainCheckbox01Options1.checked) {
            togglesubMainCheckbox01Options2.checked = false;
            togglesubMainCheckbox01Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox01Options2.addEventListener('change', function () {
        if (togglesubMainCheckbox01Options2.checked) {
            togglesubMainCheckbox01Options1.checked = false;
            togglesubMainCheckbox01Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox01Options3.addEventListener('change', function () {
        if (togglesubMainCheckbox01Options3.checked) {
            togglesubMainCheckbox01Options1.checked = false;
            togglesubMainCheckbox01Options2.checked = false;
        }
        handleCheckboxChange();
    });

    // GROUP03-togglesubMainCheckbox02Options()
    var togglesubMainCheckbox02Options1 = document.getElementById('subMainCheckbox02-0');
    var togglesubMainCheckbox02Options2 = document.getElementById('subMainCheckbox02-1');
    var togglesubMainCheckbox02Options3 = document.getElementById('subMainCheckbox02-2');
    var checkboxes = document.getElementsByName('checkbox');

    togglesubMainCheckbox02Options1.addEventListener('change', function () {
        if (togglesubMainCheckbox02Options1.checked) {
            togglesubMainCheckbox02Options2.checked = false;
            togglesubMainCheckbox02Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox02Options2.addEventListener('change', function () {
        if (togglesubMainCheckbox02Options2.checked) {
            togglesubMainCheckbox02Options1.checked = false;
            togglesubMainCheckbox02Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglesubMainCheckbox02Options3.addEventListener('change', function () {
        if (togglesubMainCheckbox02Options3.checked) {
            togglesubMainCheckbox02Options1.checked = false;
            togglesubMainCheckbox02Options2.checked = false;
        }
        handleCheckboxChange();
    });

    // GROUP04-togglemainCheckbox02Options()
    var togglemainCheckbox02Options1 = document.getElementById('mainCheckbox02-1');
    var togglemainCheckbox02Options2 = document.getElementById('mainCheckbox02-2');
    var togglemainCheckbox02Options3 = document.getElementById('mainCheckbox02-3');
    var checkboxes = document.getElementsByName('checkbox');

    togglemainCheckbox02Options1.addEventListener('change', function () {
        if (togglemainCheckbox02Options1.checked) {
            togglemainCheckbox02Options2.checked = false;
            togglemainCheckbox02Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglemainCheckbox02Options2.addEventListener('change', function () {
        if (togglemainCheckbox02Options2.checked) {
            togglemainCheckbox02Options1.checked = false;
            togglemainCheckbox02Options3.checked = false;
        }
        handleCheckboxChange();
    });

    togglemainCheckbox02Options3.addEventListener('change', function () {
        if (togglemainCheckbox02Options3.checked) {
            togglemainCheckbox02Options1.checked = false;
            togglemainCheckbox02Options2.checked = false;
        }
        handleCheckboxChange();
    });

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', handleCheckboxChange);
    }
}


// TO HANDLE THE REGULAR BOXES
function handleCheckboxChange() {
    var checkboxes = document.getElementsByName('checkbox');
    sentenceParts = [];

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            sentenceParts.push(checkbox.value);
        }
    }

    updateSentence();
}






// window.onload = function () {
//     var checkboxes = document.getElementsByName('checkbox');
//     for (var i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].addEventListener('change', handleCheckboxChange);
//     }
// }


// function handleCheckboxChange(event) {
//     var checkbox = event.target;
//     if (checkbox.checked) {
//         if (sentenceParts.indexOf(checkbox.value) === -1) {
//             sentenceParts.push(checkbox.value);
//         }
//     } else {
//         var index = sentenceParts.indexOf(checkbox.value);
//         if (index !== -1) {
//             sentenceParts.splice(index, 1);
//         }
//     }
//     updateSentence();
// }