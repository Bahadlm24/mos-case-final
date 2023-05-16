var makineler = [];
var urunler = [];
var icerikler = [];

// Makine tablosunu güncelleyen fonksiyon
function makineTablosunuGuncelle() {
  var makineTablosu = document.getElementById("makine-tablosu");
  makineTablosu.innerHTML = "";

  for (var i = 0; i < makineler.length; i++) {
    var makine = makineler[i];

    var row = document.createElement("tr");

    var idCell = document.createElement("td");
    idCell.textContent = makine.id;
    row.appendChild(idCell);

    var adCell = document.createElement("td");
    adCell.textContent = makine.ad;
    row.appendChild(adCell);

    var aciklamaCell = document.createElement("td");
    aciklamaCell.textContent = makine.aciklama;
    row.appendChild(aciklamaCell);

    var urunAdediCell = document.createElement("td");
    urunAdediCell.textContent = makine.urunAdedi;
    row.appendChild(urunAdediCell);

    var grupIdCell = document.createElement("td");
    grupIdCell.textContent = makine.grupId;
    row.appendChild(grupIdCell);

    var islemlerCell = document.createElement("td");
var duzenleButton = document.createElement("button");
duzenleButton.textContent = "Düzenle";
duzenleButton.className = "btn btn-primary btn-sm mr-1";
duzenleButton.onclick = (function (index) {
  return function () {
    duzenleMakine(index);
  };
})(i);
islemlerCell.appendChild(duzenleButton);

var silButton = document.createElement("button");
silButton.textContent = "Sil";
silButton.className = "btn btn-danger btn-sm";
silButton.onclick = (function (index) {
  return function () {
    silMakine(index);
  };
})(i);
islemlerCell.appendChild(silButton);

row.appendChild(islemlerCell);

makineTablosu.appendChild(row);

}
}

// Ürün tablosunu güncelleyen fonksiyon
function urunTablosunuGuncelle() {
var urunTablosu = document.getElementById("urun-tablosu");
urunTablosu.innerHTML = "";

for (var i = 0; i < urunler.length; i++) {
var urun = urunler[i];

var row = document.createElement("tr");

var idCell = document.createElement("td");
idCell.textContent = urun.id;
row.appendChild(idCell);

var adCell = document.createElement("td");
adCell.textContent = urun.ad;
row.appendChild(adCell);

var aciklamaCell = document.createElement("td");
aciklamaCell.textContent = urun.aciklama;
row.appendChild(aciklamaCell);

var islemlerCell = document.createElement("td");
var duzenleButton = document.createElement("button");
duzenleButton.textContent = "Düzenle";
duzenleButton.className = "btn btn-primary btn-sm mr-1";
duzenleButton.onclick = (function (index) {
  return function () {
    duzenleUrun(index);
  };
})(i);
islemlerCell.appendChild(duzenleButton);

var silButton = document.createElement("button");
silButton.textContent = "Sil";
silButton.className = "btn btn-danger btn-sm";
silButton.onclick = (function (index) {
  return function () {
    silUrun(index);
  };
})(i);
islemlerCell.appendChild(silButton);

row.appendChild(islemlerCell);

urunTablosu.appendChild(row);

}
}

// Makine İçerikleri tablosunu güncelleyen fonksiyon
function icerikTablosunuGuncelle() {
var icerikTablosu = document.getElementById("icerik-tablosu");
icerikTablosu.innerHTML = "";

for (var i = 0; i < icerikler.length; i++) {
var icerik = icerikler[i];

var row = document.createElement("tr");

var idCell = document.createElement("td");
idCell.textContent = icerik.id;
row.appendChild(idCell);

var metinCell = document.createElement("td");
metinCell.textContent = icerik.metin;
row.appendChild(metinCell);

var urunAdediCell = document.createElement("td");
urunAdediCell.textContent = icerik.urunAdedi;
row.appendChild(urunAdediCell);

var islemlerCell = document.createElement("td");
var duzenleButton = document.createElement("button");
duzenleButton.textContent = "Düzenle";
duzenleButton.className = "btn btn-primary btn-sm mr-1";
duzenleButton.onclick = (function (index) {
  return function () {
    duzenleIcerik(index);
  };
})(i);
islemlerCell.appendChild(duzenleButton);

var silButton = document.createElement("button");
silButton.textContent = "Sil";
silButton.className = "btn btn-danger btn-sm";
silButton.onclick = (function (index) {
  return function () {
    silIcerik(index);
  };
})(i);
islemlerCell.appendChild(silButton);

row.appendChild(islemlerCell);

icerikTablosu.appendChild(row);

}
}

// Makine ekleme işlevi
function ekleMakine() {
var makineId = document.getElementById("makine-id").value;
var makineAd = document.getElementById("makine-ad").value;
var makineAciklama = document.getElementById("makine-aciklama").value;
var makineUrunAdedi = document.getElementById("makine-urun-adet").value;
var grupId = document.getElementById("grup-id").value;

var makine = {
id: makineId,
ad: makineAd,
aciklama: makineAciklama,
urunAdedi: makineUrunAdedi,
grupId: grupId
};

makineler.push(makine);
makineTablosunuGuncelle();

// Alanları temizle
document.getElementById("makine-id").value = "";
document.getElementById("makine-ad").value = "";
document.getElementById("makine-aciklama").value = "";
document.getElementById("makine-urun-adet").value = "";
document.getElementById("grup-id").value = "";
}

// Ürün ekleme işlevi
function ekleUrun() {
var urunId = document.getElementById("urun-id").value;
var urunAd = document.getElementById("urun-ad").value;
var urunAciklama = document.getElementById("urun-aciklama").value;

var urun = {
id: urunId,
ad: urunAd,
aciklama: urunAciklama
};

urunler.push(urun);
urunTablosunuGuncelle();

// Alanları temizle
document.getElementById("urun-id").value = "";
document.getElementById("urun-ad").value = "";
document.getElementById("urun-aciklama").value = "";
}

// Makine İçerikleri ekleme işlevi
function ekleIcerik() {
var icerikId = document.getElementById("ic-id").value;
var icerikMetin = document.getElementById("ic-metin").value;
var icerikUrunAdedi = document.getElementById("ic-urun-adet").value;

var icerik = {
id: icerikId,
metin: icerikMetin,
urunAdedi: icerikUrunAdedi
};

icerikler.push(icerik);
icerikTablosunuGuncelle();

// Alanları temizle
document.getElementById("ic-id").value = "";
document.getElementById("ic-metin").value = "";
document.getElementById("ic-urun-adet").value = "";
}

// Makine düzenleme işlevi
function duzenleMakine(index) {
var makine = makineler[index];

document.getElementById("makine-id").value = makine.id;
document.getElementById("makine-ad").value = makine.ad;
document.getElementById("makine-aciklama").value = makine.aciklama;
document.getElementById("makine-urun-adet").value = makine.urunAdedi;
document.getElementById("grup-id").value = makine.grupId;

var ekleButton = document.querySelector("button[onclick='ekleMakine()']");
ekleButton.textContent = "Güncelle";
ekleButton.onclick = function () {
guncelleMakine(index);
};
}

// Ürün düzenleme işlevi
function duzenleUrun(index) {
var urun = urunler[index];

document.getElementById("urun-id").value = urun.id;
document.getElementById("urun-ad").value = urun.ad;
document.getElementById("urun-aciklama").value = urun.aciklama;

var ekleButton = document.querySelector("button[onclick='ekleUrun()']");
ekleButton.textContent = "Güncelle";
ekleButton.onclick = function () {
guncelleUrun(index);
};
}

// Makine İçerikleri düzenleme işlevi
function duzenleIcerik(index) {
var icerik = icerikler[index];

document.getElementById("ic-id").value = icerik.id;
document.getElementById("ic-metin").value = icerik.metin;
document.getElementById("ic-urun-adet").value = icerik.urunAdedi;

var ekleButton = document.querySelector("button[onclick='ekleIcerik()']");
ekleButton.textContent = "Güncelle";
ekleButton.onclick = function () {
guncelleIcerik(index);
};
}

// Makine güncelleme işlevi
function guncelleMakine(index) {
var makineId = document.getElementById("makine-id").value;
var makineAd = document.getElementById("makine-ad").value;
var makineAciklama = document.getElementById("makine-aciklama").value;
var makineUrunAdedi = document.getElementById("makine-urun-adet").value;
var grupId = document.getElementById("grup-id").value;

var makine = {
id: makineId,
ad: makineAd,
aciklama: makineAciklama,
urunAdedi: makineUrunAdedi,
grupId: grupId
};

makineler[index] = makine;
makineTablosunuGuncelle();

// Alanları temizle
document.getElementById("makine-id").value = "";
document.getElementById("makine-ad").value = "";
document.getElementById("makine-aciklama").value = "";
document.getElementById("makine-urun-adet").value = "";
document.getElementById("grup-id").value = "";

var ekleButton = document.querySelector("button[onclick='ekleMakine()']");
ekleButton.textContent = "Ekle";
ekleButton.onclick = ekleMakine;
}

// Ürün güncelleme işlevi
function guncelleUrun(index) {
var urunId = document.getElementById("urun-id").value;
var urunAd = document.getElementById("urun-ad").value;
var urunAciklama = document.getElementById("urun-aciklama").value;

var urun = {
id: urunId,
ad: urunAd,
aciklama: urunAciklama
};

urunler[index] = urun;
urunTablosunuGuncelle();

// Alanları temizle
document.getElementById("urun-id").value = "";
document.getElementById("urun-ad").value = "";
document.getElementById("urun-aciklama").value = "";

var ekleButton = document.querySelector("button[onclick='ekleUrun()']");
ekleButton.textContent = "Ekle";
ekleButton.onclick = ekleUrun;
}

// Makine İçerikleri güncelleme işlevi
function guncelleIcerik(index) {
var icerikId = document.getElementById("ic-id").value;
var icerikMetin = document.getElementById("ic-metin").value;
var icerikUrunAdedi = document.getElementById("ic-urun-adet").value;

var icerik = {
id: icerikId,
metin: icerikMetin,
urunAdedi: icerikUrunAdedi
};

icerikler[index] = icerik;
icerikTablosunuGuncelle();

// Alanları temizle
document.getElementById("ic-id").value = "";
document.getElementById("ic-metin").value = "";
document.getElementById("ic-urun-adet").value = "";

var ekleButton = document.querySelector("button[onclick='ekleIcerik()']");
ekleButton.textContent = "Ekle";
ekleButton.onclick = ekleIcerik;
}

// Makine silme işlevi
function silMakine(index) {
makineler.splice(index, 1);
makineTablosunuGuncelle();
}

// Ürün silme işlevi
function silUrun(index) {
urunler.splice(index, 1);
urunTablosunuGuncelle();
}

// Makine İçerikleri silme işlevi
function silIcerik(index) {
icerikler.splice(index, 1);
icerikTablosunuGuncelle();
}

// Örnek veri oluşturma
function ornekVeriOlustur() {
var makine1 = {
id: "1",
ad: "Makine 1",
aciklama: "Bu makine işlem yapar.",
urunAdedi: 10,
grupId: "A"
};

var makine2 = {
    id: "2",
    ad: "Makine 2",
    aciklama: "Bu makine montaj yapar.",
    urunAdedi: 5,
    grupId: "B"
    };
    
    var urun1 = {
    id: "1",
    ad: "Ürün 1",
    aciklama: "Bu ürün yüksek kaliteli malzemeden yapılmıştır."
    };

    var urun2 = {
        id: "2",
        ad: "Ürün 2",
        aciklama: "Bu ürün uzun ömürlüdür."
        
        };
        
        var icerik1 = {
        id: "1",
        metin: "İçerik 1",
        urunAdedi: 3
        };
        
        var icerik2 = {
        id: "2",
        metin: "İçerik 2",
        urunAdedi: 2
        };
        
        makineler.push(makine1, makine2);
        urunler.push(urun1, urun2);
        icerikler.push(icerik1, icerik2);
        
        makineTablosunuGuncelle();
        urunTablosunuGuncelle();
        icerikTablosunuGuncelle();

    }

    // Sayfa yüklendiğinde örnek veriyi oluştur
    window.onload = function () {
    ornekVeriOlustur();
    };