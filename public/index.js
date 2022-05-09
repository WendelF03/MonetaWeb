const zeroFill = n => {
  return ('0' + n).slice(-2); 
}

const interval = setInterval(() => {
  const now = new Date();
  const data = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();
  const hora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()); 
  document.getElementById('data').innerHTML = data;
  document.getElementById('hora').innerHTML = hora;
}, 1000);
