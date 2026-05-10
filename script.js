function solve(){

  const text = document.getElementById("input").value;

  document.getElementById("output").innerHTML = `
    🧠 <b>حل مبسط:</b><br><br>
    ${text}<br><br>
    ✔ الخطوة 1: فهم السؤال<br>
    ✔ الخطوة 2: تطبيق القوانين<br>
    ✔ الخطوة 3: الحل النهائي (نحتاج AI حقيقي لاحقاً)
  `;
}

function fill(text){
  document.getElementById("input").value = text;
}
