---
title: EC ⇄ PPM Converter
published: true
icon: calculator
---
# EC ⇄ PPM Converter

Quickly convert electrical conductivity (EC) values to parts per million (PPM) using
common conversion factors.

<div class="converter">
  <label for="ecValue"><strong>EC (mS/cm)</strong></label>
  <input id="ecValue" type="number" min="0" step="0.01" placeholder="1.2">

  <label for="ppmScale"><strong>Conversion Factor</strong></label>
  <select id="ppmScale">
    <option value="500">500 (NaCl)</option>
    <option value="640">640 (EU)</option>
    <option value="700" selected>700 (0.7 scale)</option>
  </select>

  <label for="ppmValue"><strong>PPM</strong></label>
  <input id="ppmValue" type="number" min="0" step="1" placeholder="840">

  <div class="converter__buttons">
    <button type="button" onclick="convertToPPM()">EC → PPM</button>
    <button type="button" onclick="convertToEC()">PPM → EC</button>
    <button type="button" onclick="resetConverter()">Reset</button>
  </div>
</div>

<script>
  const ecInput = document.getElementById('ecValue');
  const ppmInput = document.getElementById('ppmValue');
  const scaleSelect = document.getElementById('ppmScale');

  function convertToPPM() {
    const ec = parseFloat(ecInput.value);
    const factor = parseFloat(scaleSelect.value);
    if (isFinite(ec)) {
      ppmInput.value = Math.round(ec * factor);
    }
  }

  function convertToEC() {
    const ppm = parseFloat(ppmInput.value);
    const factor = parseFloat(scaleSelect.value);
    if (isFinite(ppm) && factor > 0) {
      ecInput.value = (ppm / factor).toFixed(2);
    }
  }

  function resetConverter() {
    ecInput.value = '';
    ppmInput.value = '';
    scaleSelect.value = '700';
  }
</script>

<style>
  .converter {
    max-width: 420px;
    display: grid;
    gap: 0.5rem;
  }
  .converter input,
  .converter select,
  .converter button {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .converter__buttons {
    display: flex;
    gap: 0.5rem;
  }
  .converter__buttons button {
    flex: 1;
    cursor: pointer;
  }
</style>
