fetch("/quotes")
  .then(r => r.json())
  .then(data => {
    document.getElementById("quote").innerText = data.quote;
  });
