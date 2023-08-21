function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const maintenanceCalories = bmr * activity;
    const caloriesToLoseWeight = maintenanceCalories - 500; // Reducir 500 calorías para perder peso
    
    document.getElementById('result').textContent = `Calorías necesarias para bajar de peso: ${caloriesToLoseWeight.toFixed(0)}`;
  }
  