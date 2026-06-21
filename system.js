// ==================== % m/m ====================
function calcMM(tipo) {
    const masaSoluto = parseFloat(document.getElementById('mm-masa-soluto').value);
    const masaSolucion = parseFloat(document.getElementById('mm-masa-solucion').value);
    const percent = parseFloat(document.getElementById('mm-percent').value);
    let resultado = '';

    if (tipo === 'percent') {
        if (isNaN(masaSoluto) || isNaN(masaSolucion) || masaSolucion <= 0) {
            alert('❌ Ingresa valores válidos para masa del soluto y solución');
            return;
        }
        const calc = (masaSoluto / masaSolucion) * 100;
        resultado = `%m/m = <strong>${calc.toFixed(3)}</strong> %`;
    } 
    else if (tipo === 'masa-soluto') {
        if (isNaN(percent) || isNaN(masaSolucion) || masaSolucion <= 0) {
            alert('❌ Ingresa %m/m y masa de la solución');
            return;
        }
        const calc = (percent / 100) * masaSolucion;
        resultado = `Masa del soluto = <strong>${calc.toFixed(3)}</strong> g`;
    } 
    else if (tipo === 'masa-solucion') {
        if (isNaN(percent) || isNaN(masaSoluto) || percent <= 0) {
            alert('❌ Ingresa % m/m y masa del soluto');
            return;
        }
        const calc = masaSoluto / (percent / 100);
        resultado = `Masa de la solución = <strong>${calc.toFixed(3)}</strong> g`;
    }
    document.getElementById('mm-result').innerHTML = resultado;
}

// ==================== % m/v ====================
function calcMV(tipo) {
    const masaSoluto = parseFloat(document.getElementById('mv-masa-soluto').value);
    const volumen = parseFloat(document.getElementById('mv-volumen').value);
    const percent = parseFloat(document.getElementById('mv-percent').value);
    let resultado = '';

    if (tipo === 'percent') {
        if (isNaN(masaSoluto) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa masa del soluto y volumen');
            return;
        }
        const calc = (masaSoluto / volumen) * 100;
        resultado = `% m/v = <strong>${calc.toFixed(3)}</strong> %`;
    } 
    else if (tipo === 'masa-soluto') {
        if (isNaN(percent) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa % m/v y volumen');
            return;
        }
        const calc = (percent / 100) * volumen;
        resultado = `Masa del soluto = <strong>${calc.toFixed(3)}</strong> g`;
    } 
    else if (tipo === 'volumen') {
        if (isNaN(percent) || isNaN(masaSoluto) || percent <= 0) {
            alert('❌ Ingresa % m/v y masa del soluto');
            return;
        }
        const calc = masaSoluto / (percent / 100);
        resultado = `Volumen de la solución = <strong>${calc.toFixed(3)}</strong> mL`;
    }
    document.getElementById('mv-result').innerHTML = resultado;
}

// ==================== % v/v ====================
function calcVV(tipo) {
    const volSoluto = parseFloat(document.getElementById('vv-vol-soluto').value);
    const volSolucion = parseFloat(document.getElementById('vv-vol-solucion').value);
    const percent = parseFloat(document.getElementById('vv-percent').value);
    let resultado = '';

    if (tipo === 'percent') {
        if (isNaN(volSoluto) || isNaN(volSolucion) || volSolucion <= 0) {
            alert('❌ Ingresa ambos volúmenes');
            return;
        }
        const calc = (volSoluto / volSolucion) * 100;
        resultado = `% v/v = <strong>${calc.toFixed(3)}</strong> %`;
    } 
    else if (tipo === 'vol-soluto') {
        if (isNaN(percent) || isNaN(volSolucion) || volSolucion <= 0) {
            alert('❌ Ingresa % v/v y volumen solución');
            return;
        }
        const calc = (percent / 100) * volSolucion;
        resultado = `Volumen del soluto = <strong>${calc.toFixed(3)}</strong> mL`;
    } 
    else if (tipo === 'vol-solucion') {
        if (isNaN(percent) || isNaN(volSoluto) || percent <= 0) {
            alert('❌ Ingresa % v/v y volumen soluto');
            return;
        }
        const calc = volSoluto / (percent / 100);
        resultado = `Volumen de la solución = <strong>${calc.toFixed(3)}</strong> mL`;
    }
    document.getElementById('vv-result').innerHTML = resultado;
}

// ==================== ppm (mg/L) - volumen de disolución ====================
function calcPPMVol(tipo) {
    const masaSoluto = parseFloat(document.getElementById('ppmv-masa-soluto').value); // mg
    const volumen = parseFloat(document.getElementById('ppmv-volumen').value); // L
    const ppm = parseFloat(document.getElementById('ppmv-value').value);
    let resultado = '';

    if (tipo === 'ppm') {
        if (isNaN(masaSoluto) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa masa del soluto (mg) y volumen de la disolución (L)');
            return;
        }
        const calc = masaSoluto / volumen;
        resultado = `ppm (mg/L) = <strong>${calc.toFixed(3)}</strong>`;
    }
    else if (tipo === 'masa-soluto') {
        if (isNaN(ppm) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa ppm y volumen de la disolución (L)');
            return;
        }
        const calc = ppm * volumen;
        resultado = `Masa del soluto = <strong>${calc.toFixed(3)}</strong> mg`;
    }
    else if (tipo === 'volumen') {
        if (isNaN(ppm) || isNaN(masaSoluto) || ppm <= 0) {
            alert('❌ Ingresa ppm y masa del soluto (mg)');
            return;
        }
        const calc = masaSoluto / ppm;
        resultado = `Volumen de la disolución = <strong>${calc.toFixed(3)}</strong> L`;
    }
    document.getElementById('ppmv-result').innerHTML = resultado;
}

// ==================== ppm (mg/kg) - masa de disolución ====================
function calcPPMMasa(tipo) {
    const masaSoluto = parseFloat(document.getElementById('ppmm-masa-soluto').value); // mg
    const masaDisolucion = parseFloat(document.getElementById('ppmm-masa-disolucion').value); // kg
    const ppm = parseFloat(document.getElementById('ppmm-value').value);
    let resultado = '';

    if (tipo === 'ppm') {
        if (isNaN(masaSoluto) || isNaN(masaDisolucion) || masaDisolucion <= 0) {
            alert('❌ Ingresa masa del soluto (mg) y masa de la disolución (kg)');
            return;
        }
        const calc = masaSoluto / masaDisolucion;
        resultado = `ppm (mg/kg) = <strong>${calc.toFixed(3)}</strong>`;
    }
    else if (tipo === 'masa-soluto') {
        if (isNaN(ppm) || isNaN(masaDisolucion) || masaDisolucion <= 0) {
            alert('❌ Ingresa ppm y masa de la disolución (kg)');
            return;
        }
        const calc = ppm * masaDisolucion;
        resultado = `Masa del soluto = <strong>${calc.toFixed(3)}</strong> mg`;
    }
    else if (tipo === 'masa-disolucion') {
        if (isNaN(ppm) || isNaN(masaSoluto) || ppm <= 0) {
            alert('❌ Ingresa ppm y masa del soluto (mg)');
            return;
        }
        const calc = masaSoluto / ppm;
        resultado = `Masa de la disolución = <strong>${calc.toFixed(3)}</strong> kg`;
    }
    document.getElementById('ppmm-result').innerHTML = resultado;
}

// ==================== Molaridad ====================
function calcM(tipo) {
    const moles = parseFloat(document.getElementById('m-moles').value);
    const volumen = parseFloat(document.getElementById('m-volumen').value);
    const M = parseFloat(document.getElementById('m-value').value);
    let resultado = '';

    if (tipo === 'm') {
        if (isNaN(moles) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa moles y volumen');
            return;
        }
        const calc = moles / volumen;
        resultado = `Molaridad = <strong>${calc.toFixed(3)}</strong> M`;
    } 
    else if (tipo === 'moles') {
        if (isNaN(M) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa M y volumen');
            return;
        }
        const calc = M * volumen;
        resultado = `Moles de soluto = <strong>${calc.toFixed(3)}</strong>`;
    } 
    else if (tipo === 'volumen') {
        if (isNaN(M) || isNaN(moles) || M <= 0) {
            alert('❌ Ingresa M y moles');
            return;
        }
        const calc = moles / M;
        resultado = `Volumen = <strong>${calc.toFixed(3)}</strong> L`;
    }
    document.getElementById('m-result').innerHTML = resultado;
}

// ==================== Normalidad ====================
function calcN(tipo) {
    const moles = parseFloat(document.getElementById('n-moles').value);
    const factor = parseFloat(document.getElementById('n-factor').value);
    const volumen = parseFloat(document.getElementById('n-volumen').value);
    const N = parseFloat(document.getElementById('n-value').value);
    let resultado = '';

    if (tipo === 'n') {
        if (isNaN(moles) || isNaN(factor) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa todos los valores (factor n ≥ 1)');
            return;
        }
        const calc = (moles * factor) / volumen;
        resultado = `Normalidad = <strong>${calc.toFixed(3)}</strong> N`;
    } 
    else if (tipo === 'moles') {
        if (isNaN(N) || isNaN(factor) || isNaN(volumen) || volumen <= 0) {
            alert('❌ Ingresa N, factor y volumen');
            return;
        }
        const calc = (N * volumen) / factor;
        resultado = `Moles de soluto = <strong>${calc.toFixed(3)}</strong>`;
    } 
    else if (tipo === 'volumen') {
        if (isNaN(N) || isNaN(moles) || isNaN(factor) || N <= 0) {
            alert('❌ Ingresa N, moles y factor');
            return;
        }
        const calc = (moles * factor) / N;
        resultado = `Volumen = <strong>${calc.toFixed(3)}</strong> L`;
    }
    document.getElementById('n-result').innerHTML = resultado;
}

// ==================== Fracción molar ====================
function calcX(tipo) {
    const molesSoluto = parseFloat(document.getElementById('x-moles-soluto').value);
    const molesSolvente = parseFloat(document.getElementById('x-moles-solvente').value);
    const X = parseFloat(document.getElementById('x-value').value);
    let resultado = '';

    if (tipo === 'x') {
        if (isNaN(molesSoluto) || isNaN(molesSolvente)) {
            alert('❌ Ingresa ambos moles');
            return;
        }
        const total = molesSoluto + molesSolvente;
        const calc = total === 0 ? 0 : molesSoluto / total;
        resultado = `X_soluto = <strong>${calc.toFixed(3)}</strong>`;
    } 
    else if (tipo === 'moles-soluto') {
        if (isNaN(X) || isNaN(molesSolvente) || X >= 1 || X <= 0) {
            alert('❌ Ingresa X (0 < X < 1) y moles solvente');
            return;
        }
        const calc = (X * molesSolvente) / (1 - X);
        resultado = `Moles de soluto = <strong>${calc.toFixed(3)}</strong>`;
    } 
    else if (tipo === 'moles-solvente') {
        if (isNaN(X) || isNaN(molesSoluto) || X >= 1 || X <= 0) {
            alert('❌ Ingresa X (0 < X < 1) y moles soluto');
            return;
        }
        const calc = molesSoluto * (1 - X) / X;
        resultado = `Moles de solvente = <strong>${calc.toFixed(3)}</strong>`;
    }
    document.getElementById('x-result').innerHTML = resultado;
}

// ==================== Cargar ejemplos ====================
function loadExample(tipo, v1, v2, v3) {
    if (tipo === 'mm') {
        document.getElementById('mm-masa-soluto').value = v1 || '';
        document.getElementById('mm-masa-solucion').value = v2 || '';
        document.getElementById('mm-percent').value = v3 || '';
        calcMM('percent');
    } else if (tipo === 'mv') {
        document.getElementById('mv-masa-soluto').value = v1 || '';
        document.getElementById('mv-volumen').value = v2 || '';
        document.getElementById('mv-percent').value = v3 || '';
        calcMV('percent');
    } else if (tipo === 'vv') {
        document.getElementById('vv-vol-soluto').value = v1 || '';
        document.getElementById('vv-vol-solucion').value = v2 || '';
        document.getElementById('vv-percent').value = v3 || '';
        calcVV('percent');
    } else if (tipo === 'm') {
        document.getElementById('m-moles').value = v1 || '';
        document.getElementById('m-volumen').value = v2 || '';
        document.getElementById('m-value').value = v3 || '';
        calcM('m');
    } else if (tipo === 'x') {
        document.getElementById('x-moles-soluto').value = v1 || '';
        document.getElementById('x-moles-solvente').value = v2 || '';
        document.getElementById('x-value').value = v3 || '';
        calcX('x');
    }
    // Scroll suave al resultado
    document.getElementById(tipo + '-result').scrollIntoView({ behavior: 'smooth' });
}

function loadExampleN(moles, factor, volumen, N) {
    document.getElementById('n-moles').value = moles || '';
    document.getElementById('n-factor').value = factor || '';
    document.getElementById('n-volumen').value = volumen || '';
    document.getElementById('n-value').value = N || '';
    calcN('n');
}

function loadExamplePPMVol(masaSoluto, volumen, ppm) {
    document.getElementById('ppmv-masa-soluto').value = masaSoluto || '';
    document.getElementById('ppmv-volumen').value = volumen || '';
    document.getElementById('ppmv-value').value = ppm || '';
    calcPPMVol('ppm');
    document.getElementById('ppmv-result').scrollIntoView({ behavior: 'smooth' });
}

function loadExamplePPMMasa(masaSoluto, masaDisolucion, ppm) {
    document.getElementById('ppmm-masa-soluto').value = masaSoluto || '';
    document.getElementById('ppmm-masa-disolucion').value = masaDisolucion || '';
    document.getElementById('ppmm-value').value = ppm || '';
    calcPPMMasa('ppm');
    document.getElementById('ppmm-result').scrollIntoView({ behavior: 'smooth' });
}
