---
title: VPD Calculator
published: true
icon: cloud
---
# Vapor Pressure Deficit (VPD) Calculator

Estimate VPD using your current temperature and humidity readings to dial in
ideal growing conditions.

<div class="vpd-calculator">
  <label for="airTemp"><strong>Air Temperature (°C)</strong></label>
  <input id="airTemp" type="number" step="0.1" placeholder="26">

  <label for="leafTemp"><strong>Leaf Temperature (°C)</strong> <small>(optional)</small></label>
  <input id="leafTemp" type="number" step="0.1" placeholder="25">

  <label for="humidity"><strong>Relative Humidity (%)</strong></label>
  <input id="humidity" type="number" step="1" placeholder="60">

  <button type="button" onclick="calculateVPD()">Calculate VPD</button>

  <p id="vpdResult" class="vpd-result">VPD: — kPa</p>
  <p class="vpd-tip">Optimal VPD for most cannabis grows ranges from 0.8–1.2 kPa in veg
  and 1.2–1.6 kPa in flower.</p>
</div>

<script>
  function saturationVaporPressure(tempC) {
    // Tetens equation, returns kPa
    return 0.6108 * Math.exp((17.27 * tempC) / (tempC + 237.3));
  }

  function calculateVPD() {
    const airTemp = parseFloat(document.getElementById('airTemp').value);
    const leafTempInput = document.getElementById('leafTemp').value;
    const humidity = parseFloat(document.getElementById('humidity').value);
    const resultEl = document.getElementById('vpdResult');

    if (!isFinite(airTemp) || !isFinite(humidity)) {
      resultEl.textContent = 'VPD: please provide at least air temperature and humidity.';
      return;
    }

    const leafTemp = leafTempInput === '' ? airTemp : parseFloat(leafTempInput);
    const svpLeaf = saturationVaporPressure(leafTemp);
    const svpAir = saturationVaporPressure(airTemp);
    const vaporPressure = svpAir * (humidity / 100);
    const vpd = Math.max(svpLeaf - vaporPressure, 0);

    resultEl.textContent = `VPD: ${vpd.toFixed(2)} kPa`;
  }
</script>

<style>
  .vpd-calculator {
    max-width: 420px;
    display: grid;
    gap: 0.75rem;
  }
  .vpd-calculator input,
  .vpd-calculator button {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .vpd-calculator button {
    cursor: pointer;
  }
  .vpd-result {
    font-weight: bold;
  }
  .vpd-tip {
    font-size: 0.9rem;
    color: #555;
  }
</style>
