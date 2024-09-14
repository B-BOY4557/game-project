//init values
let growthFactor = 1.2;
let resources = 0;
let miners = 0;

//** adjustable amounts **
//prestige
let prestigeBonus = 1; //percentage

//click
let clickPay = 1;   
let clickBonus = 1; //percentage

//miners
let minerBaseCost = 50;
let minerDiscount = 0; //percentage
let minerBasePay = 1;
let minerBonus = 1; //percentage
let minerCost = (minerBaseCost - (minerBaseCost * minerDiscount));

async function main() {
    while (true) {
        resources += (miners * minerBasePay * minerBonus * prestigeBonus); // Increment resources based on miners
        updateResourceDisplay(); // Update the display
        await sleep(2000); // Wait 2 seconds
    }
}

function resourceButton() {
    resources += (clickPay * clickBonus * prestigeBonus); // Increment resources by click pay amount
    updateResourceDisplay(); // Update the display immediately
}

function purchaseMiner() {
    if (resources >= minerCost) {
        resources -= minerCost; // Deduct the cost of a miner
        miners += 1; // Add a miner
        minerBaseCost = Math.round(minerBaseCost * growthFactor); // Update the miner's base cost by the growth Factor
        minerCost = minerBaseCost - (minerBaseCost * minerDiscount); // Recalculate the miner's total cost
        updateResourceDisplay(); // Update the display
    }
}


//system functions
// Update display total function
function updateResourceDisplay() {
    document.getElementById("resourceCounter").innerText = `Resources: ${resources.toFixed(0)}`;
    document.getElementById("minerCounter").innerText = `Miners: ${miners}`;
    document.getElementById("purchase-miner").innerText = `Purchase Miner (Cost: ${minerCost} Resources)`
    // Add any more things that need to be updated here, such as new buttons or different resources
}

//sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//initialization
updateResourceDisplay();
main(); // Start the main loop