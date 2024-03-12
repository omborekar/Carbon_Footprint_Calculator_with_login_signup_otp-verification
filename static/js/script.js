// Sample brand and model data
const carData = [
    ["Maruti Suzuki", "Alto", "Alto K10", "Baleno", "Brezza", "Celerio", "Ciaz", "Dzire", "Eeco", "Ertiga", "Ignis", "Fronx", "Grand Vitara", "Invicto", "Jimny", "S-Presso", "Swift", "Wagon-R", "XL6"],
    ["Hyundai", "Alcazar", "New i20", "Aura", "Exter", "Grand i10 Nios", "i20 N Line", "Ioniq 5", "Kona Electric", "Creta", "Verna", "Tucson", "Venue", "Venue N Line", "Creta N Line"],
    ["Tata", "Altroz", "Harrier", "Nexon", "Nexon EV", "Punch", "Punch Ev", "Safari", "Tiago", "Tiago Ev", "Tigor", "Tigor Ev"],
    ["Honda", "Amaze", "City", "City e:HEV", "Elevate"],
    ["Mahindra", "Bolero", "Bolero Neo", "Marazzo", "Scorpio Classic", "Scorpio N", "Thar", "XUV 300", "XUV700", "XUV400", "Thar 5-Door"],
    ["Renault", "Kwid", "Triber", "Kiger", "K-ZE"],
    ["Volkswagen", "Tiguan", "Taigun", "Virtus", "Tiguan AllSpaces"],
    ["Skoda", "Kushaq", "Kodiaq", "Octavia", "Superb", "Slavia"],
    ["Toyota", "Camry", "Fortuner", "Glanza", "Hilux", "Innova Crysta", "Innova Hycross", "Rumion", "Urban Cruiser Hyryder", "Vellfire"],
    ["MG", "Gloster", "Hector", "Hector Plus", "ZS-EV", "Astor"],
    ["KIA", "Carnival", "Seltos", "Sonet", "Carens", "EV6"],
    ["Jeep", "Compass", "Wrangler", "Meridian", "Grand Cherokee"],
    ["Nissan", "Magnite"],
    ["Citroen", "C3 Aircross", "C3", "e-C3", "C5 Aircross"],
    ["BYD", "BYD ATTO 3", "BYD SEAL"],
];

// Example emission factors (replace with actual values)
const emissionFactors = {
    "Alto": 120,
    "Alto K10": 125,
    "Baleno": 130,
    "Brezza": 135,
    "Celerio": 120,
    "Ciaz": 140,
    "Dzire": 125,
    "Eeco": 120,
    "Ertiga": 135,
    "Ignis": 130,
    "Fronx": 125,
    "Grand Vitara": 140,
    "Invicto": 130,
    "Jimny": 135,
    "S-Presso": 120,
    "Swift": 125,
    "Wagon-R": 120,
    "XL6": 135,
    "Alcazar": 150,
    "New i20": 155,
    "Aura": 145,
    "Exter": 140,
    "Grand i10 Nios": 140,
    "i20 N Line": 155,
    "Ioniq 5": 160,
    "Kona Electric": 160,
    "Creta": 150,
    "Verna": 145,
    "Tucson": 155,
    "Venue": 145,
    "Venue N Line": 155,
    "Creta N Line": 160,
    "Altroz": 130,
    "Harrier": 140,
    "Nexon": 135,
    "Nexon EV": 160,
    "Punch": 135,
    "Punch Ev": 160,
    "Safari": 145,
    "Tiago": 130,
    "Tiago Ev": 155,
    "Tigor": 135,
    "Tigor Ev": 160,
    "Amaze": 140,
    "City": 150,
    "City e:HEV": 160,
    "Elevate": 140,
    "Bolero": 145,
    "Bolero Neo": 140,
    "Marazzo": 150,
    "Scorpio Classic": 145,
    "Scorpio N": 150,
    "Thar": 155,
    "XUV 300": 145,
    "XUV700": 160,
    "XUV400": 155,
    "Thar 5-Door": 160,
    "Kwid": 120,
    "Triber": 135,
    "Kiger": 130,
    "K-ZE": 120,
    "Tiguan": 150,
    "Taigun": 145,
    "Virtus": 140,
    "Tiguan AllSpaces": 155,
    "Kushaq": 140,
    "Kodiaq": 150,
    "Octavia": 145,
    "Superb": 155,
    "Slavia": 140,
    "Camry": 160,
    "Fortuner": 160,
    "Glanza": 145,
    "Hilux": 160,
    "Innova Crysta": 155,
    "Innova Hycross": 160,
    "Rumion": 140,
    "Urban Cruiser Hyryder": 140,
    "Vellfire": 160,
    "Gloster": 160,
    "Hector": 155,
    "Hector Plus": 155,
    "ZS-EV": 160,
    "Astor": 150,
    "Carnival": 160,
    "Seltos": 150,
    "Sonet": 145,
    "Carens": 150,
    "EV6": 160,
    "Compass": 150,
    "Wrangler": 160,
    "Meridian": 140,
    "Grand Cherokee": 155,
    "Magnite": 135,
    "C3 Aircross": 150,
    "C3": 140,
    "e-C3": 160,
    "C5 Aircross": 155,
    "BYD ATTO 3": 160,
    "BYD SEAL": 150,
};

// Function to populate car brands dropdown
function populateCarBrands() {
    const carBrandDropdown = document.getElementById('carBrand');
    carData.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand[0];
        option.textContent = brand[0];
        carBrandDropdown.appendChild(option);
    });
}

// Function to populate car models dropdown based on selected brand
function populateCarModels() {
    const carBrand = document.getElementById('carBrand').value;
    const carModelDropdown = document.getElementById('carModel');
    carModelDropdown.innerHTML = ''; // Clear previous options

    const brandIndex = carData.findIndex(brand => brand[0] === carBrand);
    if (brandIndex !== -1) {
        for (let i = 1; i < carData[brandIndex].length; i++) {
            const option = document.createElement('option');
            option.value = carData[brandIndex][i];
            option.textContent = carData[brandIndex][i];
            carModelDropdown.appendChild(option);
        }
    }
}

// Function to calculate carbon footprint
function calculateCarbonFootprint() {
    const carBrand = document.getElementById('carBrand').value;
    const carModel = document.getElementById('carModel').value;
    const fuelType = document.getElementById('fuelType').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const frequency = document.getElementById('frequency').value;

    var container = document.getElementById("result");
    if (container.style.display === "none") {
        container.style.display = "block";
    }

    // Check if a car model is selected
    if (!carModel) {
        alert('Please choose a car model.');
        return;
    }

    // Check for valid numeric inputs
    if (isNaN(mileage) || isNaN(distance) || mileage <= 0 || distance <= 0) {
        alert('Please enter valid numeric values for mileage and distance.');
        return;
    }

    // Calculate CO2 Emission
    const emissionFactor = emissionFactors[carModel];
    const fuel = distance / mileage;
    const co2Emission = (fuel) * (emissionFactor / 1000) * 1000;

    var fuelAnnual = fuel;
    if (frequency === 'daily') {
        fuelAnnual *= 365;
    } else if (frequency === 'monthly') {
        fuelAnnual *= 12;
    }

    var co2EmissionAnnual = co2Emission;
    if (frequency === 'daily') {
        co2EmissionAnnual *= 365;
    } else if (frequency === 'monthly') {
        co2EmissionAnnual *= 12;
    }
    

    // Adjust distance based on frequency
    var adjustedDistance = distance;
    if (frequency === 'daily') {
        adjustedDistance *= 365;
    } else if (frequency === 'monthly') {
        adjustedDistance *= 12;
    }

    // Calculate Number of Trees and Small Plants Required
    const numberOfTrees = co2EmissionAnnual * 47.9 / 1000;
    const numberOfSmallPlants = numberOfTrees * 40;

    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerHTML = `
    <h2>Result</h2>
    <strong>Car Information:</strong>
<table class="table table-sm">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Brand</td>
            <td>${carBrand}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${carModel}</td>
        </tr>
        <tr>
            <td>Fuel Type</td>
            <td>${fuelType}</td>
        </tr>
        <tr>
            <td>Mileage</td>
            <td>${mileage} km/l</td>
        </tr>
        <tr>
            <td>Annual Fuel Consumed</td>
            <td>${fuelAnnual} km/l</td>
        </tr>
        <tr>
            <td>Distance Travelled (${frequency})</td>
            <td>${distance} km</td>
        </tr>
        <tr>
            <td>Distance Travelled (Annual)</td>
            <td>${adjustedDistance} km</td>
        </tr>
    </tbody>
</table>
<br>
<hr>

<strong>Carbon Footprint:</strong>
<table class="table table-sm">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${frequency} CO2 Emission</td>
            <td>${co2Emission.toFixed(2)} kg CO2 equivalent</td>
        </tr>
        <tr>
            <td>Annual CO2 Emission</td>
            <td>${co2EmissionAnnual.toFixed(2)} kg CO2 equivalent</td>
        </tr>
    </tbody>
</table>
<br>
<hr>

<strong>Offsetting:</strong>
<table class="table table-sm">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Number of Trees Needed</td>
            <td>${Math.ceil(numberOfTrees)}</td>
        </tr>
        <tr>
            <td>Number of Small Plants Needed</td>
            <td>${Math.ceil(numberOfSmallPlants)}</td>
        </tr>
    </tbody>
</table>
<br>
        <!-- Print button -->
        <div class="d-grid gap-2 col-6 mx-auto">
           <button onclick="printResult()"class="btn btn-primary" type="button">Print Result</button>
        </div>
    `;
}

function printResult() {
    const resultContainer = document.querySelector('.container-result');
    
    if (!resultContainer) {
        console.error('Result container not found.');
        return;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Result</title>');
    
    // Include the main CSS file or any additional stylesheets
    printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">');
    printWindow.document.write('<link rel="stylesheet" href="/static/css/styles.css">'); // Adjust the path based on your Flask project structure
    printWindow.document.write('</head><body>');

    // Include the entire container with its styles
    printWindow.document.write('<div class="container" style="max-width: inherit; margin: 50px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);">');
    printWindow.document.write(resultContainer.innerHTML);
    printWindow.document.write('</div>');

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// Populate car brands dropdown on page load
populateCarBrands();
