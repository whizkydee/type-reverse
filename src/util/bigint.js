function bigInt(num) {
  // if the number is in scientific notation remove it
  // eslint-disable-next-line
  if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
    var zero = '0',
    parts = String(num).toLowerCase().split('e'), // split into coeff and exponent
    e = parts.pop(),// store the exponential part
    l = Math.abs(e), // get the number of zeros
    sign = e/l,
    coeff_array = parts[0].split('.');
    if (sign === -1) {
      num = zero + '.' + new Array(l).join(zero) + coeff_array.join('');
    }
    else {
      var dec = coeff_array[1];
      if (dec) l = l - dec.length;
      num = coeff_array.join('') + new Array(l + 1).join(zero);
    }
  }

  return num;
}

export { bigInt };
