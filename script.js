document.getElementById("coulombs-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coulomb's constant (Nm²/C²)
    const k = 8.99 * Math.pow(10, 9);

    // Get the input values
    const charge1 = parseFloat(document.getElementById("charge1").value);
    const charge2 = parseFloat(document.getElementById("charge2").value);
    const distance = parseFloat(document.getElementById("distance").value);

    // Check if the distance is valid (non-zero) to avoid division by zero
    if (distance === 0) {
        alert("Distance cannot be zero.");
        return;
    }

    // Calculate the force
    const force = (k * Math.abs(charge1 * charge2)) / Math.pow(distance, 2);

    // Display the result with animation
    const resultContainer = document.getElementById("result-container");
    const resultElement = document.getElementById("result");
    
    resultElement.innerHTML = `${language === "en" ? 'Electrostatic Force' : 'القوة الكهربائية'}: ${force.toFixed(2)} N`;
    
    // Make sure the result container is shown
    resultContainer.style.opacity = "1";  // This ensures the container fades in
});

// Language switch functionality
let language = "en";  // Default language

document.getElementById("en-btn").addEventListener("click", () => {
    switchLanguage("en");
});

document.getElementById("ar-btn").addEventListener("click", () => {
    switchLanguage("ar");
});

function switchLanguage(lang) {
    language = lang;
    
    if (lang === "en") {
        document.body.setAttribute("dir", "ltr");  // Left-to-right for English
        document.getElementById("title").innerText = "Coulomb's Law Calculator";
        document.getElementById("label-charge1").innerText = "Charge 1 (q1) in Coulombs:";
        document.getElementById("label-charge2").innerText = "Charge 2 (q2) in Coulombs:";
        document.getElementById("label-distance").innerText = "Distance (r) in meters:";
        document.getElementById("calculate-btn").innerText = "Calculate Force";
    } else if (lang === "ar") {
        document.body.setAttribute("dir", "rtl");  // Right-to-left for Arabic
        document.getElementById("title").innerText = "حاسبة قانون كولوم";
        document.getElementById("label-charge1").innerText = "الشحنة 1 (q1) بالكولوم:";
        document.getElementById("label-charge2").innerText = "الشحنة 2 (q2) بالكولوم:";
        document.getElementById("label-distance").innerText = "المسافة (r) بالأمتار:";
        document.getElementById("calculate-btn").innerText = "احسب القوة";
    }
}
