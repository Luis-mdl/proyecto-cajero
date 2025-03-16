const cuentas = [
    { nombre: "Luis", saldo: 200, password: "1234" },
    { nombre: "Francisco", saldo: 290, password: "5678" },
    { nombre: "Martina", saldo: 67, password: "abcd" }
  ];
  
  let selectedAccount = null;
  
  function login() {
    const name = document.getElementById("accountName").value;
    const password = document.getElementById("password").value;
    
    const account = cuentas.find(acc => acc.nombre === name);
    if (account && account.password === password) {
      selectedAccount = account;
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("operations").style.display = "block";
      updateBalance();
    } else {
      alert("Credenciales incorrectas. Intenta de nuevo.");
    }
  }
  
  function updateBalance() {
    document.getElementById("balance").innerText = `Saldo: $${selectedAccount.saldo}`;
  }
  
  function deposit() {
    const amount = parseFloat(prompt("Ingrese el monto a depositar:"));
    if (amount > 0 && (selectedAccount.saldo + amount) <= 990) {
      selectedAccount.saldo += amount;
      updateBalance();
      alert(`Has depositado $${amount}. Nuevo saldo: $${selectedAccount.saldo}`);
    } else {
      alert("Monto inválido o supera el límite de $990.");
    }
  }
  
  function withdraw() {
    const amount = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (amount > 0 && (selectedAccount.saldo - amount) >= 10) {
      selectedAccount.saldo -= amount;
      updateBalance();
      alert(`Has retirado $${amount}. Nuevo saldo: $${selectedAccount.saldo}`);
    } else {
      alert(`Monto inválido o saldo insuficiente (mínimo $10).`)
    
      }
  }
    
  
  function logout() {
    selectedAccount = null;
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("operations").style.display = "none";
  }
  document.getElementById("ingresar").addEventListener("click", login);
  document.getElementById("ingresarMonto").addEventListener("click", deposit);
  document.getElementById("retirarMonto").addEventListener("click", withdraw);
  document.getElementById("salir").addEventListener("click", logout)
  